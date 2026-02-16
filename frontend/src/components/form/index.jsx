import React from "react";
import { Button } from "../ui/button";
import FormControls from "./formControls/FormControls";

export default function CommonForm({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
}) {

    function handleSubmit(event){
        event.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Render all the form controls here */}
      <FormControls formControls={formControls} formData={formData} setFormData={setFormData} className="mb-5"/>
      {/* <Button>{buttonText || "Submit"}</Button> */}
    </form>
  );
}
