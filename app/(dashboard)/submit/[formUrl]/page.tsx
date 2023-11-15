import { GetFormContentByUrl } from "@/actions/form";
import FormSubmitComponent from "@/components/FormSubmitComponent";
import { FormElementInstance } from "@/components/form/FormElements";
import React from "react";

const SubmitPage = async ({
  params,
}: {
  params: {
    formUrl: string;
  };
}) => {
  const form = await GetFormContentByUrl(params.formUrl);

  if (!form) {
    throw new Error("form not found");
  }

  const formContent = JSON.parse(form.content) as FormElementInstance[];

  return <FormSubmitComponent formUrl={params.formUrl} content={formContent} />;
};

export default SubmitPage;
