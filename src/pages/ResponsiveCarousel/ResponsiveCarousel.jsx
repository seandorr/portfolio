import React, { useState } from "react";
import PropTypes from "prop-types";
import { Carousel, CarouselItem } from "@sean_dorr/react-responsive-carousel-2";
import { Slider } from "@mui/material";
import useTranslation from "../../utils/customHooks/useTranslation";
import "./responsive-carousel.scss";

const ResponsiveCarousel = ({ type }) => {
  const { translation } = useTranslation();

  const [carouselItemHeightInput, setCarouselItemHeightInput] = useState(400);
  const [carouselGapInput, setCarouselGapInput] = useState(20);

  const carouselItemHeightInputNumber = Number(carouselItemHeightInput);

  const carouselItemHeightParameters = {
    carouselItemHeight: Number(carouselItemHeightInput),
    minCarouselItemHeight: 300,
    maxCarouselItemHeight: 1000,
  };

  const carouselItemGapParameters = {
    carouselItemGap: carouselGapInput,
    minCarouselItemGap: 0,
    maxCarouselItemGap: 100,
  };

  return (
    <div
      className={`main-container ${
        type === "preview" ? "preview__container" : "details__container"
      } `}
    >
      {type !== "preview" && (
        <form style={{ padding: 40 }}>
          <label>
            Height:
            <Slider
              aria-label="Carousel Item Height"
              value={carouselItemHeightParameters.carouselItemHeight}
              valueLabelDisplay="auto"
              onChange={(e) => setCarouselItemHeightInput(e.target.value)}
              step={20}
              marks
              min={carouselItemHeightParameters.minCarouselItemHeight}
              max={carouselItemHeightParameters.maxCarouselItemHeight}
            />
          </label>

          <label>
            Gap:
            <Slider
              aria-label="Carousel Item Gap"
              value={carouselItemGapParameters.carouselItemGap}
              valueLabelDisplay="auto"
              onChange={(e) => setCarouselGapInput(e.target.value)}
              step={5}
              marks
              min={carouselItemGapParameters.minCarouselItemGap}
              max={carouselItemGapParameters.maxCarouselItemGap}
            />
          </label>
        </form>
      )}

      <Carousel
        numberOfItemsShown={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        carouselItemHeight={carouselItemHeightInputNumber}
        gap={carouselGapInput}
        className="responsive-carousel__showcase-container"
      >
        <CarouselItem>
          <h1>
            {translation("project.responsiveCarousel.carouselContent.a")}{" "}
            <em>
              {translation("project.responsiveCarousel.carouselContent.nice")}
            </em>{" "}
            {translation("project.responsiveCarousel.carouselContent.carousel")}
            <em>!</em>
          </h1>
        </CarouselItem>
        <CarouselItem
          style={{ overflow: "hidden" }}
          onClick={() => window.open("/about", "_blank")}
        >
          <img
            src="https://seandorr.com/images/about/sean-headshot.jpg"
            alt=""
            className="carousel-image"
          />
        </CarouselItem>
        <CarouselItem>
          <div className="add-anything__item">
            <h2>
              {translation("project.responsiveCarousel.carouselContent.add")}{" "}
              <em>
                {translation(
                  "project.responsiveCarousel.carouselContent.anything"
                )}
              </em>{" "}
              {translation("project.responsiveCarousel.carouselContent.desire")}
              <em>!</em>
            </h2>
            <h3>
              {translation(
                "project.responsiveCarousel.carouselContent.confirmation"
              )}
            </h3>
          </div>
        </CarouselItem>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </div>
  );
};

ResponsiveCarousel.propTypes = {
  type: PropTypes.string,
};

ResponsiveCarousel.defaultProps = {
  type: "detailed",
};

export default ResponsiveCarousel;
