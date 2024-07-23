import Link from "next/link";
import React from "react";
import { Container, Row, Col, Input } from "reactstrap";

const Home = () => {
  return (
    <React.Fragment>
      <section className="section nft-hero" id="hero">
        {/* <div className="bg-overlay"></div> */}
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} sm={10}>
              <div className="text-center">
                <h1 className="display-4 fw-medium mb-4 lh-base text-white">
                  Standartlar qidiruvi
                </h1>
                <div className="position-relative">
                  <Input
                    type="text"
                    className="form-control-lg input-lg search-input"
                    placeholder="Search..."
                    id="search-options"
                  />
                  <Link href="/advanced-search">
                    <p className="text-end text-white fw-600">
                      Kengaytirilgan qidiruv
                    </p>
                  </Link>
                </div>

                {/* <div className="hstack gap-2 justify-content-center">
                  <Link to="/nft-create" className="btn btn-primary">
                    Create Own{" "}
                    <i className="ri-arrow-right-line align-middle ms-1"></i>
                  </Link>
                  <Link to="/nft-explore" className="btn btn-danger">
                    Explore Now{" "}
                    <i className="ri-arrow-right-line align-middle ms-1"></i>
                  </Link>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Home;
