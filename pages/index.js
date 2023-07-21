
import Typewriter from 'typewriter-effect';
import { useState } from 'react';

import AboutUs from '../component/aboutUs';
import Desktop1 from '../component/aboutTest';

import Card from '../component/Card';

import ParticleEffect from '../component/ParticleEffect';


import Tech from '../component/tech_stacks';
import { GiGearHammer } from 'react-icons/gi';


import dynamic from 'next/dynamic';
import Head from 'next/head';


import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Countdown = dynamic(() => import('react-countdown'), { ssr: false });

const navigation = [
  { name: 'SYNAPSE', href: '#', current: true },
  { name: 'Contact Us', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const professions = ["Software Development.", "IT Consultancy.", "Web Development.", "App Development.", "CRM Integration.", "Digital Transformation."];







export default function Example() {

  

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
    <div className="main">
      <Head>
        <title>SYNAPSE SOLUTIONS CO</title>
      </Head>

   <div >
   
      <Navbar />
      </div>
    
     
      <div className="wave-layer" >

      <ParticleEffect id="tsparticles"/>

  <div className="typewriter-holder">
    <div className="professions mt-10">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
        We offer
      </span>{" "}
      <span className="text-fuchsia-500">
        <Typewriter options={{ strings: professions, autoStart: true, loop: true }} />
      </span>
    </div>
  </div>
</div>


    <AboutUs />

      <div className="relative">

      
      <div className="wave-layers2">
        <div className="middle">
          <div className="text-6xl font-normal font-helvetica leading-normal mt-0 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#ff00cc] to-[#333399]">coming soon | <Countdown date={'2023-07-23T00:00:00'} /></div>
        </div>

        <div className="relative">
  <div className="absolute bottom-0 right-0 transform rotate-x-180 translate-y-1/2 -translate-x-1/2 -rotate-45">
    <GiGearHammer className="text-white text-[10rem] text-opacity-50 hover:text-opacity-100 hover:scale-110 hover:text-[#410B59]" />
  </div>
</div>


      </div>

      </div>
      
      <div className="wave-layers4">
      <section class="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
   <div class="container">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
               <span class="font-semibold text-lg text-primary mb-2 block text-white">
               Our Services
               </span>
               <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-white
                  mb-4
                  "
                  >
                  What We Offer
               </h2>
               <p class="text-base text-body-color text-white mt-6" >
              We strive to deliver innovative solutions that drive growth, optimize processes, and enhance customer experiences.
               </p>
            </div>
         </div>
      </div>
      

      <div className="services container ml-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <Card
        service="Software Development"
        text="Our talented team of developers brings ideas to life, crafting tailor-made software solutions that drive efficiency, productivity, and growth. From conceptualization to deployment, we're here to transform your vision into reality."
        img="/software.png"
      />
      <Card
        service="IT Consultancy"
        text="With our expert IT consultants, we offer strategic guidance to optimize your technology infrastructure and align it with your business objectives. Let us be your trusted partner in navigating the ever-evolving IT landscape."
        img="/consultant.png"
      />
      <Card
        service="Web Development"
        text="In today's mobile-centric world, a strong online presence is paramount. We specialize in crafting intuitive web platforms that engage your audience and deliver seamless experiences."
        img="/web dev.png"
      />
      <Card
        service="App Development"
        text="As an established IT firm, we specialize in providing cutting-edge mobile development solutions. Our experienced team of developers crafts customized mobile applications to meet your specific business needs, ensuring seamless user experiences across various platforms."
        img="/mobile.png"
      />

      <Card
        service="CRM Integration"
        text="Unlock the power of seamless data flow between your CRM system and other business applications. Our experts specialize in integrating CRM solutions to streamline your processes, improve customer relationships, and boost overall efficiency."
        img="/crm.png"
      />

<Card
        service="Digital Transformation"
        text="Embrace the power of digital transformation to propel your business forward. Our experts help you leverage emerging technologies, streamline processes, and enhance customer experiences, enabling you to stay competitive in today's digital age."
        img="/digital transformation.png"
      />






</div>


   </div>
</section>

      </div>

      


      <div className="wave-layers5">
      <div class="flex justify-center items-center">
  <span class="bg-clip-text text-3xl mt-[9rem] justify-center text-transparent bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 tracking-widest">Tech Stacks We Leverage</span>

  </div>  

  

  <Tech />
 
  
 

 

      </div>


      
      
      
      
      
      

<Footer />

      
</div>
)
}
