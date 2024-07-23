"use client";
import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  Row,
  Card,
  CardBody,
  Container,
} from "reactstrap";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css"; // Ensure you import a Flatpickr theme
import Link from "next/link";
import Documents from "@/components/landing/Documents";
import OtherLayout from "@/components/layouts/OtherLayout";

const AdvancedSearch: React.FC = () => {
  const [dateArrange, setDateArrange] = useState<boolean>(false);
  const [effectiveDate, setEffectiveDate] = useState<boolean>(false);

  return (
    <React.Fragment>
      <OtherLayout>
        <Container>
          <div className="d-flex align-items-center mb-2">
            <div className="flex-grow-1">
              <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
                Kengaytirilgan qidiruv
              </h2>
            </div>
            <Link href="#" className="fs-13 fw-medium text-primary">
              Universal qidiruv{" "}
              <i className="ri-arrow-right-s-line align-bottom"></i>
            </Link>
          </div>
          <Card>
            <CardBody>
              <Form>
                <Row className="gy-4">
                  <Col md={4}>
                    <FormGroup>
                      <Label for="documentNumber">Hujjat raqami</Label>
                      <Input
                        size={20}
                        type="text"
                        id="documentNumber"
                        placeholder="Hujjat raqami"
                      />
                    </FormGroup>
                  </Col>

                  <Col md={2}>
                    <FormGroup>
                      <Label for="documentLanguage">Hujjat tili</Label>
                      <Input
                        type="select"
                        multiple={false}
                        id="documentLanguage"
                      >
                        <option>Choose...</option>
                        <option>Uzbek</option>
                        <option>Russian</option>
                        <option>English</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        {!dateArrange ? (
                          <FormGroup>
                            <Label for="acceptanceDate">
                              Qabul qilingan sanasi
                            </Label>
                            <Flatpickr
                              className="form-control form-control-md"
                              placeholder="Sanani tanlang"
                              options={{
                                enableTime: true,
                                dateFormat: "Y-m-d",
                              }}
                            />
                          </FormGroup>
                        ) : (
                          <FormGroup>
                            <Label for="arrangeDateFrom">
                              Qabul qilingan sanasi
                            </Label>
                            <div className="d-flex align-items-center gap-4">
                              <Flatpickr
                                className="form-control form-control-md"
                                placeholder="dan"
                                options={{
                                  enableTime: true,
                                  dateFormat: "Y-m-d",
                                }}
                              />
                              <Flatpickr
                                className="form-control form-control-md"
                                placeholder="gacha"
                                options={{
                                  enableTime: true,
                                  dateFormat: "Y-m-d",
                                }}
                              />
                            </div>
                          </FormGroup>
                        )}
                      </Col>

                      <Col
                        md={4}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <FormGroup className="mt-4">
                          <Label check>
                            <Input
                              type="checkbox"
                              id="intermediate"
                              onChange={() => {
                                setDateArrange(!dateArrange);
                              }}
                            />{" "}
                            Oraliq
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>

                  <Col md={12}>
                    <FormGroup>
                      <Label for="documentName">Hujjat nomi</Label>
                      <Input
                        size={20}
                        type="text"
                        id="documentName"
                        placeholder="Hujjat nomi"
                      />
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" id="exactMatchName" /> Aniq mos
                          kelishi
                        </Label>
                      </FormGroup>
                    </FormGroup>
                  </Col>

                  <Col md={12}>
                    <FormGroup>
                      <Label for="documentText">Matndagi soz yoki jumla</Label>
                      <Input
                        size={20}
                        type="text"
                        id="documentText"
                        placeholder="Matndagi so'z yoki jumla"
                      />
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" id="exactMatchText" /> Aniq mos
                          kelishi
                        </Label>
                      </FormGroup>
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <FormGroup>
                      <Label for="documentStatus">Hujjat holati</Label>
                      <Input multiple={false} type="select" id="documentStatus">
                        <option>Choose...</option>
                        <option>Active</option>
                        <option>Inactive</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="documentColor">Hujjat tusi</Label>
                      <Input
                        size={20}
                        type="text"
                        id="documentColor"
                        placeholder="Hujjat tusi"
                      />
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <FormGroup>
                      <Label for="organization">Organ</Label>
                      <Input
                        size={20}
                        type="text"
                        id="organization"
                        placeholder="Organ"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="legalFields">Qonunchilik sohalari</Label>
                      <Input
                        size={20}
                        type="text"
                        id="legalFields"
                        placeholder="Qonunchilik sohalari"
                      />
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        {!effectiveDate ? (
                          <FormGroup>
                            <Label for="acceptanceDate">
                              Kuchga kirish sanasi
                            </Label>
                            <Flatpickr
                              className="form-control form-control-md"
                              placeholder="Sanani tanlang"
                              options={{
                                enableTime: true,
                                dateFormat: "Y-m-d",
                              }}
                            />
                          </FormGroup>
                        ) : (
                          <FormGroup>
                            <Label for="arrangeDateFrom">
                              Kuchga kirish sanasi
                            </Label>
                            <div className="d-flex align-items-center gap-4">
                              <Flatpickr
                                className="form-control form-control-md"
                                placeholder="dan"
                                options={{
                                  enableTime: true,
                                  dateFormat: "Y-m-d",
                                }}
                              />
                              <Flatpickr
                                className="form-control form-control-md"
                                placeholder="gacha"
                                options={{
                                  enableTime: true,
                                  dateFormat: "Y-m-d",
                                }}
                              />
                            </div>
                          </FormGroup>
                        )}
                      </Col>

                      <Col
                        md={4}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <FormGroup className="mt-4">
                          <Label check>
                            <Input
                              type="checkbox"
                              id="effectiveDateIntermediate"
                              onChange={() => {
                                setEffectiveDate(!effectiveDate);
                              }}
                            />{" "}
                            Oraliq
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        {!dateArrange ? (
                          <FormGroup>
                            <Label for="acceptanceDate">
                              Hujjat kuchini yo`qotish sanasi
                            </Label>
                            <Flatpickr
                              className="form-control form-control-md"
                              placeholder="Sanani tanlang"
                              options={{
                                enableTime: true,
                                dateFormat: "Y-m-d",
                              }}
                            />
                          </FormGroup>
                        ) : (
                          <FormGroup>
                            <Label for="arrangeDateFrom">
                              Hujjat kuchini yo`qotish sanasi
                            </Label>
                            <div className="d-flex align-items-center gap-4">
                              <Flatpickr
                                className="form-control form-control-md"
                                placeholder="dan"
                                options={{
                                  enableTime: true,
                                  dateFormat: "Y-m-d",
                                }}
                              />
                              <Flatpickr
                                className="form-control form-control-md"
                                placeholder="gacha"
                                options={{
                                  enableTime: true,
                                  dateFormat: "Y-m-d",
                                }}
                              />
                            </div>
                          </FormGroup>
                        )}
                      </Col>

                      <Col
                        md={4}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <FormGroup className="mt-4">
                          <Label check>
                            <Input
                              type="checkbox"
                              id="dateArrangeIntermediate"
                              onChange={() => {
                                setDateArrange(!dateArrange);
                              }}
                            />{" "}
                            Oraliq
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Col>

                  <Col
                    md={12}
                    className="d-flex justify-content-end align-items-center gap-3"
                  >
                    <Button type="reset" color="warning">
                      Tozalash
                    </Button>
                    <Button type="submit" color="primary">
                      Izlash
                    </Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
          <Documents />
          {/* <Field />
        <UsefulLinks /> */}
        </Container>
      </OtherLayout>
    </React.Fragment>
  );
};

export default AdvancedSearch;
