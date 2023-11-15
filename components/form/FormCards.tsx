import React from "react";
import FormCard from "./FormCard";
import { GetForms } from "@/actions/form";

const FormCards = async () => {
  const forms = await GetForms();
  return (
    <>
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </>
  );
};

export default FormCards;
