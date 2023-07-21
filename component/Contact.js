import React, { useState } from 'react';
import NextBackButton from './NextBackButton';

const Contact = ({ prompt, placeholder, onNext, onBack }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(inputValue);
  };

  return (
    <>
      <p className="tracking-widest text-gray-500 text-sm flex items-center ml-4 dark:text-gray-400 md:ml-2 md:text-lg ">{prompt}</p>
      <form className="flex flex-col mt-4 w-full max-w-sm " onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-teal-500 py-2 md:w-full w-4/5">
          <input
            type="text"
            style={{ fontSize: '13px' }}
            placeholder={placeholder}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-7 leading-tight focus:outline-none"
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
