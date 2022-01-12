import React from "react";
import Slider from "react-slick";
import { SliderImage } from "./slider.style";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <SliderImage src="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2lkZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
      </div>
      <div>
        <SliderImage src="https://wallpaperaccess.com/full/124582.jpg" />
      </div>
      <div>
        <SliderImage src="https://wallpaperaccess.com/full/3634810.jpg" />
      </div>
      <div>
        <SliderImage src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/24e07e96-bffe-4908-b44c-8b4501d10229/deau6zx-b1c04d6f-6109-49ba-ad5f-168cb0f3ece4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI0ZTA3ZTk2LWJmZmUtNDkwOC1iNDRjLThiNDUwMWQxMDIyOVwvZGVhdTZ6eC1iMWMwNGQ2Zi02MTA5LTQ5YmEtYWQ1Zi0xNjhjYjBmM2VjZTQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WZokL95EeVNq-XtbZjbGwvNcTt7SheNxgnC5mkiF9Xg" />
      </div>
      <div>
        <SliderImage src="https://i.imgur.com/RmlQNy7.jpg" />
      </div>
      <div>
        <SliderImage src="https://wallpaperbat.com/img/156442-ultra-widescreen-wallpaper-top-free-ultra-widescreen.jpg" />
      </div>
    </Slider>
  );
}
