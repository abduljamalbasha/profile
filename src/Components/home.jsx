import React from "react";
import ContactUsComponent from "./contact";
import ProfileComponent from "./profile";
import MySkillsComponent from "./skills";
import WorkComponent from "./work";

const HomeComponent = () => {
  return (
    <div>
      <ProfileComponent />
      <WorkComponent />
      <MySkillsComponent />
      <ContactUsComponent />
    </div>
  )
}

export default HomeComponent