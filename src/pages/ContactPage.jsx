import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
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

      <div className="contactSection">
      <div className="contactDetails container">
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
          <p>shahidulshakil@protton.me</p>
          <p>shahidulshakil@gmail.com</p>
        </div>
      </div>
      </div>

      {/* form section */}
      <div className="formSection container flex">
        <div className="text">
          <div className="subTitle flex flex-cn">
            <img src="./star.png" alt="" />
            <h4>Get in Touch</h4>
          </div>
          <div className="title">
            <h1>Send Us a Message</h1>
            <p>
              Feel free to contact us anytime. We are always here to help you.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eligendi culpa.
            </p>
          </div>
          <div className="socialIcons">
            <a href="#" target="_black">
              <Twitter />
            </a>
            <a href="#" target="_black">
              <Facebook />
            </a>
            <a href="#" target="_black">
              <Instagram />
            </a>
            <a href="#" target="_black">
              <Linkedin />
            </a>
          </div>
        </div>
        <div className="form">
          <form action="">
            <div className="name">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="email">
              <input type="email" placeholder="Email" />
            </div>
            <div className="message">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="btn-s" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
