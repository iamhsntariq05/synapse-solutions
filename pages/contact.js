import react from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import BigContact from "../component/BigContact";
import ParticleEffect from "../component/ParticleEffect";

import Head from "next/head";

function Contact () {

return (

    <>
    <Head>
      <title>Synapse Solutions Co</title>
    </Head>
  <div>
    <Navbar />
 </div>

    <div className="contact-container">
    <div className="contact-waves">
    
    <div class="contact-waves flex flex-col items-center justify-center h-screen">
      
  <div class="text-2xl md:text-5xl font-bold font-league-spartan leading-normal mt-0 mb-12 bg-clip-text text-transparent text-white md:tracking-[1rem] tracking-widest">
    Contact Us
  </div>
</div>
        


    </div>
    </div>
    
    <BigContact />
    <Footer />

    
    </>



)



}

export default Contact;


