import React from "react";
import { FaSpinner } from "react-icons/fa";
import { Button } from "../ui/button";
import { HiSaveAs } from "react-icons/hi";

const SaveFormButton = ({ id }: { id: number }) => {
  const loading = false;

  return (
    <Button variant={"outline"} className="gap-2" disabled={loading}>
      <HiSaveAs className="h-4 w-4" />
      Save
      {loading && <FaSpinner className="animate-spin" />}
    </Button>
  );
};

export default SaveFormButton;
