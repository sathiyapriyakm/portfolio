import { PageHeaderContent } from "components/pageHeaderContent/pageHeaderContent";
import React from "react";
import { FaReact, FaCar, FaNodeJs, FaDatabase } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./about.scss"

const personalDetails = [
    {
        label: "Full Name",
        value: "Sathiyapriya Krishnasamy"
    },
    {
        label: "Age",
        value: "30"
    },
    {
        label: "Address",
        value: "Erode,TamilNadu,India"
    },
    {
        label: "Email",
        value: "sathiyapriya.km@gmail.com"
    },
    {
        label: "Contact Number",
        value: "+91 9659959196"
    },]

const profileSummary = "Engineering professional with 4+ years of experience in Automotive solution domain. Focused on delighting customer with high quality, value added work on time. Aspired to leverage the value that I deliver by learning new things to expand my skills horizontally and vertically . Goal driven person, who takes 100% responsibility to achieve things with stratagy and creative planning";

export const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalwrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(-900px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >
                        <h3>
                            Full stack developer
                        </h3>
                        <p>{profileSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(500px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >
                        <h3 className="personalInformationHeaderText">
                            Personal Information
                        </h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">{item.label}</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__serviceswrapper">
                <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(600px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}
                    >
                    <div className="about__content__serviceswrapper__innerContent">
                        <div>
                            <FaCar size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaReact size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaNodeJs size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                    </div>
                    </Animate>
                </div>
            </div>
        </section>
    )
}