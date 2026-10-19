import React from "react";
import FormCard from "./FormCard";
import { GetForms } from "@/actions/form";

const FormCards = async () => {
  const forms = await GetForms();
  return (
    <>
      {forms.map((form, i) => (
        <FormCard key={form.id} form={form} animationDelay={`${i * 60}ms`} />
      ))}
    </>
  );
};

export default FormCards;
