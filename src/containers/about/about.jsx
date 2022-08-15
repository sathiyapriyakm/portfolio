import { PageHeaderContent } from "components/pageHeaderContent/pageHeaderContent";
import React from "react";
import {BsInfoCircleFill} from "react-icons/bs";
import { Animate } from "react-simple-animate";

const personalDetails=[
    {
        label:"Full Name",
        value:"Sathiyapriya Krishnasamy"
    },
    {
        label:"Age",
        value:"30"
    },
    {
        label:"Address",
        value:"Erode,TamilNadu,India"
    },
    {
        label:"Email",
        value:"sathiyapriya.km@gmail.com"
    },
    {
    label:"Contact Number",
    value:"+91 9659959196"
},]

const profileSummary="Engineering professional with 4+ years of experience in Automotive solution domain. Focused on delighting customer with high quality, value added work on time. Aspired to leverage the value that I deliver by learning new things to expand my skills horizontally and vertically .Goal driven person, who takes 100% responsibility to achieve things with stratagy and creative planning";

export const About=()=>{
    return(
       <section id="about" className="about">
           <PageHeaderContent
           headerText="About Me"
           icon={<BsInfoCircleFill size={40}/>}
           /> 
           <div className="about__content">
                <h3>
                    Full stack developer
                </h3>
                <p>{profileSummary}</p>
           </div>
       </section>
    )
}