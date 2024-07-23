import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import moment from "moment";
import { featuredCompany } from "@/components/common/data/pagesData";
import Link from "next/link";

interface CompanyItem {
  id: number;
  lable: string;
  designation: string;
  lang: string;
  bgColor: string;
  img: string;
  format: string;
}

export default function ListDocument() {
  return (
    <div>
      <div className="d-flex align-items-center mb-2">
        <div className="flex-grow-1">
          <h2 className="mb-0 fw-semibold lh-base flex-grow-1">Hujjatlar</h2>
        </div>
      </div>
      <Row className="gy-2 mb-2" id="candidate-list">
        {featuredCompany.map((item: CompanyItem, key: number) => (
          <Col xxl={12} md={12} key={key}>
            <Card className="ribbon-box right overflow-hidden">
              <CardBody>
                <div className="d-flex w-100 justify-content-between">
                  <div className="flex-shrink-0">
                    <div
                      className="me-2 flex-shrink-0"
                      style={{ width: 80, height: 80 }}
                    >
                      <div
                        className={
                          "avatar-title fs-2 bg-soft-" +
                          item.bgColor +
                          " rounded text-" +
                          item.bgColor
                        }
                      >
                        <i className={` ${item.img}`}></i>
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <a href="/pages-profile">
                      <div className="w-100 d-flex justify-content-between">
                        <h5 className="fs-16 mb-1">{item.lable}</h5>
                        <div className="fs-2 text-primary ">
                          {key * 10 + 2} $
                        </div>
                      </div>
                    </a>
                    <p className="text-muted mb-2">{item.designation}</p>

                    <div className="d-flex flex-wrap gap-2 align-items-center">
                      <p className="btn btn-sm btn-soft-secondary">
                        {item.lang}
                      </p>
                      {key % 3 === 1 && (
                        <p className="ml-2 btn btn-sm btn-soft-secondary">
                          English
                        </p>
                      )}
                    </div>

                    <CardHeader className="p-0 card-footer border-bottom-0 border-top-dashed">
                      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                        <div className="d-flex align-items-center gap-3">
                          <div className="fs-5 text-primary">
                            <i className="ri-user-3-line align-bottom me-1"></i>
                            {key * 10 + 2}
                          </div>
                          <div className="fs-5 text-primary">
                            <i className="ri-time-line align-bottom me-1"></i>
                            <span className="job-postdate ">
                              {moment().format("DD.MM.yyyy")}
                            </span>
                          </div>
                          <div className="fs-5 text-primary ">
                            <i className=" ri-currency-line align-bottom me-1"></i>
                            {key * 10 + 2} $
                          </div>
                        </div>
                        <div className="w-50 d-flex gap-3 justify-content-end">
                          <Link href="/" className="p-0">
                            <div
                              style={{ fontSize: 24 }}
                              dangerouslySetInnerHTML={{ __html: item.format }}
                            />
                          </Link>
                          <Link href={`/documents/${item.id}`} className="p-0">
                            <i
                              className=" ri-eye-line align-bottom"
                              style={{ fontSize: 24 }}
                            ></i>
                          </Link>
                          <Link href="/" className="p-0">
                            <i
                              className="ri-shopping-cart-line align-bottom"
                              style={{ fontSize: 24 }}
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </CardHeader>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
