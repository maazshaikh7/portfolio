import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

function Contact(props) {
  const [firstName, setFirstName] = useState();

  // Alert on form submission
  let [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
      window.location.reload(false);
    }, 4000);
  };

  // Form validation using react-hook-form
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    if (!errors.firstName && !errors.lastName && !errors.email) {
      // Function to send emails via form submission using email-js.com
      const handleSend = (message, type) => {
        showAlert(message, type);
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
      handleSend("Message sent successfully!", "green");
    }
    // else if(errors.firstName || errors.lastName || errors.email){
    //   handleSend("Failed to send message", "red");
    // }
  };

  return (
    <div
      className={`contact w-auto lg:w-2/3 h-fit ${
        props.mode === "dark" ? "text-neutral-300" : "text-neutral-900"
      } mx-auto rounded-xl m-10 mt-32 duration-700 min-h-screen`}
    >
      <h1 className="text-5xl font-bold text-center">Contact me</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={form}
        action="post"
        className="w-3/4 text-lg font-semibold mx-auto mt-20 mb-10 grid gap-5 grid-cols-2"
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
