import FilterBar from "@/components/document/FilterBar";
import ListDocument from "@/components/document/ListDocument";
import OtherLayout from "@/components/layouts/OtherLayout";
import React from "react";
import { Col, Row, Container } from "reactstrap";

const DocumentsPage: React.FC = () => {
  return (
    <OtherLayout>
      <Container>
        <FilterBar />

        <Row>
          <Col md={12}>
            <ListDocument />
          </Col>
        </Row>
      </Container>
    </OtherLayout>
  );
};
export default DocumentsPage;
