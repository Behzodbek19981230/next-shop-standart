import Link from "next/link";
import React from "react";
import { Col, Row } from "reactstrap";

const BreadCrumb = ({
  title,
  pageTitle,
}: {
  title: string;
  pageTitle: string;
}) => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className=" d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-4">{title}</h4>

            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <Link href="#">{pageTitle}</Link>
                </li>
                <li className="breadcrumb-item active">{title}</li>
              </ol>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BreadCrumb;
