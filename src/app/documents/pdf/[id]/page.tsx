import React from "react";
import { Card, CardBody, Container } from "reactstrap";

export default function PdfDoc() {
  return (
    <React.Fragment>
      <Container>
        <Card>
          <CardBody className="d-flex justify-content-between">
            <div
              className="mb-5 pdfobject-container"
              id="pdfBody"
              style={{ height: "100vh", width: "100%" }}
            >
              <embed
                style={{ width: "100%", height: "80%" }}
                type="application/pdf"
                id="iframepdf"
                src="https://lex.uz/pdffile/7014313"
              ></embed>
            </div>
          </CardBody>
        </Card>
      </Container>
    </React.Fragment>
  );
}
