// import { TextField } from "@mui/material";
import { PageHeaderContent } from "components/pageHeaderContent/pageHeaderContent";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
// import { useFormik } from "formik";
// import * as yup from "yup";
import "./contact.scss";


// const sendEmail=(newEmail)=>{
//     console.log(newEmail);
//     //Do nothing as of now

// }


export const Contact = () => {

    // const movieValidationSchema=yup.object({
    //     name:yup.string().required("Kindly fill this name field"),
    //     email:yup.string().email().required("Kindly fill this email field "),
    //     description:yup.string().required("Kindly fill this description field").min(20,"Kidly give a detailed description"),
    //   })


    // const {handleBlur,handleChange,handleSubmit,values,errors,touched}=useFormik({
    //     initialValues:{
    //       name:"",
    //       email:"",
    //       description:"",
    //     },
    //     validationSchema:movieValidationSchema ,
    //     onSubmit:(newEmail)=>{
    //       console.log("onSubmit",newEmail);
    //       sendEmail(newEmail);
    //     },
    //   });

    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="My Contact"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >
                    <h3 className="contact__content__header-text">
                        Let's Communicate</h3>
                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >
                    <form>
                        <div className="contact__content__form">
                            <div className="contact__content__form__controlswrapper">
                                <div className="nameWrapper">
                                    <input required name="name" className="inputName" type={'text'} />
                                    <label htmlFor="name" className="nameLabel">Name</label>
                                </div>
                                <div className="emailWrapper">
                                    <input required name="email" className="inputEmail" type={'email'} />
                                    <label htmlFor="email" className="emailLabel">Email Address</label>
                                </div>
                                <div className="descriptionWrapper">
                                    <textarea required name="description" className="inputDescription" type={'text'} rows="6"/>
                                    <label htmlFor="description" className="descriptionLabel">Email Description</label>
                                </div>
                            </div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </Animate>
            </div>

        </section>
    )
}