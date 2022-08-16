import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact(props) {
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
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
  return (
    <div
      className={`contact w-auto lg:w-2/3 h-fit ${
        props.mode === "dark" ? "text-neutral-300" : "text-neutral-900"
      } mx-auto p-10 rounded-xl m-10 duration-700`}
    >
      <h1 className="text-7xl font-bold text-center">Contact me</h1>
      <form
        ref={form}
        action="post"
        className="w-3/4 text-xl font-semibold mx-auto my-20 grid gap-5 grid-cols-2"
      >
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="firstName">First name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="my-3 p-2 rounded-2xl w-full bg-neutral-200 active:bg-neutral-600 text-black"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="lastName">Last name: </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="my-3  p-2 rounded-2xl w-full bg-neutral-200 active:bg-neutral-600 text-black"
          />
        </div>
        <div className="email col-span-2">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="my-3  p-2 rounded-2xl w-full bg-neutral-200 active:bg-neutral-600 text-black"
          />
        </div>
        <div className="message col-span-2">
          <label htmlFor="message">Message: </label>
          <textarea
            name="message"
            id="message"
            className="my-3 p-2 rounded-2xl w-full max-h-fit h-40 bg-neutral-200 active:bg-neutral-600 text-black"
          />
        </div>
        <input
          type="submit"
          value="Send"
          onClick={onSubmit}
          className="p-2 rounded-2xl w-full bg-neutral-900 col-span-2 mt-10 text-neutral-100 hover:bg-green-700 active:bg-green-400"
        />
      </form>
    </div>
  );
}

export default Contact;
