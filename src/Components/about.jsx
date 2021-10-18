import React from "react";
import SliderComponent from "./shared/slider";

const AboutComponent = () => {
  return (






    <div className="mt-12 sm:mt-1">
      <div className="grid grid-cols-1 gap-y-12 sm:gap-x-6 lg:grid-cols-2 sm:grid-cols-2 xl:gap-x-8">
        {/* Skill left side */}
        <div>
        <div className="tag top-tags ml-4 lg:mt-28 md:mt-4 sm:mt-4 text-gray-600 text-sm">&lt; h2 &gt;</div>
            <div className="ml-8 mt-4 lg:text-6xl md:text-4xl sm:text-4xl xs:text-2xl font-black ">
              <h1 className="text-green-500">My, Myself & I</h1>
            </div>
              <div className="tag top-tags ml-4 mt-4 text-gray-600 text-sm">&lt; h2 /&gt;</div>  
            <div className="tag top-tags ml-4 mt-4 text-gray-600 text-sm">&lt; p &gt;</div>
                <p className="text-gray-300 px-10">
              I’m a Full-Stack Developer located in India. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                </p> 
            <br></br>
            <p className="text-gray-300 px-10">
              Well-organised person, problem solver, independent employee with high attention to detail. Fan of Cicket, outdoor activities, and TV series. A family person and married,
                </p>  
            <br></br>
            <p className="text-gray-300 px-10">
              Interested
                </p>  
            <br></br>
            <p className="text-gray-300 px-10">
                  <a className="text-green-400" rel="contact" href="/contact/"> Lets make something special</a>  
                </p>  
            <div className="tag top-tags ml-4 text-gray-600 text-sm">&lt; p /&gt;</div>
        </div>
        {/* Skill right side */}
        <div>
           <div className="mt-40">    
           <SliderComponent isSkillSlide />
          </div>
        </div>


       
      </div>


 

    </div>
  )
}

export default AboutComponent