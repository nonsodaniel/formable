import { GetFormById, GetFormWithSubmissions } from "@/actions/form";
import FormLinkShare from "@/components/FormLinkShare";
import React, { ReactNode } from "react";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format, formatDistance } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { StatsCard } from "@/components/stats/StatsCard";
import VisitButton from "@/components/VisitButton";
import { FormElementInstance, ElementsType } from "@/components/form/FormElements";

async function FormDetailPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const form = await GetFormById(Number(id));

  if (!form) {
    throw new Error("form not found");
  }

  const { visits, submissions } = form;

  let submissionRate = 0;

  if (visits > 0) {
    submissionRate = (submissions / visits) * 100;
  }

  const bounceRate = 100 - submissionRate;

  return (
    <>
      <div className="py-10 border-b border-muted">
        <div className="flex justify-between container">
          <h1 className="text-2xl font-semibold truncate">{form.name}</h1>
          <VisitButton shareUrl={form.shareURL} />
        </div>
      </div>
      <div className="py-4 border-b border-muted">
        <div className="container flex gap-2 items-center justify-between">
          <FormLinkShare shareUrl={form.shareURL} />
        </div>
      </div>
      <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container">
        <StatsCard
          title="Total visits"
          icon={<div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30"><LuView className="h-4 w-4 text-blue-600 dark:text-blue-400" /></div>}
          helperText="All time form visits"
          value={visits.toLocaleString() || ""}
          loading={false}
          className="border-t-2 border-t-blue-500"
        />
        <StatsCard
          title="Total submissions"
          icon={<div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900/30"><FaWpforms className="h-4 w-4 text-violet-600 dark:text-violet-400" /></div>}
          helperText="All time form submissions"
          value={submissions.toLocaleString() || ""}
          loading={false}
          className="border-t-2 border-t-violet-500"
        />
        <StatsCard
          title="Submission rate"
          icon={<div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30"><HiCursorClick className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /></div>}
          helperText="Visits that result in form submission"
          value={submissionRate.toLocaleString() + "%" || ""}
          loading={false}
          className="border-t-2 border-t-emerald-500"
        />
        <StatsCard
          title="Bounce rate"
          icon={<div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30"><TbArrowBounce className="h-4 w-4 text-amber-600 dark:text-amber-400" /></div>}
          helperText="Visits that leave without interacting"
          value={bounceRate.toLocaleString() + "%" || ""}
          loading={false}
          className="border-t-2 border-t-amber-500"
        />
      </div>

      <div className="container pt-10">
        <SubmissionsTable id={form.id} />
      </div>
    </>
  );
}

export default FormDetailPage;

type Row = { [key: string]: string } & {
  submittedAt: Date;
};

async function SubmissionsTable({ id }: { id: number }) {
  const form = await GetFormWithSubmissions(id);

  if (!form) {
    throw new Error("form not found");
  }

  const formElements = JSON.parse(form.content) as FormElementInstance[];
  const columns: {
    id: string;
    label: string;
    required: boolean;
    type: ElementsType;
  }[] = [];

  formElements.forEach((element) => {
    switch (element.type) {
      case "TextField":
      case "NumberField":
      case "TextAreaField":
      case "DateField":
      case "SelectField":
      case "CheckboxField":
      case "EmailField":
      case "PhoneField":
      case "RadioField":
      case "RatingField":
        columns.push({
          id: element.id,
          label: element.extraAttributes?.label,
          required: element.extraAttributes?.required,
          type: element.type,
        });
        break;
      default:
        break;
    }
  });

  const rows: Row[] = [];
  form.FormSubmissions.forEach((submission) => {
    const content = JSON.parse(submission.content);
    rows.push({
      ...content,
      submittedAt: submission.createdAt,
    });
  });

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Submissions</h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.id} className="uppercase">
                  {column.label}
                </TableHead>
              ))}
              <TableHead className="text-muted-foreground text-right uppercase">Submitted at</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <RowCell key={column.id} type={column.type} value={row[column.id]} />
                ))}
                <TableCell className="text-muted-foreground text-right">
                  {formatDistance(row.submittedAt, new Date(), {
                    addSuffix: true,
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

function RowCell({ type, value }: { type: ElementsType; value: string }) {
  let node: ReactNode = value;

  switch (type) {
    case "DateField":
      if (!value) break;
      const date = new Date(value);
      node = <Badge variant={"outline"}>{format(date, "dd/MM/yyyy")}</Badge>;
      break;
    case "CheckboxField":
      const checked = value === "true";
      node = <Checkbox checked={checked} disabled />;
      break;
  }

  return <TableCell>{node}</TableCell>;
}
