"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
interface IVisitButtonProps {
  shareUrl: string;
}

const VisitButton = ({ shareUrl }: IVisitButtonProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const shareLink = `${window.location.origin}/submit/${shareUrl}`;
  return (
    <Button
      className="w-[200px]"
      onClick={() => {
        window.open(shareLink, "_blank");
      }}
    >
      Visit
    </Button>
  );
};

export default VisitButton;
