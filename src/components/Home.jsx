import React from "react";
import { Link } from "react-router-dom";
import '../css/Home.css'

function Landing() {
  return (
    <>
      {/*HEADER*/}
      <div className="container d-flex py-3 mt-4 mb-4">
        <Link
          to="/"
          className="d-flex align-items-center mb-lg-0 me-lg-auto text-dark text-decoration-none"
        >
          <span className="fs-4">Featured Blog</span>
        </Link>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2 ms-2"
            type="search"
            aria-label="Search"
          />
          <button
            className="btn"
            type="button"
            style={{ backgroundColor: "rgba(62, 142, 188, 0.82)" }}
          >
            <img src={require("../images/search.png")} alt="" />
          </button>
        </form>
      </div>
      {/*HEADER*/}
      {/*MAIN IMAGE WITH BUTTONS*/}
      <div className="header mb-4">
        <div className="title">
          <div className="left">
            <div className="intro">
              <div className="heading">Guide for an Ultimate Tech Career</div>
              <div className="date_time">JUNE 9,2021 | 5 MINS
              <br/>
              <span>A comprehensive guide on How to start a Career in Technology. It covers the skills required and how to prepare to transition to a tech career.</span>
              </div>
              <div className="author">By Vivekanand Vivek</div>
              <div className="interview_preparation_home"><span>Interview Preparation</span></div>
            </div>
          </div>
          <div className="right">
            <Link to='./Form' className="btn btn-img">
              <img src={require("../images/plus.png")} alt="" />
            </Link>
          </div>
        </div>
      </div>
      {/*MAIN IMAGE WITH BUTTONS*/}
      {/*MIDDLE*/}
      <div className="container mt-5">
        <div className="row">
          {/*MIDDLE CARD 1*/}
          <div className="col">
            <div className="card h-100 shadow-bottom">
              <Link to="/" className="text-dark text-decoration-none">
                <img
                  src={require("../images/FAANG_companies_1200x768 2.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div>
                  <span className="position-absolute right-150 start-80 translate-middle badge rounded-pill">
                    Interview Preparation
                  </span>
                </div>
              </Link>
              <Link to="/" className="card-body">
                <div className="text-dark text-decoration-none">
                  <h5 className="card-title">
                  10 Most Common Mistakes To Avoid While Preparing for FAANG
                    Company Coding Interviews
                  </h5>
                  <p className="card-text">
                    <small className="text-muted">
                      JUNE 9, 2021 | 5 MINS READ
                    </small>
                  </p>
                </div>
                <Link to="/" className="author text-decoration-none">
                By Vivekanand Vivek
                </Link>
              </Link>
            </div>
          </div>
          {/*MIDDLE CARD 1*/}
          {/*MIDDLE CARD 2*/}
          <div className="col">
            <div className="card h-100 shadow-bottom">
              <Link to="/" className="text-dark text-decoration-none">
                <img
                  src={require("../images/unsplash_NDfqqq_7QWM.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div>
                  <span className="position-absolute right-150 start-80 translate-middle badge rounded-pill">
                    Data Structures
                  </span>
                </div>
              </Link>
              <Link to="/" className="card-body">
                <div className="text-dark text-decoration-none">
                  <h5 className="card-title">
                    Asymptotic Analysis of Different Data Structures Operations
                  </h5>
                  <p className="card-text">
                    <small className="text-muted">
                      JUNE 9, 2021 | 5 MINS READ
                    </small>
                  </p>
                </div>
                <Link to="/" className="author text-decoration-none">
                  By Bharat Khanna
                </Link>
              </Link>
            </div>
          </div>
          {/*MIDDLE CARD 2*/}
          {/*MIDDLE CARD 3*/}
          <div className="col">
            <div className="card h-100 shadow-bottom">
              <Link to="/" className="text-dark text-decoration-none">
                <img
                  src={require("../images/unsplash_95YRwf6CNw8.jpg")}
                  className="card-img-top"
                  alt="..."
                />
                <div>
                  <span className="position-absolute right-150 start-80 translate-middle badge rounded-pill">
                    Competitive Programming
                  </span>
                </div>
              </Link>
              <Link to="/" className="card-body">
                <div className="text-dark text-decoration-none">
                  <h5 className="card-title">
                    Roadmap to be a Candidate Master at Codeforces
                  </h5>
                  <p className="card-text">
                    <small className="text-muted">
                      JUNE 9, 2021 | 5 MINS READ
                    </small>
                  </p>
                </div>
                <Link to="/" className="author text-decoration-none">
                  By Bharat Khanna
                </Link>
              </Link>
            </div>
          </div>
          {/*MIDDLE CARD 3*/}
        </div>
      </div>
      {/*MIDDLE*/}
      <div className="container mt-5">
        <div className="row">
          {/*BOTTOM CARD 1*/}
          <div className="col-sm-8">
            <div className="card shadow-bottom">
              <Link to="/" className="text-dark text-decoration-none">
                <img
                  src={require("../images/unsplash_8hgmG03spF4.png")}
                  className="card-img-top"
                  alt="..."
                />
                <div>
                  <span className="position-absolute right-150 start-80 translate-middle badge rounded-pill">
                    Interview Preparation
                  </span>
                </div>
              </Link>
              <Link to="/" className="card-body">
                <div className="text-dark text-decoration-none">
                  <h5 className="card-title">
                    10 Most Common Mistakes To Avoid While Preparing for FAANG
                    Company Coding Interviews
                  </h5>
                  <p className="card-text">
                    <small className="text-muted">
                      JUNE 9, 2021 | 5 MINS READ
                    </small>
                  </p>
                </div>
                <Link to="/" className="author text-decoration-none">
                  By Vivekanand Vivek
                </Link>
              </Link>
            </div>
          </div>
          {/*BOTTOM CARD 1*/}
          {/*BOTTOM CARD 2*/}
          <div className="col-sm-4">
            <div className="card shadow-bottom">
              <div className="card-body">
                <h3 className="card-title text-center">
                  Recommended Categories
                </h3>
                <ul>
                  <li className="py-4">
                    <Link to="/" className="text-dark text-decoration-none">
                      Data Structures &amp; Algorithms (2)
                    </Link>
                  </li>
                  <li className="py-4">
                    <Link to="/" className="text-dark text-decoration-none">
                      Interview Preperation (5)
                    </Link>
                  </li>
                  <li className="py-4">
                    <Link to="/" className="text-dark text-decoration-none">
                      Competitive Programming (8)
                    </Link>
                  </li>
                  <li className="py-4">
                    <Link to="/" className="text-dark text-decoration-none">
                      Time and Space Complexities (7)
                    </Link>
                  </li>
                  <li className="py-4">
                    <Link to="/" className="text-dark text-decoration-none">
                      Student Experiences (10)
                    </Link>
                  </li>
                  <li className="py-4">
                    <Link to="/" className="text-dark text-decoration-none">
                      About us (5)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*BOTTOM CARD 2*/}
          {/*BOTTOM CARD 3*/}
          <div className="col-sm-8 my-4">
            <div className="card shadow-bottom">
              <Link to="/" className="text-dark text-decoration-none">
                <img
                  src={require("../images/unsplash_BfrQnKBulYQ.png")}
                  className="card-img-top"
                  alt="..."
                />
                <div>
                  <span className="position-absolute right-150 start-80 translate-middle badge rounded-pill">
                    Data Structures
                  </span>
                </div>
              </Link>
              <Link to="/" className="card-body">
                <Link to="/" className="text-dark text-decoration-none">
                  <h5 className="card-title">
                    Asymptotic Analysis of Different Data Structures Operations
                  </h5>
                  <p className="card-text">
                    <small className="text-muted">
                      JUNE 9, 2021 | 5 MINS READ
                    </small>
                  </p>
                </Link>
                <Link to="/" className="author text-decoration-none">
                  By Vivekanand Vivek
                </Link>
              </Link>
            </div>
          </div>
          {/*BOTTOM CARD 3*/}
          {/*BOTTOM CARD 4*/}
          <div className="col-sm-4">
              <div className="card-body links">
              <Link to="#0" className="linkedin"></Link>
              <Link to="#0" className="youtube"></Link>
              <Link to="#0" className="facebook"></Link>
              <Link to="#0" className="instagram"></Link>
              <Link to="#0" className="telegram"></Link>
              </div>
          </div>
          {/*BOTTOM CARD 4*/}
          {/*BOTTOM CARD 5*/}
          <div className="col-sm-8 my-4">
            <div className="card shadow-bottom">
              <Link to="/" className="text-dark text-decoration-none">
                <img
                  src={require("../images/unsplash_64YrPKiguAE.png")}
                  className="card-img-top"
                  alt="..."
                />
                <div>
                  <span className="position-absolute right-150 start-80 translate-middle badge rounded-pill">
                    Interview Preparation
                  </span>
                </div>
              </Link>
              <Link to="/" className="card-body">
                <div className="text-dark text-decoration-none">
                  <h5 className="card-title">
                    10 Most Common Mistakes To Avoid While Preparing for FAANG
                    Company Coding Interviews
                  </h5>
                  <p className="card-text">
                    <small className="text-muted">
                      JUNE 9, 2021 | 5 MINS READ
                    </small>
                  </p>
                </div>
                <Link to="/" className="author text-decoration-none">
                  By Vivekanand Vivek
                </Link>
              </Link>
            </div>
          </div>
          {/*BOTTOM CARD 5*/}
          {/*BOTTOM CARD 6*/}
          <div className="col-sm-8 my-4">
            <div className="card shadow-bottom">
              <Link to="/" className="text-dark text-decoration-none">
                <img
                  src={require("../images/unsplash_SyvsTmuuZyM.png")}
                  className="card-img-top"
                  alt="..."
                />
                <div>
                  <span className="position-absolute right-150 start-80 translate-middle badge rounded-pill">
                    Competitive Programming
                  </span>
                </div>
              </Link>
              <Link to="/" className="card-body">
                <Link to="/" className="text-dark text-decoration-none">
                  <h5 className="card-title">
                    Roadmap to be a Candidate Master at Codeforces
                  </h5>
                  <p className="card-text">
                    <small className="text-muted">
                      JUNE 9, 2021 | 5 MINS READ
                    </small>
                  </p>
                </Link>
                <Link to="/" className="author text-decoration-none">
                  By Vivekanand Vivek
                </Link>
              </Link>
            </div>
          </div>
          {/*BOTTOM CARD 6*/}
          {/*BOTTOM CARD 7*/}
          <div className="col-sm-8 my-4">
            <div className="card shadow-bottom">
              <Link to="/" className="text-dark text-decoration-none">
                <img
                  src={require("../images/unsplash_xrVDYZRGdw4.png")}
                  className="card-img-top"
                  alt="..."
                />
                <div>
                  <span className="position-absolute right-150 start-80 translate-middle badge rounded-pill">
                    Interview Preparation
                  </span>
                </div>
              </Link>
              <Link to="/" className="card-body">
                <div className="text-dark text-decoration-none">
                  <h5 className="card-title">
                    10 Most Common Mistakes To Avoid While Preparing for FAANG
                    Company Coding Interviews
                  </h5>
                  <p className="card-text">
                    <small className="text-muted">
                      JUNE 9, 2021 | 5 MINS READ
                    </small>
                  </p>
                </div>
                <Link to="/" className="author text-decoration-none">
                  By Vivekanand Vivek
                </Link>
              </Link>
            </div>
          </div>
          {/*BOTTOM CARD 7*/}
        </div>
      </div>
    </>
  );
}

export default Landing;