import React from "react";
import "../views/SidebarRow.css";

function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow__icon"></Icon>
      <h5 className="sidebarRow__title">{title}</h5>
    </div>
  );
}

export default SidebarRow;
