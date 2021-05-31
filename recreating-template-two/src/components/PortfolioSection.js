import React from "react";

import CabinItem from "./profileItems/CabinIntem";
import CakeItem from "./profileItems/CakeItem";
import CircusItem from "./profileItems/CircusItem";
import GameItem from "./profileItems/GameItem";
import SafeItem from "./profileItems/SafeItem";
import SubmarineItem from "./profileItems/SubmarineItem";

const PortfolioSection = () => {
  return (
    <div>
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          {/* Portfolio Section Heading */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          {/* Portfolio Grid Items */}
          <div className="row justify-content-center">
            {/* <!-- Portfolio Item 1--> */}
            <div className="col-md-6 col-lg-4 mb-5">
              <CabinItem />
            </div>
            {/* <!-- Portfolio Item 2--> */}
            <div class="col-md-6 col-lg-4 mb-5">
              <CakeItem />
            </div>
            {/* <!-- Portfolio Item 3--> */}
            <div className="col-md-6 col-lg-4 mb-5">
              <CircusItem />
            </div>
            {/* <!-- Portfolio Item 4--> */}
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <GameItem />
            </div>
            {/* <!-- Portfolio Item 5--> */}
            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
              <SafeItem />
            </div>
            {/* <!-- Portfolio Item 6--> */}
            <div className="col-md-6 col-lg-4">
              <SubmarineItem />
              
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Portfolio Modal 1--> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
        tabindex="-1"
        aria-labelledby="portfolioModal1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Log Cabin
                    </h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img
                      className="img-fluid rounded mb-5"
                      src="assets/img/portfolio/cabin.png"
                      alt="..."
                    />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button
                      className="btn btn-primary"
                      href="#!"
                      data-bs-dismiss="modal"
                    >
                      <i className="fas fa-times fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
