"use client";
import React, { useState } from "react";
import {
  CardBody,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  Table,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { recentOrders } from "@/components/common/data/pagesData";
import Link from "next/link";
import OtherLayout from "@/components/layouts/OtherLayout";
export default function Subscriptions() {
  const [pillsTab, setpillsTab] = useState("1");
  const pillsToggle = (tab: string) => {
    if (pillsTab !== tab) {
      setpillsTab(tab);
    }
  };
  return (
    <OtherLayout>
      <Container>
        <Nav pills className="nav-primary mb-3">
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              className={classnames({ active: pillsTab === "1" })}
              onClick={() => {
                pillsToggle("1");
              }}
            >
              УКАЗАТЕЛИ 2024 года в печатном издании
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: "pointer" }}
              className={classnames({ active: pillsTab === "2" })}
              onClick={() => {
                pillsToggle("2");
              }}
            >
              УКАЗАТЕЛИ 2024 года электронная версия (защищенный формат)
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={pillsTab} className="text-muted">
          <TabPane tabId="1" id="home-1">
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
                            <th align="center">Наименования издания</th>
                            <th align="center">Цена за номер (1 экз.), руб.</th>
                            <th align="center">Цена в рублях, с НДС 10 %</th>
                            <th align="center">Статус </th>
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
                              <td>
                                Национальные стандарты (ИУС) Информационный
                                указатель
                              </td>
                              <td>
                                <div className="text-wrap">2035,00</div>
                              </td>
                              <td>
                                <div className="text-wrap">2035,00</div>
                              </td>
                              <td>
                                <div className="d-flex ">
                                  {key % 3 == 1 ? (
                                    <span className="badge badge-label bg-primary position-relative">
                                      <i className="mdi mdi-circle-medium"></i>{" "}
                                      Подписан
                                    </span>
                                  ) : (
                                    <span className="badge badge-label bg-danger position-relative">
                                      <i className="mdi mdi-circle-medium"></i>{" "}
                                      Нет в подписке
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td style={{ textAlign: "right" }}>
                                {key % 3 != 1 ? (
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
                                ) : (
                                  <div className="w-100 d-flex justify-content-end align-items-center">
                                    <Link
                                      href="/"
                                      className="btn btn-soft-danger  waves-effect waves-light d-flex align-items-center gap-2"
                                    >
                                      <i
                                        className=" ri-delete-bin-line align-bottom text-start"
                                        style={{ fontSize: 20 }}
                                      ></i>
                                      <span> Obunani bekor qilish</span>
                                    </Link>
                                  </div>
                                )}
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
          </TabPane>

          <TabPane tabId="2" id="profile-1">
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
                            <th align="center">Наименования издания</th>

                            <th align="center">Цена в рублях, с НДС 20 %</th>
                            <th align="center">Статус </th>
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
                              <td>
                                Национальные стандарты – ежемесячный
                                информационный указатель (ИУС) 2024 год для 1-5
                                пользователей
                              </td>
                              <td>
                                <div className="text-wrap">2035,00</div>
                              </td>
                              <td>
                                <div className="d-flex ">
                                  {key % 3 == 1 ? (
                                    <span className="badge badge-label bg-primary position-relative">
                                      <i className="mdi mdi-circle-medium"></i>{" "}
                                      Подписан
                                    </span>
                                  ) : (
                                    <span className="badge badge-label bg-danger position-relative">
                                      <i className="mdi mdi-circle-medium"></i>{" "}
                                      Нет в подписке
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td style={{ textAlign: "right" }}>
                                {key % 3 != 1 ? (
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
                                ) : (
                                  <div className="w-100 d-flex justify-content-end align-items-center">
                                    <Link
                                      href="/"
                                      className="btn btn-soft-danger  waves-effect waves-light d-flex align-items-center gap-2"
                                    >
                                      <i
                                        className=" ri-delete-bin-line align-bottom text-start"
                                        style={{ fontSize: 20 }}
                                      ></i>
                                      <span> Obunani bekor qilish</span>
                                    </Link>
                                  </div>
                                )}
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
          </TabPane>

          <TabPane tabId="3" id="contact-1"></TabPane>
        </TabContent>
      </Container>
    </OtherLayout>
  );
}
