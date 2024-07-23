"use client";
import React from "react";
import {
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  CardHeader,
} from "reactstrap";
import Flatpickr from "react-flatpickr";
import { Options } from "flatpickr/dist/types/options";

const FilterBar: React.FC = () => {
  const flatpickrOptions: Options = {
    enableTime: true,
    dateFormat: "Y-m-d",
  };

  return (
    <Card className="bg-primary text-white">
      <CardHeader className="bg-primary text-white">
        <h2 className="text-white">Hujjat qidirish</h2>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col md={2}>
              <FormGroup>
                <Label for="documentNumber">Hujjat raqami</Label>
                <Input
                  className="form-control form-control-lg"
                  type="text"
                  name="documentNumber"
                  id="documentNumber"
                  placeholder="Raqamni kiriting"
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="documentName">Hujjat nomi</Label>
                <Input
                  className="form-control form-control-lg"
                  type="text"
                  name="documentName"
                  id="documentName"
                  placeholder="Nomi kiriting"
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="dateReceived">Qabul qilingan sana</Label>
                <Flatpickr
                  className="form-control form-control-lg"
                  placeholder="Sanani tanlang"
                  options={flatpickrOptions}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="documentType">Hujjat turi</Label>
                <Input
                  type="select"
                  className="form-control form-control-lg"
                  name="documentType"
                  id="documentType"
                >
                  <option>Tanlanmagan</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="documentType">Sohalar</Label>
                <Input
                  type="select"
                  className="form-control form-control-lg"
                  name="documentType"
                  id="documentType"
                >
                  <option>Tanlanmagan</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={1} className="d-flex justify-content-end align-items-end">
              <Button className="bg-white text-primary mb-3 btn-lg">
                Qidirish
              </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
};

export default FilterBar;
