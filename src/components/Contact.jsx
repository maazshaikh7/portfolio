import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

function Contact(props) {
  const form = useRef();
  // Form validation using react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (!errors.firstName && !errors.lastName && !errors.email) {
      // Function to send emails via form submission using email-js.com
      const handleSend = () => {
        emailjs
          .sendForm(
            "service_xuqz0af",
            "template_u5s0ath",
            form.current,
            "4jZv-1tdn7WvNI6Gj"
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      };
      handleSend();
    }
  };

  return (
    <div
      className={`contact w-auto lg:w-2/3 h-fit ${
        props.mode === "dark" ? "text-neutral-300" : "text-neutral-900"
      } mx-auto p-10 rounded-xl m-10 duration-700`}
    >
      <h1 className="text-7xl font-bold text-center">Contact me</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={form}
        action="post"
        className="w-3/4 text-xl font-semibold mx-auto my-20 grid gap-5 grid-cols-2"
      >
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="firstName">
            First name<b className="text-red-700">*</b>
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First name"
            className="my-3 p-2 rounded-2xl w-full bg-neutral-200 active:bg-neutral-600 text-black"
            {...register("firstName", { required: true, maxLength: 10 })}
          />
          {errors.firstName && (
            <p className="text-sm text-red-700 -translate-y-1">
              *Please check your first name.
            </p>
          )}
        </div>
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="lastName">
            Last name<b className="text-red-700">*</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            id="lastName"
            className="my-3  p-2 rounded-2xl w-full bg-neutral-200 active:bg-neutral-600 text-black"
            {...register("lastName", { required: true, maxLength: 10 })}
          />
          {errors.lastName && (
            <p className=" text-sm text-red-700 -translate-y-1">
              *Please check your last name.
            </p>
          )}
        </div>
        <div className="email col-span-2">
          <label htmlFor="email">
            Email address<b className="text-red-700">*</b>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            className="my-3  p-2 rounded-2xl w-full bg-neutral-200 active:bg-neutral-600 text-black"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-700 -translate-y-1">
              *Enter a valid email.
            </p>
          )}
        </div>
        <div className="message col-span-2">
          <label htmlFor="message">Message: </label>
          <textarea
            name="message"
            placeholder="Write me a message..."
            id="message"
            className="my-3 p-2 rounded-2xl w-full max-h-fit h-40 bg-neutral-200 active:bg-neutral-600 text-black"
            {...register("message")}
          />
        </div>
        <input
          type="submit"
          value="Send"
          className="p-2 rounded-2xl w-full bg-neutral-900 col-span-2 mt-10 text-neutral-100 hover:bg-green-700 active:bg-green-400"
        />
      </form>
    </div>
  );
}

export default Contact;
