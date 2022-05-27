import React from "react";
import { Carousel, CarouselItem } from "@sean_dorr/react-responsive-carousel";
import useTranslation from "../../utils/customHooks/useTranslation";
import "./responsive-carousel.scss";

const ResponsiveCarousel = () => {
  const { translation } = useTranslation();

  return (
    <Carousel
      numberOfItemsShown={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
      carouselItemHeight={400}
      gap={20}
      className="responsive-carousel-showcase"
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
  );
};

ResponsiveCarousel.propTypes = {};

export default ResponsiveCarousel;
