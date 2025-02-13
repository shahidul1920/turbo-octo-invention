import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export default function ContactPage() {
  return (
    <div>
      <div className="textNtitle">
        <div className="subTitle flex flex-cn">
          <h4>Our Contact</h4>
          <img src="./star.png" alt="" />
        </div>
        <div className="title">
          <h1>Get in Touch</h1>
          <p>
            We are always here to help you. Please feel free to contact us
            anytime.
          </p>
        </div>
      </div>

      <div className="contactDetails conrainer">
        <div className="card location">
          <MapPin />
          <h4>Address</h4>
          <p>1234 North Avenue Luke Lane, South Bend, IN 360001</p>
        </div>
        <div className="card phone">
          <Phone />
          <h4>Phone</h4>
          <p>+1 234 567 890</p>
          <p>+1 234 567 770</p>
        </div>
        <div className="card email">
          <Mail />
          <h4>Email</h4>
          <p></p>
        </div>
      </div>
    </div>
  );
}
