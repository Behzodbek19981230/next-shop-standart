import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
import logolight from "@/assets/images/logo-light.svg";

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <footer className="custom-footer bg-primary py-5 position-relative">
        <Container>
          <Row>
            <Col lg={4} className="mt-4">
              <div>
                <div>
                  <Image src={logolight} alt="logo light" height={48} />
                </div>
                <div className="mt-4 text-white">
                  <p>
                    You can build any type of web application like eCommerce,
                    CRM, CMS, Project management apps, Admin Panels, etc using
                    Velzon.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={7} className="ms-lg-auto">
              <Row>
                <Col sm={4} className="mt-4">
                  <h5 className="text-white mb-0">Company</h5>
                  <div className="text-white mt-3">
                    <ul className="list-unstyled ff-secondary footer-list">
                      <li>
                        <Link className="text-white" href="/pages-profile">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link className="text-white" href="/pages-gallery">
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-white"
                          href="/apps-projects-overview"
                        >
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link className="text-white" href="/pages-timeline">
                          Timeline
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col sm={4} className="mt-4">
                  <h5 className="text-white mb-0">Apps Pages</h5>
                  <div className="text-white mt-3">
                    <ul className="list-unstyled ff-secondary footer-list">
                      <li>
                        <Link className="text-white" href="/pages-pricing">
                          Calendar
                        </Link>
                      </li>
                      <li>
                        <Link className="text-white" href="/apps-mailbox">
                          Mailbox
                        </Link>
                      </li>
                      <li>
                        <Link className="text-white" href="/apps-chat">
                          Chat
                        </Link>
                      </li>
                      <li>
                        <Link className="text-white" href="/apps-crm-deals">
                          Deals
                        </Link>
                      </li>
                      <li>
                        <Link className="text-white" href="#">
                          Kanban Board
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col sm={4} className="mt-4">
                  <h5 className="text-white mb-0">Support</h5>
                  <div className="text-white mt-3">
                    <ul className="list-unstyled ff-secondary footer-list">
                      <li>
                        <Link className="text-white" href="/pages-faqs">
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link className="text-white" href="/pages-faqs">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="text-center text-sm-start align-items-center mt-5">
            <Col sm={6}>
              <div>
                <p className="copy-rights text-white mb-0">
                  {new Date().getFullYear()} © Standart loyihalari muhokamasi
                  portali. All rights reserved.
                </p>
              </div>
            </Col>
            <Col sm={6}>
              <div className="text-sm-end mt-3 mt-sm-0">
                <ul className="list-inline mb-0 footer-social-link">
                  <li className="list-inline-item">
                    <Link href="#" className="text-white avatar-xs d-block">
                      <div className="avatar-title rounded-circle">
                        <i className="ri-facebook-fill text-white"></i>
                      </div>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#" className="avatar-xs d-block text-white">
                      <div className="avatar-title rounded-circle">
                        <i className="ri-github-fill text-white"></i>
                      </div>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#" className="avatar-xs d-block text-white">
                      <div className="avatar-title rounded-circle">
                        <i className="ri-linkedin-fill text-white"></i>
                      </div>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#" className="avatar-xs d-block text-white">
                      <div className="avatar-title rounded-circle">
                        <i className="ri-google-fill text-white"></i>
                      </div>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#" className="avatar-xs d-block text-white">
                      <div className="avatar-title rounded-circle">
                        <i className="ri-dribbble-line text-white"></i>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
