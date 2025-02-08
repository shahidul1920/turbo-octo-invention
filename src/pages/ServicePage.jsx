import React from "react";

export default function ServicePage() {
  return (
    <div>
      {/* service is detail */}
      <div className="serviceInDetail container">
        <div className="subTitle flex">
          <img src="/star.png" alt="" />
          <h4>Service Details</h4>
        </div>
        <div className="title">
          <h1>Deit Programs Services</h1>
        </div>

        <div className="pText flex">
          <p>
            Our diet program services are designed to help you achieve your
            health and wellness goals through personalized nutrition plans. We
            understand that every individual is unique, and so are their dietary
            needs. Our team of experienced nutritionists and dietitians work
            closely with you to create a customized diet plan that fits your
            lifestyle, preferences, and health objectives.
          </p>
          <p>
            Whether you are looking to lose weight, manage a medical condition,
            or simply improve your overall well-being, our diet programs provide
            the guidance and support you need. We offer a variety of meal plans,
            nutritional counseling, and ongoing support to ensure you stay on
            track and achieve lasting results. Join us on a journey to a
            healthier, happier you with our comprehensive diet program services.
          </p>
        </div>

        <div className="image">
            <img src="/green-fruits.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
