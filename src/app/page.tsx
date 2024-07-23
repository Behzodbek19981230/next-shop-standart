"use client";
import Footer from "@/components/footer";
import Contact from "@/components/landing/Contact";
import Home from "@/components/landing/home";
import Products from "@/components/landing/Products";
import Publication from "@/components/landing/Publication";
import Services from "@/components/landing/Services";
import Standarts from "@/components/landing/Standarts";
import HomeLayout from "@/components/layouts/HomeLayout";
import React, { useEffect } from "react";

const Landing: React.FC = () => {
  useEffect(() => {
    const scrollFunction = () => {
      const element = document.getElementById("back-to-top");
      if (element) {
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      }
    };

    window.onscroll = scrollFunction;

    return () => {
      window.onscroll = null;
    };
  }, []);

  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <React.Fragment>
      <HomeLayout>
        <div className="layout-wrapper landing bg-light">
          <Home />
          <Standarts />
          <Products />
          <Services />
          <Publication />
          <Contact />
          <button
            onClick={toTop}
            className="btn btn-danger btn-icon landing-back-top"
            id="back-to-top"
          >
            <i className="ri-arrow-up-line"></i>
          </button>
        </div>
      </HomeLayout>
    </React.Fragment>
  );
};

export default Landing;
