import React, { useState , useEffect} from "react";
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
  const [currentStep, setCurrentStep] = useState(0);
  const [inMainPage, setInMainPage] = useState(true);

  const handleButtonClick = (buttonName) => {
    if (inMainPage) {
      setSelectedButton(buttonName);
      setType(buttonName);
      setCurrentStep(1); // Move to the Name field page
      setInMainPage(false); // Set inMainPage to false when moving to the Name field page
    } else {
      setCurrentStep(0); // Go back to the main page
      setInMainPage(true); // Set inMainPage to true when going back to the main page
    }
  };

  const handleGoBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    console.log(currentStep);
    if (currentStep === 1) {
      //setSelectedButton(null); // Reset selectedButton to null when going back from the Email field page
      setInMainPage(true); // Update inMainPage based on the currentStep
    }
    
  };

  const handleSubmitName = (value) => {
    setName(value);
    setCurrentStep((prevStep) => prevStep + 1);
    //setCurrentStep(1); // Move to the next step (Email input)
  };

  const handleSubmitEmail = (value) => {
    setEmail(value);
    setCurrentStep((prevStep) => prevStep + 1);
    //setCurrentStep(2); // Move to the next step (Email input)
  
  };

  const handleSubmitAdditionalText = (value) => {
    setAdditionalText(value);
    setCurrentStep(3);

    const formData = {
      name,
      email,
      type,
      additionalText: value,
    };

    try {
      sendEmail(formData);
      setShowSuccess(true);
      setCurrentStep(0); // Move back to the main page after successful form submission
      // setSelectedButton(null); // Reset selectedButton after successful form submission
      setInMainPage(true);

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
          to: 'info@synapsesolutions.co',
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
            {/* For small screens: Break the heading into two lines */}
      <h1 className="text-2xl font-normal font-helvetica leading-normal ml-4 mt-0 mb-2 bg-clip-text text-[#ad3b76] tracking-wider sm:hidden">
        Our representative will <br /> contact you shortly.
      </h1>
      {/* For medium and larger screens: Do not break the heading */}
      <h1 className="text-2xl font-normal font-helvetica leading-normal ml-4 mt-0 mb-2 bg-clip-text text-[#ad3b76] tracking-wider hidden sm:block">
        Our representative will contact you shortly.
      </h1>
          
          </>
        ) : (
          <>
           <h1 className="text-2xl font-normal font-helvetica leading-normal mt-0 mb-2
           bg-clip-text text-[#ad3b76] mx-auto  text-center md:text-center"
            style={{color:'white' , fontSize:'40px'}}>
              
               How can we help you today?
            </h1>
            {inMainPage  ?  (
              <div className="flex items-center grid gap-6 grid-cols-2 mt-8 ml-4 grid-cols-2 
              gap-x-6 gap-y-6
              ml-8
              sm-grid-rows-2 
      
              md:flex md:items-center md:space-x-20 md:mt-8
              ">
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
              <div className="text-lg mt-3">
               {currentStep === 1 && (
               
                  <Contact
                    prompt="Whats your name?"
                    placeholder="Enter your name"
                    promptStyle={{ marginLeft: '60px' }}
                    onNext={handleSubmitName}
                    onBack={handleGoBack}
                    
                  />
                )}
                {currentStep === 2 && (
              
                  <Contact
                    prompt="How shall we contact you?"
                    placeholder="Enter your email"
                    onNext={handleSubmitEmail}
                    onBack={handleGoBack}
                    promptStyle={{marginLeft: '30px'}}
                    
                  />
                )}
                {currentStep === 3 && (
           
                  <Contact
                    prompt="Any Additional Information?"
                    placeholder="Enter additional text"
                    onNext={handleSubmitAdditionalText}
                    onBack={handleGoBack}
                    promptStyle={{marginLeft: '20px'}}

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
