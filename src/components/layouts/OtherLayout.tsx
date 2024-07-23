import React from "react";
import Footer from "@/components/footer";
import NavbarOther from "@/components/navbar_other";

const OtherLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <NavbarOther />
      <div
        className="layout-wrapper  landing bg-light"
        style={{ paddingTop: 150 }}
      >
        <main>{children}</main>
      </div>{" "}
      <Footer />
    </>
  );
};

export default OtherLayout;
