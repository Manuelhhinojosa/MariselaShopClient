import React from "react";

// styles
import "./AdminComponent.scss";

// general components
import { AdminNavbar } from "../../generalComoponents/AdminNavbar/AdminNavbar";
import { CreateProductComponent } from "../../generalComoponents/CreateProductComponent/CreateProductComponent";

export const AdminComponent = () => {
  return (
    <div className="adiminComponentConatainer">
      <AdminNavbar />
      <CreateProductComponent />
    </div>
  );
};
