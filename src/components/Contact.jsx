import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

function Contact(props) {
  const [alert, setAlert] = useState(null); // State for the alert message

  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.sendForm(
        "service_xuqz0af",
        "template_u5s0ath",
        form.current,
        "4jZv-1tdn7WvNI6Gj"
      );
      reset();
      showAlert("Message sent successfully!", "green"); // Show success alert
    } catch (error) {
      showAlert("Failed to send message", "red"); // Show error alert
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  return (
    <>
      {alert && (
        <div
          className={`${
            alert.type === "green" ? "bg-green-300" : "bg-red-300"
          } fixed -top-10 z-20 w-full bg-green-300 text-black text-center my-12 px-4 py-2 border-b-2 border-neutral-700`}
        >
          <p>{alert.msg}</p>
        </div>
      )}
      <section
        className={`contact w-auto lg:w-2/3 h-fit ${
          props.mode === "dark" ? "text-neutral-300" : "text-neutral-900"
        } mx-auto rounded-xl m-10 mt-32 duration-700 min-h-screen`}
      >
        <h1 className="text-4xl font-bold text-center">Contact me</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          ref={form}
          action="post"
          className="w-3/4 font-semibold mx-auto mt-20 mb-10 grid gap-2 grid-cols-2"
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
              className="my-2 p-2 rounded-xl w-full bg-neutral-200 active:bg-neutral-600 text-black"
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
              className="my-2  p-2 rounded-xl w-full bg-neutral-200 active:bg-neutral-600 text-black"
              {...register("lastName", { required: true, maxLength: 10 })}
            />
            {errors.lastName && (
              <p className="text-sm text-red-700 -translate-y-1">
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
              className="my-2  p-2 rounded-xl w-full bg-neutral-200 active:bg-neutral-600 text-black"
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
              className="my-2 p-2 rounded-xl w-full max-h-fit h-40 bg-neutral-200 active:bg-neutral-600 text-black"
              {...register("message")}
            />
          </div>
          <input
            type="submit"
            value="Send"
            className="p-2 rounded-2xl w-full bg-neutral-900 col-span-2 mt-10 text-neutral-100 hover:bg-green-700 active:bg-green-400"
          />
        </form>
      </section>
    </>
  );
}

export default Contact;
