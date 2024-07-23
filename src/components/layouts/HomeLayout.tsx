import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
