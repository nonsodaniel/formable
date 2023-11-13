import React from "react";
import SidebarButtonElement from "../SidebarButtonElement";
import { FormElements } from "../form/FormElements";

const DesignerSidebar = () => {
  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
      <SidebarButtonElement formElement={FormElements.TextField} />
    </aside>
  );
};

export default DesignerSidebar;
