"use client";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Button,
} from "reactstrap";
import { motion } from "framer-motion";
import Link from "next/link";
import { pricing11 } from "@/components/common/data/pagesData";
import { ProductType } from "@/utils/types";
const Products = () => {
  const [modal_large, setmodal_large] = useState(false);
  const [state, setState] = useState<ProductType>();
  function tog_large() {
    setmodal_large(!modal_large);
  }
  return (
    <React.Fragment>
      <Modal
        size="lg"
        isOpen={modal_large}
        toggle={() => {
          tog_large();
        }}
      >
        <ModalHeader
          className="modal-title"
          id="myLargeModalLabel"
          toggle={() => {
            tog_large();
          }}
        >
          {state?.type}
        </ModalHeader>
        <ModalBody>
          <ul className="list-unstyled vstack gap-3" style={{ height: 350 }}>
            {state?.items.map((res, i) => (
              <li key={i}>
                <Link href={`/product/${i + 1}`}>
                  <div className="d-flex">
                    <div className="flex-shrink-0 text-primary me-1">
                      <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                    </div>
                    <div className="flex-grow-1">{res}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </ModalBody>
        <div className="modal-footer">
          <Link
            href="#"
            className="btn btn-link link-primary fw-medium"
            onClick={() => setmodal_large(false)}
          >
            <i className="ri-close-line me-1 align-middle"></i> Close
          </Link>
          <Button color="primary">Save changes</Button>
        </div>
      </Modal>
      <section className="section" id="product">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="d-flex align-items-center mb-4">
                <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
                  Mahsulotlar haqida
                </h2>
                <Link href="#" className="fs-13 fw-medium text-primary">
                  Barchasi{" "}
                  <i className="ri-arrow-right-s-line align-bottom"></i>
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            {(pricing11 || []).map((price1, key) => (
              <Col xxl={3} lg={6} key={key}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="pricing-box ribbon-box right">
                    <CardBody className="bg-light m-2 p-4">
                      <div
                        className="d-flex align-items-center mb-3"
                        style={{ height: 50 }}
                      >
                        <div className="flex-grow-1">
                          <h5 className="mb-0 fw-semibold">{price1.type}</h5>
                        </div>
                        <div className="ms-auto"></div>
                      </div>

                      <ul
                        className="list-unstyled vstack gap-3"
                        style={{ height: 350 }}
                      >
                        {price1.items.map((res, i) => (
                          <li key={i}>
                            <div className="d-flex">
                              <div className="flex-shrink-0 text-primary me-1">
                                <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                              </div>
                              <div className="flex-grow-1">{res}</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 d-flex justify-content-end align-items-end flex-column">
                        <Link
                          href="#"
                          className="fs-13 fw-medium text-primary"
                          onClick={() => {
                            tog_large();
                            setState(price1 as ProductType);
                          }}
                        >
                          Batafsil{" "}
                          <i className="ri-arrow-right-s-line align-bottom"></i>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Products;
