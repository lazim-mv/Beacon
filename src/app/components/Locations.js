import Image from "next/image";
import React from "react";
import Button from "./Button";

function Locations() {
  return (
    <div className="locationContainer">
      <div className="locationFlexContainer">
        <div className="locationContentContainer">
          <div>
            <h2 className="locationHeading">
              Driving Business Success <br /> Through Strategic Solutions
            </h2>
          </div>
          <div>
            <p className="locationDesc">
              Expand your reach and boost sales in the exciting GCC market.
              We make it easy to set up and grow your business. Our experts craft
              personalized plans to help you succeed. From starting your business to
              marketing it online, we&apos;ve got you covered. Ready to unlock your potential? Let&apos;s get started.
            </p>
          </div>
          {/* <a href="/pages/About">
            <div className="hButtonContainer locationButton">
              <div className="visibleWrapperContainer">
                <div className="topVisibleContainer btn">
                  Explore More
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
                  Explore More
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
            <Button content="Explore More" href="/pages/About" />
          </div>
        </div>

        <div className="locationImgContainer">
          <Image
            src="/location.png"
            width={606}
            height={527}
            alt="ImageLocation"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}

export default Locations;
