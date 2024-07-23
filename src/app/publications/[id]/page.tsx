import BreadCrumb from "@/components/common/BreadCrumb";
import { recentOrders } from "@/components/common/data/pagesData";
import OtherLayout from "@/components/layouts/OtherLayout";
import Link from "next/link";
import React from "react";
import { CardBody, Col, Container, Table } from "reactstrap";

export default function PublicationDetail() {
  return (
    <OtherLayout>
      <Container>
        <BreadCrumb title={"ГОСТ Р 60.6.3.12-2023"} pageTitle={"Nashrlar"} />
        <div className="row">
          <Col lg={12}>
            <div className="card">
              <div className="card-header border-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className={"search-box me-2  d-inline-block col-6 "}>
                    <input
                      id="search-bar-0"
                      type="text"
                      className="form-control search /"
                      placeholder={"Search..."}
                    />
                    <i className="bx bx-search-alt search-icon"></i>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="d-flex flex-wrap gap-2">
                      <button className="btn btn-primary add-btn me-1">
                        <i className=" ri-download-cloud-2-line align-bottom me-1"></i>{" "}
                        {"Export"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <CardBody>
                <div className="table-responsive table-card">
                  <Table className="table table-centered table-hover align-middle table-nowrap mb-0">
                    <thead>
                      <tr>
                        <th>№</th>
                        <th align="center">Обозначение НД</th>
                        <th align="center">Наименование издания</th>
                        <th align="center">Вводв действие НД</th>
                        <th align="center" className="text-wrap">
                          Объем факт.усл. печ. Листов
                        </th>
                        <th align="center">Действия</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(recentOrders || []).map((item, key) => (
                        <tr key={key}>
                          <td>
                            <Link
                              href="/apps-ecommerce-order-details"
                              className="fw-medium link-primary"
                            >
                              {item.orderId}
                            </Link>
                          </td>
                          <td>ГОСТ Р 60.6.3.12-2023</td>
                          <td>
                            <div className="text-wrap">
                              Роботы и робототехнические устройства. Методы
                              испытаний сервисных мобильных роботов для работы в
                              экстремальных условиях. Радиосвязь в зоне прямой
                              видимости. Взамен ГОСТ Р 60.6.3.12-2019
                            </div>
                          </td>
                          <td>12.07.2023</td>
                          <td>12</td>
                          <td style={{ textAlign: "right" }}>
                            <div className="w-100 d-flex justify-content-end align-items-center">
                              <Link
                                href="/"
                                className="btn btn-soft-primary  waves-effect waves-light d-flex align-items-center gap-2"
                              >
                                <i
                                  className="ri-shopping-cart-line align-bottom text-start"
                                  style={{ fontSize: 20 }}
                                ></i>
                                <span> Savatga qo’shish</span>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </div>
          </Col>
        </div>
      </Container>
    </OtherLayout>
  );
}
