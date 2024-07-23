"use client";
import Link from "next/link";

import React from "react";
import {
  Card,
  CardBody,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

export default function UnverSalFilter() {
  function printDiv() {
    const printWindow = window.open("", "", "height=600,width=800");
    if (printWindow) {
      printWindow.document.write("<html><head><title>Print</title>");
      printWindow.document.write("</head><body >");
      printWindow.document.write(
        document.getElementById("section-to-print")?.innerHTML as string
      );
      printWindow.document.write("</body></html>");
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  }

  return (
    <Card>
      <CardBody className="d-flex justify-content-between align-items-center">
        <div
          className={`btn btn-outline-primary d-flex align-items-center justify-content-center`}
          style={{ width: 50, height: 50 }}
        >
          <i className=" ri-filter-line" style={{ fontSize: 24 }}></i>
        </div>
        <div className="w-50">
          <div style={{ fontSize: 20, fontWeight: 600 }}>
            SS ISO 50001:2018+A1:2024
          </div>
          <p className="d-flex align-items-center gap-2 font-fam-Oswald fw-normal ">
            Geotexnik tadqiqotlar va sinovlar. Gruntlarni laboratoriya
            sinovlari.Geotexnik tadqiqotlar va sinovlar. Gruntlarni laboratoriya
            sinovlari. 12-qism: Oquvchanlik va qayishqoqlik chegaralarini
            aniqlash 12-qism: Oquvchanlik va qayishqoqlik chegaralarini aniqlash
            qisqa ma’lumot
          </p>
        </div>
        <div>
          <div className="d-flex align-items-center gap-2">
            <i
              className=" ri-calendar-2-line text-primary"
              style={{ fontSize: 20 }}
            ></i>
            04.07.2024
          </div>
        </div>
        <div className="d-flex align-items-center gap-2">
          <UncontrolledDropdown>
            <DropdownToggle
              tag="button"
              style={{ height: 50, fontSize: 16 }}
              className="btn btn-outline-primary "
            >
              Uzbek <i className="mdi mdi-chevron-down"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdownmenu-success">
              <DropdownItem>English </DropdownItem>
              <DropdownItem>Russian </DropdownItem>
              <DropdownItem>Uzbek </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Link
            href="/"
            className=" btn btn-outline-primary d-flex align-items-center justify-content-center"
            style={{ width: 50, height: 50 }}
          >
            <i className="ri-shopping-cart-line" style={{ fontSize: 24 }}></i>
          </Link>
          <Link
            href="/"
            className=" btn btn-outline-primary d-flex align-items-center justify-content-center"
            style={{ width: 50, height: 50 }}
          >
            <i className=" ri-pencil-line" style={{ fontSize: 24 }}></i>
          </Link>
          <Link
            href="/"
            className=" btn btn-outline-primary d-flex align-items-center justify-content-center"
            style={{ width: 50, height: 50 }}
          >
            <i className="ri-file-word-2-line " style={{ fontSize: 24 }}></i>
          </Link>
          <Link
            href={`/documents/pdf/1`}
            className=" btn btn-outline-primary d-flex align-items-center justify-content-center"
            style={{ width: 50, height: 50 }}
          >
            <i className="bx bxs-file-pdf " style={{ fontSize: 28 }}></i>
          </Link>
          <div
            onClick={printDiv}
            className=" btn btn-outline-primary d-flex align-items-center justify-content-center"
            style={{ width: 50, height: 50 }}
          >
            <i className=" ri-printer-line " style={{ fontSize: 24 }}></i>
          </div>

          <Link
            href="/"
            className=" btn btn-outline-primary d-flex align-items-center justify-content-center"
            style={{ width: 50, height: 50 }}
          >
            <i className="ri-share-line" style={{ fontSize: 24 }}></i>
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}
