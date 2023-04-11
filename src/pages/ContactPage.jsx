import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import "./ContactPage.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mwpysdk",
        "template_j63c1qb",
        form.current,
        "AVqLwAYu2XheShl6z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Sent Email!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    e.target.reset();
  };

  return (
    <div>
      {/* <h3 className="contactHeader">Contact me</h3> */}
      <p className="formInfo">
        Feel free to leave your contact information and I will get back to you
        as soon as I can.
      </p>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">
          Full Name:
          <input
            type="text"
            name="user_name"
            {...register("user_name", {
              required: true,
            })}
          />
          {errors.user_name?.type === "required" && (
            <p className="errorMsg">First name is required.</p>
          )}
        </label>

        <label htmlFor="user_email">
          E-Mail:
          <input
            type="text"
            name="user_email"
            {...register("user_email", {
              required: true,
            })}
          />
          {errors.user_email?.type === "required" && (
            <p className="errorMsg">Last name is required.</p>
          )}
        </label>
        <label htmlFor="user_phoneNumber">
          Phone Number:
          <input
            type="text"
            name="user_phoneNumber"
            {...register("user_phoneNumber", {
              required: true,
            })}
          />
          {errors.user_phoneNumber?.type === "required" && (
            <p className="errorMsg">Phone number is required.</p>
          )}
        </label>
        <label htmlFor="message">
          Your message here:
          <textarea
            className="input-large"
            type="text"
            name="message"
            {...register("message", {
              required: true,
            })}
          />
          {errors.message?.type === "required" && (
            <p className="errorMsg">Phone number is required.</p>
          )}
        </label>
        <button className="button sub">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactPage;
