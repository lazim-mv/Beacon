"use client";
import { LazyMotion, domAnimation, m, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Brands from "./Brands";

function Clients() {
  const testimonials = [
    {
      message:
        "Beacon has been with us throughout the phase of integrating and adapting business to the dynamic marketplace, with end-to-end business consultation services.",
      name: "Usman Tariq",
      designation: "Google - Riyadh, KSA",
      img: "/profilePic3.webp",
    },
    {
      message:
        "While partnering with Beacon, we never felt them as the business consultants, but as a part of our team with transparency and commitment at its best.",
      name: "Hassan",
      designation: "Google - Jeddah, KSA",
      img: "/profilePic4.webp",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  const imageSources = [
    "/clients/brands/webp/logo1.webp",
    "/clients/brands/webp/logo2.webp",
    "/clients/brands/webp/logo3.webp",
    "/clients/brands/webp/logo4.webp",
    "/clients/brands/webp/logo5.webp",
    "/clients/brands/webp/logo6.webp",
    "/clients/brands/webp/logo9.webp",
    "/clients/brands/webp/logo10.webp",
    "/clients/brands/webp/logo11.webp",
    "/clients/brands/webp/logo12.webp",
    "/clients/brands/webp/logo13.webp",
    "/clients/brands/webp/logo15.webp",
    "/clients/brands/webp/logo17.webp",
    "/clients/brands/webp/logo18.webp",
    "/clients/brands/webp/logo20.webp",
    "/clients/brands/webp/logo22.webp",
    "/clients/brands/webp/shami.webp",
  ];

  const repeatedImageSources = Array.from({ length: 10 }, () => [
    ...imageSources,
  ]).flat();

  return (
    <div className="clientsContainer">
      <div className="businessContentContainer">
        <h6 className="businessHeading">our CLIENTS</h6>
        <h2 className="businessDesc">Our core partners</h2>
      </div>
      <div className="clientsImgContainer">
        <Brands
          imageSources={repeatedImageSources}
          initialAnimateValue="-160%"
          hoverDuration="180"
          duration="100"
        />
      </div>
      <div className="testimonialMainContainer">
        <div className="testimonialLeftContainer">
          <h2 className="testimonialHeading">
            What our clients
            <br />
            say about us
          </h2>
          <h2 className="mTestimonialHeading">
            What our clients say <br /> about us
          </h2>
          <p className="testimonialDesc">
            Let&lsquo;s hear from our clients, the core of whatever we commit.
          </p>
        </div>
        <div className="testimonialRightContainer">
          <div className="testimonialMessage">
            <h3>&quot;{currentTestimonial.message}&quot;</h3>
          </div>
          <div className="testimonialImageButtonContainer">
            <div className="testimonialProfile">
              <Image
                src={currentTestimonial.img}
                width={67}
                height={60}
                alt="person"
                quality={100}
                priority={true}
                unoptimized
              />
              <div style={{ display: "flex", flexDirection: "column" , alignItems:'flex-start'}}>
                {/* Display current testimonial's profile */}
                <p className="profileName">{currentTestimonial.name}</p>
                <p className="profileDesignation">
                  {currentTestimonial.designation}
                </p>
              </div>
            </div>
            <div className="testimonialButtonContainer">
              <button className="leftButton" onClick={previousTestimonial}>
                {"<"}
              </button>
              <button className="rightButton" onClick={nextTestimonial}>
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
