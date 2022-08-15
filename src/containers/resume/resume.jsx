import { PageHeaderContent } from "components/pageHeaderContent/pageHeaderContent";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
export const Resume=()=>{
    return(
        <section id="resume" className="resume">
        <PageHeaderContent
        headerText = "My Resume"
        icon={<BsInfoCircleFill size={40}/>}
        />
    </section>
    )
} 