import React from "react";

// styles
import "./AdminComponent.scss";

// general components
import { AdminNavbar } from "../../generalComoponents/AdminNavbar/AdminNavbar";
import { MainAdminComponent } from "../../generalComoponents/MainAdminComponent/MainAdminComponent";

export const AdminComponent = () => {
  return (
    <div className="adiminComponentConatainer">
      <AdminNavbar />
      <MainAdminComponent />
    </div>
  );
};
