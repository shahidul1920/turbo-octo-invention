import { ChevronRight, CircleCheck } from "lucide-react";
import React from "react";

export default function ServicePage() {

  const toggleAnswer = (e) => {
    const answer = e.target.nextElementSibling;
    answer.classList.toggle("answerN");
    if(answer.classList.contains("f1")){
      e.target.lastElementChild.style.transform = "rotate(0deg)";
      answer.style.display = "none";
      answer.classList.remove("f1");
  }else{
    e.target.lastElementChild.style.transform = "rotate(90deg)";
    answer.style.display = "block";
    answer.classList.add("f1");
  }
}

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

      {/* FAQ */}

      <div className="faq">
        <div className="container">
          <div className="subTitle flex">
            <img src="/star.png" alt="" />
            <h4>FAQ</h4>
          </div>

          <div className="title">
            <h1>Common Questions About <br/> Diet Programs</h1>
          </div>

          <div className="faqSec">
            <div className="mainFaq">
              <div className="faqContent">
                <div className="faqItem">
                  <div className="question flex" onClick={toggleAnswer}>
                    <h3>What is a diet program?</h3>
                    <ChevronRight />
                  </div>
                  <div className="answer f1">
                    <p>
                      A diet program is a structured plan for eating that is
                      designed to help you achieve specific health and wellness
                      goals. It typically involves a combination of meal
                      planning, nutritional counseling, and ongoing support to
                      help you make healthy choices and reach your objectives.
                    </p>
                  </div>
                </div>
                <div className="faqItem">
                  <div className="question flex" onClick={toggleAnswer}>
                    <h3>How can a diet program help me?</h3>
                    <ChevronRight />
                  </div>
                  <div className="answer">
                    <p>
                      A diet program can help you in a variety of ways,
                      depending on your individual needs and goals. It can help
                      you lose weight, manage a medical condition, improve your
                      energy levels, and enhance your overall well-being. By
                      providing you with personalized nutrition plans and
                      guidance, a diet program can support you in making
                      positive changes to your diet and lifestyle.
                    </p>
                  </div>
                </div>
                <div className="faqItem">
                  <div className="question flex" onClick={toggleAnswer}>
                    <h3>What can I expect from a diet program?</h3>
                    <ChevronRight />
                  </div>
                  <div className="answer">
                    <p>
                      When you enroll in a diet program, you can expect to
                      receive personalized nutrition plans, meal ideas, and
                      guidance on making healthy choices. You will work closely
                      with a team of experienced nutritionists and dietitians
                      who will help you create a plan that fits your lifestyle,
                      preferences, and health objectives. You will also receive
                      ongoing support and encouragement to help you stay on
                      track and achieve lasting results.
                    </p>
                  </div>
                </div>
                <div className="faqItem">
                  <div className="question flex" onClick={toggleAnswer}>
                    <h3>How long does a diet program last?</h3>
                    <ChevronRight />
                  </div>
                  <div className="answer">
                    <p>
                      The duration of a diet program can vary depending on your
                      goals and needs. Some programs are designed to be
                      short-term, lasting a few weeks or months, while others
                      are intended to be long-term lifestyle changes. Your
                      nutritionist or dietitian will work with you to create a
                      plan that is tailored to your timeline and objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="image">
              <img src="/woman-refrigerator.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* pricing */}

      <div className="pricingSec">

        <div className="title container">
          <div className="subTitle">
          <img src="/star.png" alt="" />
          <h4>Pricing</h4>
          </div>
          <h1>Choose a Plan That Works for You</h1>
        </div>

        <div className="container flex flex-cn">

          {/* 1 */}

          <div className="priceCard">

            <div className="headNp">
              <h2>Bronze Plan</h2>
              <p>
                Our Bronze Plan is perfect for those looking to get started on
                their health and wellness journey.
              </p>
            </div>

            <div className="price">
              <h1>$199</h1><span>/month</span>
            </div>

            <div className="featureList">
              <ul>
                <li><CircleCheck /> Personalized nutrition plan</li>
                <li><CircleCheck /> Meal ideas</li>
                <li><CircleCheck /> Ongoing support</li>
                <li><CircleCheck /> 24/7 Support</li>
              </ul>
            </div>

            <div className="button">
              <button className="btn btn-p">Get Started</button>
            </div>

          </div>

          {/* 2 */}

          <div className="priceCard">

            <div className="headNp">
              <h2>Gold Plan</h2>
              <p>
                Gold Plan is perfect for those looking to get started on
                their health and wellness journey.
              </p>
            </div>

            <div className="price">
              <h1>$299</h1><span>/month</span>
            </div>

            <div className="featureList">
              <ul>
                <li><CircleCheck /> Personalized nutrition plan</li>
                <li><CircleCheck /> Meal ideas</li>
                <li><CircleCheck /> Ongoing support</li>
                <li><CircleCheck /> 24/7 Support</li>
              </ul>
            </div>

            <div className="button">
              <button className="btn btn-s">Get Started</button>
            </div>

          </div>

          {/* 3 */}

          <div className="priceCard">

            <div className="headNp">
              <h2>Diamont Plan</h2>
              <p>
                Diamont Plan is perfect for those looking to get started on
                their health and wellness journey.
              </p>
            </div>

            <div className="price">
              <h1>$399</h1><span>/month</span>
            </div>

            <div className="featureList">
              <ul>
                <li><CircleCheck /> Personalized nutrition plan</li>
                <li><CircleCheck /> Meal ideas</li>
                <li><CircleCheck /> Ongoing support</li>
                <li><CircleCheck /> 24/7 Support</li>
              </ul>
            </div>

            <div className="button">
              <button className="btn btn-p">Get Started</button>
            </div>

          </div>


        </div>
      </div>



    </div>
  );
}
