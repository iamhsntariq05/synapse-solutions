import react from "react"
import { useState } from "react";
import Contact from "./contact"
import IconBulb from "./IconBulb";

import  {HiWrench } from 'react-icons/hi2';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillBulb } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';




function BigContact() {




    const [selectedButton, setSelectedButton] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [additionalText, setAdditionalText] = useState('');
    const [type, setType] = useState('');
  
    const handleButtonClick = (buttonName) => {
      console.log(buttonName);
      setSelectedButton(buttonName);
      if (buttonName !== 'Email') {
        setType(buttonName);
      }
    };
  
    const handleGoBack = () => {
      setSelectedButton(null);
      setName('');
      setEmail('');
      setAdditionalText('');
      setShowSuccess(false);
    };
  
    const handleSubmitName = (value) => {
      setName(value);
      
      setSelectedButton('Email');
    };
  
    const handleSubmitEmail = async (value) => {
      console.log(value)
      setEmail(value);
      const emailBody = `Name: ${name}\nEmail: ${value}\nType: ${type}\nAdditional Text: ${additionalText}`;
  
      // Send email
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
      } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred. Please try again later.');
      }
    };


    return (
<div className="wave-layers3">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl font-normal font-helvetica leading-normal mt-0 mb-2 bg-clip-text text-[#ad3b76] ">Thanks for reaching out. How can we help you today?</h1>
          {selectedButton === null ? (
          
            
      

            
            <div className="flex items-center space-x-[5rem] mt-8">

              <IconBulb icon={AiFillBulb} text="Development" onClick={() => handleButtonClick("Development")}/><IconBulb icon={BsFillPencilFill} text="Design" onClick={() => handleButtonClick("Design")} /><IconBulb icon={HiWrench} text="Strategy" onClick={() => handleButtonClick("Strategy")}/><IconBulb icon={BsThreeDots} text="Other" onClick={() => handleButtonClick("Development")}/>

             
            </div>
          ) : (
            <div className="text-lg">
              {selectedButton === 'Design' && (
                <Contact
                  prompt="Who do we have a pleasure talking with?"
                  placeholder="Enter your name/your company's name"
                  onNext={handleSubmitName}
                  onBack={handleGoBack} />
              )}
              {selectedButton === 'Development' && (
                <Contact
                  prompt="Who do we have a pleasure talking with?"
                  placeholder="Enter your name/your company's name"
                  onNext={handleSubmitName}
                  onBack={handleGoBack} />
              )}
              {selectedButton === 'Other' && (
                <Contact
                  prompt="Who do we have a pleasure talking with?"
                  placeholder="Enter your name/your company's name"
                  onNext={handleSubmitName}
                  onBack={handleGoBack} />
              )}
              {selectedButton === 'Strategy' && (
                <Contact
                  prompt="Who do we have a pleasure talking with?"
                  placeholder="Enter your name/your company's name"
                  onNext={handleSubmitName}
                  onBack={handleGoBack} />
              )}
              {selectedButton === 'Email' && (
                <Contact
                  prompt="How shall we contact you?"
                  placeholder="Enter your email"
                  onNext={handleSubmitEmail}
                  onBack={handleGoBack} />
              )}
              {showSuccess && <p>We will contact you shortly.</p>}
            </div>
          )}
        </div>
      </div>


    )



}




export default BigContact;
