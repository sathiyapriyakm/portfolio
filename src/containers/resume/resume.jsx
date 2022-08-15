import { PageHeaderContent } from "components/pageHeaderContent/pageHeaderContent";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";
import { data } from "./utils";
import "./resume.scss";
import "react-vertical-timeline-component/style.min.css";
export const Resume = () => {
    return (
        <section id="resume" className="resume">
            <PageHeaderContent
                headerText="My Resume"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="timeline">
                <div className="timeline__experience">
                    <h3 className="timeline__experience__header-text"> Experience </h3>
                    <VerticalTimeline
                        layout={'1-column'}
                        lineColor="var(--yellow-theme-main-color)"
                    >
                        {
                            data.experience.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className="timeline__experience__vertical-timeline-element"
                                >
                                    <div className="vertical-timeline-element-tittle-wrapper">
                                        <h3 className="vertical-timeline-element-tittle" >
                                            {item.title}
                                        </h3>
                                        <h4 className="vertical-timeline-element-subtittle" >
                                            {item.subTitle}
                                        </h4>
                                        <p>{item.description}</p>
                                    </div>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>
                <div className="timeline__education">
                    <h3 className="timeline__education__header-text"> Education </h3>
                </div>

            </div>
        </section>
    )
} 