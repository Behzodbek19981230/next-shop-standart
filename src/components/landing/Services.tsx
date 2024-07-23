import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import Link from "next/link";
import { findJob } from "@/components/common/data/pagesData";

// Define the type for each job item
interface JobItem {
  id: number;
  lable: string; // Adjust type if necessary
}

const Services: React.FC = () => {
  return (
    <React.Fragment>
      <section className="section" id="findJob">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="d-flex align-items-center mb-4">
                <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
                  Xizmatlar
                </h2>
                <Link href="/services" className="fs-13 fw-medium text-primary">
                  Barchasi{" "}
                  <i className="ri-arrow-right-s-line align-bottom"></i>
                </Link>
              </div>
            </Col>
          </Row>

          <Row>
            {findJob.map((item) => (
              <Col className="col-lg-6" key={item.id}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.1 }}
                >
                  <Card className="shadow-lg pricing-box ribbon-box right mb-2">
                    <CardBody>
                      <div className="d-flex align-items-center">
                        <div className="avatar-sm">
                          <div className="avatar-title bg-soft-primary rounded text-primary">
                            {item.id}
                          </div>
                        </div>
                        <div className="ms-3 flex-grow-1 align-items-center">
                          <h5 className="mb-0">{item.lable}</h5>
                        </div>
                        <div>
                          <Link
                            className="btn btn-soft-primary btn-icon"
                            href={`/services/${item.id}`}
                          >
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
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Services;
