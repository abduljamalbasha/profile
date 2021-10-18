import React from "react";
import ProgressBar from "./shared/progressBar";

const MySkillsComponent = () => {
  return (






    <div className="mt-12 sm:mt-1">
      <div className="grid grid-cols-1 gap-y-12 sm:gap-x-6 lg:grid-cols-2 sm:grid-cols-2 xl:gap-x-8">
        {/* Skill left side */}
        <div>
        <div className="tag top-tags ml-4 lg:mt-28 md:mt-4 sm:mt-4 text-gray-600 text-sm">&lt; h2 &gt;</div>
            <div className="ml-8 mt-4 lg:text-6xl md:text-4xl sm:text-4xl xs:text-2xl font-black ">
              <h1 className="text-green-500">Skills & Experiences</h1>
            </div>
              <div className="tag top-tags ml-4 mt-4 text-gray-600 text-sm">&lt; h2 /&gt;</div>  
            <div className="tag top-tags ml-4 mt-4 text-gray-600 text-sm">&lt; p &gt;</div>
                <p className="text-gray-300 px-10">
              Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.
                </p> 
            <br></br>
            <p className="text-gray-300 px-10">
              I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
                </p>  
            <br></br>
            <p className="text-gray-300 px-10">
              I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others) .
                </p>  
            <br></br>
            <p className="text-gray-300 px-10">
                  Visit my <a className="text-green-400" target="_blanks" rel="work" href="https://www.linkedin.com/in/jamal-basha-698a9837/">LinkedIn</a> profile for more details or just  <a  className="text-green-400" rel="work" href="/contact/">Contact</a> Me.
                </p>  
            <div className="tag top-tags ml-4 text-gray-600 text-sm">&lt; p /&gt;</div>
        </div>
        {/* Skill right side */}
        <div>
           <div className="mt-52">    
            <ProgressBar name={"Front-end"} progress="75" color="green" />
            <ProgressBar name={"Back-end"} progress="80" color='purple' />
            <ProgressBar name={"ReactJS"} progress="85" color='pink' />
            <ProgressBar name={"NodeJS"} progress="70" color='red' />
            <ProgressBar name={"Angular"} progress="75" color='green' />
            <ProgressBar name={"MS-PoweApps"} progress="70" color='red' />


          </div>
        </div>
      </div>


 

    </div>
  )
}

export default MySkillsComponent