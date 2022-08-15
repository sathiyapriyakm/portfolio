import { PageHeaderContent } from "components/pageHeaderContent/pageHeaderContent";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";




export const Contact=()=>{
    return(
        <section id="contact" className="contact">
        <PageHeaderContent
        headerText = "My Contact"
        icon={<BsInfoCircleFill size={40}/>}
        />
       
    </section>
    )
}