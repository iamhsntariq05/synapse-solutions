import React, { useState, useEffect } from 'react';
import NextBackButton from './NextBackButton';
// import styles from '../styles/contact.css';


const Contact = ({ prompt, placeholder, onNext, onBack }) => {
  const [inputValue, setInputValue] = useState('');
  
  const [promptStyle, setPromptStyle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(inputValue);
  };

  useEffect(() => {
    function handleResize() {
      // Set promptStyle based on window width
      if (window.innerWidth < 768) {
        setPromptStyle('ml-10'); // Apply margin-left for small screens
      } else {
        setPromptStyle('ml-0'); // Apply styles for large screens using CSS module class
      }
    }

    // Initial call to set styles on component mount
    handleResize();

    // Add event listener to detect window size changes
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <>
    {/* <p className="tracking-widest text-gray-500 text-2xl flex items-center 
          
     text-center  dark:text-gray-400" style={promptStyle}>
  {prompt}
</p> */}
<p className="tracking-widest text-gray-500 text-2xl flex items-center justify-center">
        {prompt}
      </p>
      <form className="flex flex-col mt-4 w-full max-w-sm mb-2 ml-10 md:ml-auto"  onSubmit={handleSubmit}>
        <div className="flex items-center border-b
         border-teal-500 w-5/6 py-2 md:w-full ">
          <input
            type="text"
            style={{ fontSize: '13px'  }}
            placeholder={placeholder}
            className="appearance-none bg-transparent border-none w-full 
            
            text-gray-700 mr-3 py-1 px-7 leading-tight focus:outline-none"
            value={inputValue}
            
            onChange={(e) => setInputValue(e.target.value)}
              required
          />
        </div>
        <NextBackButton onBack={onBack} onNext={handleSubmit} />
      </form>
    </>
  );
};

export default Contact;
