"use client";
import React, { useState, useEffect } from "react";
import { Collapse, Container, NavbarToggler } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import logodark from "@/assets/images/nft/logo.svg";
import logolight from "@/assets/images/nft/logo.svg";
import CustomScrollspy from "@/components/landing/CustomScrollspy";
import LanguageDropdown from "@/components/language";
import MyCartDropdown from "@/components/MyCartDropdown";
// import LanguageDropdown from "components/Common/LanguageDropdown";
// import MyCartDropdown from "components/Common/MyCartDropdown";

const Navbar: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [navClass, setNavClass] = useState<string>("");

  const toggle = () => setIsOpenMenu(!isOpenMenu);

  useEffect(() => {
    const scrollNavigation = () => {
      const scrollup = document.documentElement.scrollTop;
      if (scrollup > 50) {
        setNavClass("is-sticky");
      } else {
        setNavClass("");
      }
    };

    window.addEventListener("scroll", scrollNavigation, true);
    return () => window.removeEventListener("scroll", scrollNavigation, true);
  }, []);

  return (
    <React.Fragment>
      <nav
        className={`navbar navbar-expand-lg navbar-landing navbar-light fixed-top ${navClass}`}
        id="navbar"
      >
        <Container className="gap-2">
          <Link className="navbar-brand" href="/">
            <Image
              src={logodark}
              className="card-logo card-logo-dark"
              alt="logo dark"
              height={44}
              width={150} // You need to provide a width
            />
            <Image
              src={logolight}
              className="card-logo card-logo-light"
              alt="logo light"
              height={44}
              width={150} // You need to provide a width
            />
          </Link>

          <NavbarToggler
            className="navbar-toggler py-0 fs-20 text-body"
            onClick={toggle}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu"></i>
          </NavbarToggler>

          <div id="navbarSupportedContent" className="navbar-collapse collapse">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Asosiy sahifa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Mahsulotlar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/publications">
                  Nashrlar
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link"} href="/services">
                  Xizmatlar
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link"} href="/contact">
                  Kontakt
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link"} href="/subscriptions">
                  Obunalar
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link"} href="/support">
                  Texnik yordam
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <li className="header-item">
              {" "}
              <LanguageDropdown />
            </li>
            <li className="header-item">
              {" "}
              <MyCartDropdown />
            </li>
            <li className="nav-item d-flex align-items-center header-item btn-ghost-secondary">
              <div
                onClick={() =>
                  (window.location.href = `https://tris.uz/auth?callback=${process.env.NEXT_PUBLIC_BASE_URL}`)
                }
                className="nav-link cursor-pointer"
              >
                <i className="ri-login-box-line" style={{ fontSize: 28 }}></i>
              </div>
            </li>
          </div>
        </Container>
      </nav>
      <div className="bg-overlay bg-overlay-pattern"></div>
    </React.Fragment>
  );
};

export default Navbar;
