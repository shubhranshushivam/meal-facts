import React from "react";
import "./instruction.scss";

export default function Instruction() {
  return (
    <div className="instruction" id="instruction">
      <h1>Meal Facts</h1>

      <div className="container">
        <div className="left"></div>

        <div className="right">
            <div className="intro">
              <div className="wrapper">
                Have you ever been to a café and been served a dish that you
                were unable to identify? Or have you ever assumed how many
                calories you consumed from a particular meal? Meal Fact is a
                website that provides information to all of these questions with
                a single click. This is a one-stop shop for food identification,
                calorie calculation, and recipe creation.
              </div>
            </div>

            <div className="steps">
                <h2>How to Use?</h2>
              <div className="wrapper">
                
                
                <div className="item">
                <h3>Step I: Capture an image of the dish</h3>
                <img src="assets/s1.jpg" alt="" />
                </div>
                <div className="item">
                <h3>Step II: Upload the image on meal facts</h3>
                <img src="assets/s2.jpg" alt="" />
                </div>
                <div className="item">
                <h3>Step III: Get dish name, calories served and recipe</h3>
                <img src="assets/s3.jpg" alt="" />
                </div>

                
                
                
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
