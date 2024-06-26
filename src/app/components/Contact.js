import Image from "next/image";
import React from "react";
import Button from "./Button";

function Contact() {
  return (
    <div className="contactMainContainer">
      <div className="contactContainer">
        <div className="contactHeadingContainer">
          <h2 className="contactHeading">Have Queries? We Provide Solutions.</h2>
        </div>
        <div className="contactDescContainer">
          <p className="contactDesc">
            If you&apos;re seeking tailored solutions, look no further. Get in touch with <br />{" "}
            us today for expert business consultancy services across the GCC.
          </p>
          <p className="mContactDesc">
          If you&apos;re seeking tailored solutions, look no further. Get in touch with 
          us today for expert business consultancy services across the GCC.
          </p>
        </div>
        {/* <a href="/pages/Contact">
          <div className="hButtonContainer contactImageButton">
            <div className="visibleWrapperContainer">
              <div className="topVisibleContainer btn">
                Let&apos;s Talk
                <div className="topVisibleArrow">
                  <Image
                    src="/whiteArrow.svg"
                    width={23}
                    height={23}
                    alt="heroContact"
                  />
                </div>
              </div>
              <div className="bottomVisibleContainer btn">
                Let&apos;s Talk
                <div className="bottomVisibleArrow">
                  <Image
                    src="/whiteArrow.svg"
                    width={23}
                    height={23}
                    alt="heroContact"
                  />
                </div>
              </div>
            </div>
          </div>
        </a> */}
        <div>
          <Button content="Let's Talk" href="/pages/Contact" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
