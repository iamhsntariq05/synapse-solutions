import React, { useState } from "react";
import Contact from "./Contact";
import IconBulb from "./IconBulb";

import { HiWrench } from "react-icons/hi2";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillBulb } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

import SuccessAnimation from "./SuccessAnimation";

function BigContact() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [additionalText, setAdditionalText] = useState("");
  const [type, setType] = useState("");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    console.log(selectedButton)
    if (buttonName !== "Email") {
      setType(buttonName);
    }
  };

  const handleGoBack = () => {
    setSelectedButton(null);
    setName("");
    setEmail("");
    setAdditionalText("");
    setShowSuccess(false);
  };

  const handleSubmitName = (value) => {
    setName(value);
    setSelectedButton("Email");
  };

  const handleSubmitEmail = (value) => {
    setEmail(value);
    setSelectedButton("AdditionalText");
  
  };

  const handleSubmitAdditionalText = (value) => {
    setAdditionalText(value);

    const formData = {
      name,
      email,
      type,
      additionalText: value,
    };

    try {
      sendEmail(formData);
      setShowSuccess(true);
      setSelectedButton(null);
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const sendEmail = async (formData) => {
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nType: ${formData.type}\nAdditional Text: ${formData.additionalText}`;

    // Send email using your email sending logic
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'faizanofficial120@gmail.com',
          subject: 'Contact Form Submission',
          text: emailBody,
        }),
      });

      setShowSuccess(true);
      setSelectedButton(null);
    }  catch (error) {
      throw new Error("Failed to send email");
    }
  };

  return (
    <div className="wave-layers3">
      <div className="flex flex-col items-center justify-center min-h-screen">
        {showSuccess ? (
          <>
            <SuccessAnimation />
            <h1 className="text-2xl font-normal font-helvetica leading-normal mt-0 mb-2 bg-clip-text text-[#ad3b76] tracking-wider">
              Our representative will contact you shortly.
            </h1>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-normal font-helvetica leading-normal mt-0 mb-2 bg-clip-text text-[#ad3b76]">
              Thanks for reaching out. How can we help you today?
            </h1>
            {selectedButton === null ? (
              <div className="flex items-center space-x-[5rem] mt-8">
                <IconBulb
                  icon={AiFillBulb}
                  text="Development"
                  onClick={() => handleButtonClick("Development")}
                />
                <IconBulb
                  icon={BsFillPencilFill}
                  text="Design"
                  onClick={() => handleButtonClick("Design")}
                />
                <IconBulb
                  icon={HiWrench}
                  text="Strategy"
                  onClick={() => handleButtonClick("Strategy")}
                />
                <IconBulb
                  icon={BsThreeDots}
                  text="Other"
                  onClick={() => handleButtonClick("Other")}
                />
              </div>
            ) : (
              <div className="text-lg">
                {selectedButton !== "Email" && selectedButton !== "AdditionalText" && (
                  <Contact
                    prompt="Who do we have a pleasure talking with?"
                    placeholder="Enter your name/your company's name"
                    onNext={handleSubmitName}
                    onBack={handleGoBack}
                  />
                )}
                {selectedButton === "Email" && (
                  <Contact
                    prompt="How shall we contact you?"
                    placeholder="Enter your email"
                    onNext={handleSubmitEmail}
                    onBack={handleGoBack}
                  />
                )}
                {selectedButton === "AdditionalText" && (
                  <Contact
                    prompt="Please provide additional details"
                    placeholder="Enter additional text"
                    onNext={handleSubmitAdditionalText}
                    onBack={handleGoBack}
                  />
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default BigContact;
