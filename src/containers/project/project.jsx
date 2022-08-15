import { PageHeaderContent } from "components/pageHeaderContent/pageHeaderContent";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";

export const Project=()=>{
    return(
        <section id="project" className="project">
        <PageHeaderContent
        headerText = "My Projects"
        icon={<BsInfoCircleFill size={40}/>}
        />
    </section>
    )
}