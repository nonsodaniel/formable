import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { Form } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { formatDistance } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";

const FormCard = ({ form }: { form: Form }) => {
  return (
    <Card className="flex flex-col justify-between hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate font-semibold text-base">{form.name}</span>
          {form.published ? (
            <Badge variant="default" className="text-xs">Published</Badge>
          ) : (
            <Badge variant="secondary" className="text-xs">Draft</Badge>
          )}
        </CardTitle>
        <CardDescription className="flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {formatDistance(form.createdAt, new Date(), { addSuffix: true })}
          </span>
          {form.published && (
            <span className="flex items-center gap-2">
              <LuView className="h-3.5 w-3.5" />
              <span>{form.visits.toLocaleString()}</span>
              <FaWpforms className="h-3.5 w-3.5" />
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
          <Button asChild variant="outline" className="w-full gap-2" size="sm">
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
