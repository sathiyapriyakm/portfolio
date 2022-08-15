import React from "react";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

export const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToContactMePage = () => {
        navigate("/contact");
    }
    return (
        <section id="home" className="home">
            <div className="home__text-wraper">
                <h1>
                    Hello, I'm Sathiyapriya
                    <br />
                    Full stack developer
                </h1>
            </div>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: "translateY(550px)",
                }}
                end={{
                    transform: "translatex(0px)",
                }}
            >
                <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMePage}>Hire Me</button>
                </div>
            </Animate>
        </section>
    )
}