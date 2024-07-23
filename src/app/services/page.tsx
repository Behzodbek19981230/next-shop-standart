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
import CurrencyFormatter from "@/components/common/currency-format";
import Link from "next/link";
import { findJob } from "@/components/common/data/pagesData";
import OtherLayout from "@/components/layouts/OtherLayout";
const Services = () => {
  return (
    <OtherLayout>
      <section className="section" id="findJob">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="d-flex align-items-center mb-4">
                <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
                  Xizmatlar
                </h2>
              </div>
            </Col>
          </Row>

          <Row>
            {findJob.map((item: any, key: number) => (
              <Col className="col-lg-6" key={key}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.1 }}
                >
                  <Card className="shadow-lg pricing-box ribbon-box right mb-2">
                    <CardBody>
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar-sm">
                          <div className="avatar-title bg-soft-primary rounded text-primary">
                            {key + 1}
                          </div>
                        </div>
                        <div className="ms-3 flex-grow-1 align-items-center">
                          <h5 className="mb-0">{item.lable}</h5>
                        </div>
                        <div>
                          <CurrencyFormatter
                            amount={1840000}
                            currency="sum"
                            size={15}
                            color={"text-primary fw-semibold"}
                          />
                        </div>
                        <div>
                          <Link
                            className="btn btn-soft-primary btn-icon "
                            href={`/services/${item.id}`}
                          >
                            <i className="ri-arrow-right-s-line align-bottom"></i>{" "}
                          </Link>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
          <Row className="mt-3">
            <Pagination className="pagination-lg pagination-separated d-flex justify-content-center">
              <PaginationItem disabled>
                {" "}
                <PaginationLink href="#"> ← </PaginationLink>{" "}
              </PaginationItem>
              <PaginationItem>
                {" "}
                <PaginationLink href="#"> 1 </PaginationLink>{" "}
              </PaginationItem>
              <PaginationItem active>
                {" "}
                <PaginationLink href="#"> 2 </PaginationLink>{" "}
              </PaginationItem>
              <PaginationItem>
                {" "}
                <PaginationLink href="#"> 3 </PaginationLink>{" "}
              </PaginationItem>
              <PaginationItem>
                {" "}
                <PaginationLink href="#"> 4 </PaginationLink>{" "}
              </PaginationItem>
              <PaginationItem>
                {" "}
                <PaginationLink href="#"> 5 </PaginationLink>{" "}
              </PaginationItem>
              <PaginationItem>
                {" "}
                <PaginationLink href="#"> → </PaginationLink>{" "}
              </PaginationItem>
            </Pagination>
          </Row>
        </Container>
      </section>
    </OtherLayout>
  );
};

export default Services;
