// components/Standarts.tsx
import React, { useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { pricing1, pricing3 } from "@/components/common/data/pagesData";

// TypeScript types
interface PricingItem {
  ribbon?: boolean;
  type: string;
  rate: number;
  purpose: string;
}

const Standarts: React.FC = () => {
  const [displayCategory, setCategory] = useState<string>("All");

  return (
    <React.Fragment>
      <div className="page-content section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="d-flex align-items-center mb-5">
                <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
                  Standartlar
                </h2>
                <button
                  className="btn btn-primary d-flex align-items-center"
                  onClick={() => (window.location.href = "/documents")}
                >
                  Barchasi <i className="ri-arrow-right-line align-bottom"></i>
                </button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="">
                <CardBody>
                  <Row>
                    <Col lg={2}>
                      <Card>
                        <CardBody>
                          <div className="text-center" style={{ height: 330 }}>
                            <ul
                              className="d-flex flex-column list-inline categories-filter animation-nav pb-5"
                              id="filter"
                            >
                              <li className="list-inline-item">
                                <Link
                                  href="#"
                                  onClick={() => setCategory("All")}
                                  className={
                                    displayCategory === "All"
                                      ? "categories active bg-primary py-4"
                                      : "categories py-4"
                                  }
                                >
                                  Milliy standartlar
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link
                                  href="#"
                                  onClick={() => setCategory("Project")}
                                  className={
                                    displayCategory === "Project"
                                      ? "categories active bg-primary py-4"
                                      : "categories py-4"
                                  }
                                >
                                  Mahalliy standartlar
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link
                                  href="#"
                                  onClick={() => setCategory("Designing")}
                                  className={
                                    displayCategory === "Designing"
                                      ? "categories active py-4"
                                      : "categories py-4"
                                  }
                                >
                                  Xalqaro standartlar
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg={10}>
                      <AnimatePresence>
                        {
                          <div className="row gallery-wrapper">
                            <Row>
                              {(displayCategory === "All"
                                ? pricing1
                                : displayCategory === "Designing"
                                ? pricing1
                                : pricing3 || []
                              ).map((price2: PricingItem, key: number) => (
                                <Col
                                  xxl={3}
                                  xl={4}
                                  sm={6}
                                  className="element-item project designing development"
                                  key={key}
                                >
                                  <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <Card className="pricing-box ribbon-box right">
                                      {price2.ribbon && (
                                        <div className="ribbon-two ribbon-two-danger">
                                          <span>Popular</span>
                                        </div>
                                      )}
                                      {key === 2 && (
                                        <div className="ribbon-two ribbon-two-primary">
                                          <span>New</span>
                                        </div>
                                      )}
                                      <CardBody className="p-4 m-2">
                                        <div className="d-flex align-items-center">
                                          <div className="flex-grow-1">
                                            <h5 className="text-card-elleps-id mb-1 fw-semibold">
                                              {price2.type}
                                            </h5>
                                          </div>
                                        </div>
                                        <div className="pt-4">
                                          <h2>
                                            <sup>
                                              <small>$ </small>
                                            </sup>
                                            {price2.rate}
                                            <span className="fs-13 text-muted">
                                              /Month
                                            </span>
                                          </h2>
                                        </div>
                                        <hr className="my-4 text-muted" />
                                        <div
                                          style={{ height: 150 }}
                                          className="d-flex justify-content-between flex-column"
                                        >
                                          <p className="text-card-elleps text-muted mb-0">
                                            {price2.purpose}
                                          </p>
                                          <div className="mt-4 d-flex justify-content-between align-items-center">
                                            <Link
                                              href="/"
                                              className="btn btn-soft-primary waves-effect waves-light"
                                            >
                                              <i
                                                className="ri-shopping-cart-line align-bottom text-start"
                                                style={{ fontSize: 20 }}
                                              ></i>
                                            </Link>
                                            <Link
                                              href="#"
                                              className="fs-13 fw-medium text-primary"
                                            >
                                              Batafsil{" "}
                                              <i className="ri-arrow-right-s-line align-bottom"></i>
                                            </Link>
                                          </div>
                                        </div>
                                      </CardBody>
                                    </Card>
                                  </motion.div>
                                </Col>
                              ))}
                            </Row>
                          </div>
                        }
                      </AnimatePresence>
                    </Col>
                  </Row>
                </CardBody>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Standarts;
