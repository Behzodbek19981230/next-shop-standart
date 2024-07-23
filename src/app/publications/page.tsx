"use client";
import React from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";
import { motion } from "framer-motion";
import moment from "moment";
import { findJob } from "@/components/common/data/pagesData";
import Link from "next/link";
import OtherLayout from "@/components/layouts/OtherLayout";
const Publications = () => {
  return (
    <OtherLayout>
      <section className="section" id="findJob">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="d-flex align-items-center mb-4">
                <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
                  Nashrlar
                </h2>
              </div>
            </Col>
          </Row>

          <Row>
            {findJob.map((item, key) => (
              <Col className="col-lg-6" key={key}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.1 }}
                >
                  <Link href={`/publications/${item.id}`}>
                    <Card className="shadow-lg pricing-box ribbon-box right mb-3">
                      {key % 3 == 0 ? (
                        <div className="ribbon-two ribbon-two-primary">
                          <span>Yangi</span>
                        </div>
                      ) : key % 3 == 1 ? (
                        <div className="ribbon-two ribbon-two-warning">
                          <span>Ommabob</span>
                        </div>
                      ) : (
                        ""
                      )}

                      <CardBody>
                        <div className="d-flex">
                          <div className="avatar-sm">
                            <div className="avatar-title bg-soft-primary rounded text-primary">
                              {key + 1}
                            </div>
                          </div>
                          <div className="ms-3 flex-grow-1">
                            <h5>{item.lable}</h5>
                            <ul className="list-inline text-muted mb-0">
                              <li className="list-inline-item">
                                <i className="ri-calendar-2-line align-bottom me-1"></i>{" "}
                                {moment().format("DD MMM YYYY")}
                              </li>
                              <li className="list-inline-item">
                                <i className="  ri-folder-2-line align-bottom me-1"></i>{" "}
                                {354}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                </motion.div>
              </Col>
            ))}
          </Row>
          <Row className="mt-3">
            <Pagination className="pagination-lg pagination-separated d-flex justify-content-center">
              <PaginationItem disabled>
                {" "}
                <PaginationLink to="#"> ← </PaginationLink>{" "}
              </PaginationItem>
              <PaginationItem>
                {" "}
                <PaginationLink to="#"> 1 </PaginationLink>{" "}
              </PaginationItem>
              <PaginationItem active>
                {" "}
                <PaginationLink to="#"> 2 </PaginationLink>{" "}
              </PaginationItem>
              <PaginationItem>
                {" "}
                <PaginationLink to="#"> 3 </PaginationLink>{" "}
              </PaginationItem>
              <PaginationItem>
                {" "}
                <PaginationLink to="#"> 4 </PaginationLink>{" "}
              </PaginationItem>
              <PaginationItem>
                {" "}
                <PaginationLink to="#"> 5 </PaginationLink>{" "}
              </PaginationItem>
              <PaginationItem>
                {" "}
                <PaginationLink to="#"> → </PaginationLink>{" "}
              </PaginationItem>
            </Pagination>
          </Row>
        </Container>
      </section>
    </OtherLayout>
  );
};

export default Publications;
