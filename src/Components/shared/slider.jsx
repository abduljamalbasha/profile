import React from "react";
import Slider from "react-slick";

var angular = require( '../../assets/images/logo/skills/angular.png' )
var asp = require( '../../assets/images/logo/skills/asp.png' )
var babel = require( '../../assets/images/logo/skills/babel.png' )
var bootstrap = require( '../../assets/images/logo/skills/bootstrap.png' )
var css = require( '../../assets/images/logo/skills/css.png' )
var es6 = require( '../../assets/images/logo/skills/es6.png' )
var git = require( '../../assets/images/logo/skills/git.png' )
var reactjs = require( '../../assets/images/logo/skills/react.png' )
var nodejs = require( '../../assets/images/logo/skills/nodejs.png' )
var html = require( '../../assets/images/logo/skills/html.png' )
var javascript = require( '../../assets/images/logo/skills/javascript.png' )
var json = require( '../../assets/images/logo/skills/json.jpeg' )
var mssql = require( '../../assets/images/logo/skills/mssql.png' )
var mysql = require( '../../assets/images/logo/skills/mysql.png' )
var powerappas = require( '../../assets/images/logo/skills/powerapps.png' )
var tailwind = require( '../../assets/images/logo/skills/tailwind.png' )
var typescripts = require( '../../assets/images/logo/skills/typescript.png' )
var webpack = require( '../../assets/images/logo/skills/webpack.png' )


const skillLogos = [
  { id:1,logo: reactjs},
  { id:2,logo: angular },
  { id:3,logo: nodejs },
  { id:3,logo: git },
  { id:4,logo: babel },
  { id:5,logo: es6 },
  { id:6,logo: bootstrap },
  { id:7,logo: json },
  { id:8,logo: javascript },
  { id:9,logo: tailwind },
  { id:10,logo: powerappas },
  { id:11,logo: typescripts },
  { id:12,logo: webpack },
  { id:13,logo: mssql },
  { id:14,logo: mysql },
  { id:15,logo: html },
  { id:16,logo: asp },
  { id:17,logo: css }
]

const SliderComponent = ( { isSkillSlide, projectDetail } ) => {
  
   var settings = {}
  if ( isSkillSlide ) {
    settings ={
      dots: false,
      initialSlide: 1,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 400,
      pauseOnHover: true,
      className: "center",
      centerMode: true,
      // centerPadding: "60px",
      rows: 3,
      slidesPerRow: 3,
      draggable:true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false,
            initialSlide: 1,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 400,
            pauseOnHover: true,
            className: "center",
            centerMode: true,
            // centerPadding: "60px",
            rows: 2,
            slidesPerRow: 2,
            draggable:true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            dots: false,
            initialSlide: 1,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 400,
            pauseOnHover: true,
            className: "center",
            centerMode: true,
            // centerPadding: "60px",
            rows: 2,
            slidesPerRow: 2,
            draggable:true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  } else {
    settings = {
      dots: true,
      infinite: true,
      initialSlide: 1,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  }

  const RenderImg = ( image ) => {
    return (
      <img
        className={ isSkillSlide ? "object-fill h-48 w-full" : "object-cover h-full shadow-lg  w-full" } 
            src={image.image}
            alt={image.image}
          />
    )
  }
  const RenderSlider = () => {
    if ( isSkillSlide ) {
    return (
      <Slider {...settings}>
          {skillLogos.map((skill) => (
            <div className="bg-white" key={skill.id}>
              <img
                className={ isSkillSlide ? "object-fill h-48 w-full" : "object-cover h-full w-full" } 
                    src={skill.logo}
                    alt={skill.logo}
                  />
            </div>
          ) )}
        </Slider>
    )
    } else {
      return(
        <Slider {...settings}>
          <div className="p-4">
            {projectDetail.images && projectDetail.images.map((image) => (
              // <div className="bg-white" key={image.image}>
                 RenderImg(image) 
              // </div>
        ) )}
          </div>
      </Slider>
      )
      //     return (
      // <Slider {...settings}>
      //     {skillLogos.map((skill) => (
      //       <div className="bg-white" key={skill.id}>
      //         <img
      //           className={ isSkillSlide ? "object-fill h-48 w-full" : "object-cover h-full w-full" } 
      //               src={skill.logo}
      //               alt={skill.logo}
      //             />
      //       </div>
      //     ) )}
      //   </Slider>
      //   )
    }

  }

  
  return (
    <div className="shadow-lg">    
      {RenderSlider()}
      </div>
  )
}

export default SliderComponent

