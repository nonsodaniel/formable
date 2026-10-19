import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { Form } from "@prisma/client";
import { formatDistance } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

const FormCard = ({ form, animationDelay = "0ms" }: { form: Form; animationDelay?: string }) => {
  return (
    <Card
      className="flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 animate-in fade-in-0 slide-in-from-bottom-4 duration-500 fill-mode-both"
      style={{ animationDelay }}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate font-semibold text-base">{form.name}</span>
          {form.published ? (
            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 shrink-0">
              Published
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800 shrink-0">
              Draft
            </span>
          )}
        </CardTitle>
        <CardDescription className="flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {formatDistance(form.createdAt, new Date(), { addSuffix: true })}
          </span>
          {form.published && (
            <span className="flex items-center gap-2">
              <LuView className="h-3.5 w-3.5 text-blue-500" />
              <span>{form.visits.toLocaleString()}</span>
              <FaWpforms className="h-3.5 w-3.5 text-violet-500" />
              <span>{form.submissions.toLocaleString()}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
        {form.description || "No description"}
      </CardContent>
      <CardFooter className="pt-4">
        {form.published ? (
          <Button asChild className="w-full gap-2" size="sm">
            <Link href={`/forms/${form.id}`}>
              View submissions <BiRightArrowAlt />
            </Link>
          </Button>
        ) : (
          <Button asChild variant="outline" className="w-full gap-2 border-primary/30 text-primary hover:bg-primary/5" size="sm">
            <Link href={`/builder/${form.id}`}>
              Edit form <FaEdit />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default FormCard;
