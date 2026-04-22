import "@/assets/scss/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";

$(document).ready(() => {
  $(".section-main-slider__carousel")
    .on("beforeChange", (event, slick, currentSlide, nextSlide) => {
      $(".section-main-slider__counter-current").text(nextSlide + 1);

      const imageClass = "section-main-slider__background-image";

      $(`.${imageClass}`).removeClass(`${imageClass}--active`);

      $(`.${imageClass}[data-slide-id="${nextSlide}"]`).addClass(
        `${imageClass}--active`,
      );
    })
    .slick({
      draggable: false,
      fade: true,
      prevArrow: ".section-main-slider__left-arrow",
      nextArrow: ".section-main-slider__right-arrow",
    });
});
