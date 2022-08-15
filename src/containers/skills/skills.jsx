import { PageHeaderContent } from "components/pageHeaderContent/pageHeaderContent";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";

export const Skills=()=>{
    return(
        <section id="skills" className="skills">
        <PageHeaderContent
        headerText = "My Skills"
        icon={<BsInfoCircleFill size={40}/>}
        />
    </section>
    )
}