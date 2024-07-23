import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Row, CardBody, Card } from "reactstrap";

// Define types for the data
interface Signer {
  id: number;
  title: string;
}

interface Subscription {
  id: number;
  title: string;
  note: string;
  info1: string;
  value1: string;
  info2: string;
  value2: string;
}

const signers: Signer[] = [
  {
    id: 1,
    title: "2023 yil oktyabr-noyabr oylari uchun standartlar ro'yxati",
  },
  {
    id: 2,
    title: "2023 yil avgust-sentyabr oylari uchun standartlar ro'yxati.",
  },
  {
    id: 3,
    title: "2023 yil iyul oyi uchun standartlar ro'yxati.",
  },
  {
    id: 4,
    title: "2023 yil iyun uchun standartlar ro'yxati",
  },
];

const obuna: Subscription[] = [
  {
    id: 1,
    title: "Национальные стандарты (ИУС)",
    note: "Информационный указатель",
    info1: "Цена за номер (1 экз.), руб",
    value1: "3850,00",
    info2: "Цена в рублях, с НДС 10 %",
    value2: "3850,00",
  },
  {
    id: 2,
    title: "Технические условия (ИУТУ)",
    note: "Информационный указатель",
    info1: "Цена за номер (1 экз.), руб",
    value1: "3850,00",
    info2: "Цена в рублях, с НДС 10 %",
    value2: "3850,00",
  },
];

const Publication: React.FC = () => {
  const [open, setOpen] = useState<string | undefined>("1");
  const toggle = (id: string) => {
    setOpen(open === id ? undefined : id);
  };

  const [open2, setOpen2] = useState<string | undefined>("1");
  const toggle2 = (id: string) => {
    setOpen2(open2 === id ? undefined : id);
  };

  return (
    <React.Fragment>
      <section className="section" id="publications">
        <Container>
          <Row className="g-lg-5 g-4">
            <Col lg={6}>
              <div className="d-flex align-items-center mb-2">
                <div className="flex-grow-1">
                  <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
                    Nashrlar
                  </h2>
                </div>
                <Link
                  href="/publications"
                  className="fs-13 fw-medium text-primary"
                >
                  Barchasi{" "}
                  <i className="ri-arrow-right-s-line align-bottom"></i>
                </Link>
              </div>
              <Card>
                <CardBody>
                  <div className="custom-accordion-border accordion-border-box accordion-primary border-none landing accordion">
                    <div className="accordion-item">
                      <ul className="list-group list-group-flush mb-0">
                        {signers.map((item) => (
                          <li
                            className="list-group-item d-flex align-items-center selected border-0"
                            key={item.id}
                          >
                            <div className="flex-grow-1 ms-3">
                              <h6 className="fs-14 mb-1">{item.title}</h6>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={6}>
              <div className="d-flex align-items-center mb-2">
                <div className="flex-grow-1">
                  <h2 className="mb-0 fw-semibold lh-base flex-grow-1">
                    Obunalar
                  </h2>
                </div>
                <Link
                  href="/subscriptions"
                  className="fs-13 fw-medium text-primary"
                >
                  Barchasi{" "}
                  <i className="ri-arrow-right-s-line align-bottom"></i>
                </Link>
              </div>
              <Card>
                <CardBody>
                  <div className="custom-accordion-border accordion-border-box accordion-primary landing accordion">
                    <div className="table-responsive">
                      <div className="accordion-item">
                        <table className="table table-nowrap table-centered align-middle mb-0 border-primary table-borderless">
                          <thead className="text-muted border-0">
                            <tr>
                              <th scope="col">Наименования издания</th>
                              <th scope="col">Цена за номер (1 экз.), руб</th>
                              <th scope="col">Цена в рублях, с НДС 10 %</th>
                            </tr>
                          </thead>
                          <tbody>
                            {obuna.map((item) => (
                              <tr key={item.id}>
                                <td className="fw-medium">
                                  {item.title}
                                  <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 me-1 text-muted fs-13">
                                      {item.note}
                                    </div>
                                  </div>
                                </td>
                                <td className="text-muted">
                                  <span>{item.value1}</span>
                                </td>
                                <td className="text-muted">
                                  <span>{item.value2}</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Publication;
