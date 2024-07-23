import React from "react";
import { Card, CardBody, Col, Table } from "reactstrap";
import Link from "next/link";
import { featuredCompany } from "@/components/common/data/pagesData";

// Define the type for the featured company data
interface FeaturedCompany {
  bgColor: string;
  img: string;
  lable: string;
  designation: string;
  lang: string;
  format: string;
}

const Documents: React.FC = () => {
  return (
    <React.Fragment>
      <div className="d-flex align-items-center mb-2">
        <div className="flex-grow-1">
          <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
            So’ngi qabul qilingan hujjatlar
          </h2>
        </div>
        <Link href="/documents" className="fs-13 fw-medium text-primary">
          Barchasi
          <i className="ri-arrow-right-s-line align-bottom"></i>
        </Link>
      </div>
      <Col xl={12}>
        <Card className="card-height-100">
          <CardBody>
            <div className="table-responsive table-card">
              <Table className="table table-centered table-hover align-middle table-nowrap mb-0">
                <thead>
                  <tr>
                    <th>Qabul qilingan hujjatlar</th>
                    <th>Til</th>
                    <th>Hujjat formati</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {featuredCompany.map(
                    (company: FeaturedCompany, key: number) => (
                      <tr key={key}>
                        <td>
                          <div className="d-flex align-items-center p-2 gap-2">
                            <div className="avatar-xs me-2 flex-shrink-0">
                              <div
                                className={
                                  "avatar-title bg-soft-" +
                                  company.bgColor +
                                  " rounded text-" +
                                  company.bgColor
                                }
                              >
                                <i className={` ${company.img}`}></i>
                              </div>
                            </div>
                            <div className="flex-1 gap-2">
                              <h6 className="fs-15 text-primary fw-bold">
                                {company.lable}
                              </h6>
                              <p className="d-flex flex-wrap mb-0 w-20 text-wrap ">
                                {company.designation}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <p className="btn btn-sm btn-soft-secondary">
                              {company.lang}
                            </p>
                            {key % 3 === 1 && (
                              <p className="ml-2 btn btn-sm btn-soft-secondary">
                                {"English"}
                              </p>
                            )}
                          </div>
                        </td>
                        <td>
                          <div
                            style={{ fontSize: 24 }}
                            dangerouslySetInnerHTML={{ __html: company.format }}
                          />
                        </td>
                        <td style={{ textAlign: "right" }}>
                          <div className="w-100 d-flex justify-content-end align-items-center">
                            <Link
                              href="/"
                              className="btn btn-soft-primary waves-effect waves-light d-flex align-items-center gap-2"
                            >
                              <i
                                className="ri-shopping-cart-line align-bottom text-start"
                                style={{ fontSize: 20 }}
                              ></i>
                              <span> Savatga qo’shish</span>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Documents;
