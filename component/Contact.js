import React, { useState } from 'react';
import NextBackButton from './NextBackButton';

const Contact = ({ prompt, placeholder, onNext, onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    onNext(); // Pass the name and email values as an object to onNext function
  };

  return (
    <>
      <p className="tracking-widest text-gray-500 md:text-lg dark:text-gray-400">{prompt}</p>
      <form className="flex flex-col mt-4 w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            type="text"
            placeholder={placeholder}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-7 leading-tight focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {placeholder === 'enter your email' && (
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              type="email"
              placeholder="enter your email"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-7 leading-tight focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        )}
        <NextBackButton onBack={onBack} onNext={onNext}/>
      </form>
    </>
  );
};

export default Contact;
