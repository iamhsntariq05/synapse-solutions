

import react from "react"
import ChooseCard from "./ChooseCard";

const Desktop2 = () => {
  return (
    <div className="wrapper">
  <div className="w-full px-4 py-8 md:w-[80%] md:max-w-[1440px] mx-auto flex flex-col justify-start items-center gap-6">
    <div className="w-full px-4 py-8 md:w-[50%] md:px-[39px] md:py-[123px] flex-col justify-center items-center gap-4 flex">
      <div className="text-center text-white text-2xl md:text-5xl font-bold">Why Choose Us?</div>
      <div className="text-center text-white text-xl font-medium mt-6">
      We provide cutting-edge solutions, tailored to your specific needs, while delivering unmatched technical expertise and exceptional customer support,
       ensuring your business thrives in the digital era.
      </div>
    </div>
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4rem] mb-[5rem]">
    <ChooseCard 
      heading="Our Mission"
      text="Our mission is to deliver cutting-edge IT services and software solutions that meet the evolving needs of businesses. We strive to attract and nurture top talent in Pakistan, providing them with a platform to excel and contribute to our clients' success. Through our unwavering focus on quality, innovation, and customer satisfaction, we aim to establish ourselves as the go-to partner for businesses seeking advanced IT solutions in Pakistan and the US market."
      />
      <ChooseCard 
      heading="Our Team"
      text="Our team comprises talented and diverse professionals dedicated to delivering exceptional IT solutions. With expertise in software development, system integration, and more, we foster a collaborative and inclusive environment. By leveraging our collective skills, knowledge, and a shared passion for innovation, we ensure client success through cutting-edge technology solutions."
      />
      <ChooseCard 
      heading="Our Vision"
      text="Our vision is to become the premier IT company in Pakistan, known for our exceptional talent recruitment and our successful penetration of the US market. By leveraging the skills and creativity of talented youth, we aim to bridge the market gap and provide innovative technology solutions that empower businesses and drive digital transformation."
      />
    </div>
  </div>
</div>

  
  );
};

export default Desktop2;