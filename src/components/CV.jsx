import React from "react";
import { Link } from "react-router-dom";

function CV() {
  return (
    <aside className="font-serif bg-gray-500 min-h-screen flex justify-center items-center">
      <div className="absolute top-10 left-10 z-10 text-center">
        <Link
          to="/"
          className="bx bx-arrow-back bg-neutral-100 rounded-full p-1 mb-2"
          font-display="swap"
        ></Link>
        <br />
        <p className="hidden sm:block text-neutral-300">Home</p>
      </div>
      <div className="absolute top-10 right-10 z-10 text-center">
        <a
          href="\assets\maaz-cv.pdf"
          download="maaz-cv"
          className="bx bx-download bg-neutral-100 rounded-full p-1 mb-2"
          font-display="swap"
        ></a>
        <br />
        <p className="hidden sm:block text-neutral-300"> Download CV</p>
      </div>
      <div className="container relative w-full max-w-5xl min-h-[1000px] m-5 xl:m-16 bg-white grid grid-cols-1 xl:grid-cols-3 shadow-2xl">
        <div className="left relative bg-neutral-800 p-10 text-neutral-100">
          <div className="profileText relative flex flex-col items-center space-y-10 pb-8 border-b-2 border-neutral-500">
            {/* <div className="imgBx relative w-48 h-48 rounded-full overflow-hidden hover:border-8 duration-300 border-neutral-300">
              <img src="\assets\avatar.webp" alt="Profile picture" />
            </div> */}
            <h2 className="text-3xl text-center my-10 font-semibold hover:tracking-wider duration-500">
              Maaz Shaikh
              <br />
              <span className="text-lg font-extralight ">Web developer</span>
            </h2>
          </div>
          <div className="contactInfo pt-16">
            <h3 className="text-xl font-semibold tracking-wider hover:tracking-widest duration-300 mb-8">
              CONTACT INFO
            </h3>
            <ul className="space-y-3 ulul text-neutral-300">
              <li>
                <i className="bx bx-phone text-md"></i>
                <span className="text">+91 740 0064 559</span>
              </li>
              <li>
                <i className="bx bxl-gmail text-md"></i>
                <span className="text">maazshaikh4559@gmail.com</span>
              </li>
              <li>
                <i className="bx bx-globe text-md"></i>
                <span className="text">www.maazshaikh.netlify.app</span>
              </li>
              <li>
                <i className="bx bxl-linkedin text-md"></i>
                <span className="text">www.linkedin.com/maazshaikh7</span>
              </li>
              <li>
                <i className="bx bx-current-location text-md"></i>
                <span className="text">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
          <div className="education pt-16">
            <h3 className="text-xl font-semibold tracking-wider hover:tracking-widest duration-300 mb-8">
              EDUCATION
            </h3>
            <ul className="space-y-3 text-neutral-300 hover:text-white group">
              <li>
                <div className="text-xs underline pb-2">
                  <p className="inline">2022-2025 </p>
                  <p className="inline-block group-hover:text-red-500">
                    &#91; Pursuing &#93;
                  </p>
                </div>
                <h4>Bachelors in Computer Applications &#91; BCA &#93;</h4>
                <h5 className="text-xs pt-1">
                  Somaiya Vidyavihar University &#91; Mumbai &#93;
                </h5>
              </li>
            </ul>
          </div>
          <div className="languages pt-16">
            <h3 className="text-xl font-semibold tracking-wider hover:tracking-widest duration-300 mb-8">
              LANGUAGES
            </h3>
            <ul className="space-y-3 text-neutral-300 hover:text-white">
              <li> English - Fluent</li>
              <li> Hindi - Native</li>
            </ul>
          </div>
          {/* <div className="interests my-10 ">
            <h2 className="text-xl font-semibold hover:tracking-wider duration-300 mb-12">
              INTERESTS
            </h2>
            <ul className="text-centerlg:w-2/3 space-y-4 text-sm">
              <li>
                <i className="bx bxs-game"></i>
                <p>GAMING</p>
              </li>
              <li>
                <i className="bx bxs-plane-alt"></i>
                <p>TRAVELLING</p>
              </li>
              <li>
                <i className="bx bx-football"></i>
                <p>FOOTBALL</p>
              </li>
              <li>
                <i className="bx bxs-book-open"></i>
                <p>READING</p>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="right relative bg-neutral-100 p-10 xl:col-span-2">
          <div className="about my-10">
            <h2 className="text-2xl font-semibold hover:tracking-widest duration-300 mb-8">
              PROFILE
            </h2>
            <p>
              I am a highly skilled and dedicated Frontend Developer residing in
              Mumbai, India. With expertise in creating visually appealing and
              user-friendly web applications, I excel in utilizing HTML, CSS ,
              JavaScript and React. <br />
              <br />
              Committed to staying updated with the latest industry trends and
              best practices, I strive to deliver high-quality results. I thrive
              in collaborative environments, working seamlessly with
              cross-functional teams and possessing excellent communication
              skills.
            </p>
          </div>
          <div className="work my-10 pt-5 space-y-5">
            <h2 className="text-2xl font-semibold hover:tracking-wider duration-300 mb-12">
              WORK EXPERIENCE
            </h2>
            <h4 className="text-2xl">
              FREELANCE
              <p className=" text-md inline-block pl-2 "> — UI developer</p>
            </h4>
            <i className="-translate-y-5">2021 , MUMBAI</i>
            <p>
              Created and managed websites using modern technologies while
              providing excellent customer service and support. <br />
              <br />
              Personally consult clients with design suggestions and hosting
              recommendations.
              <br />
              <br />
              Create and optimize UI/UX designs to increase overall aesthetic
              appearance and improve conversion rates
            </p>
          </div>
          <div className="projects my-10 pb-7 pt-5 space-y-5">
            <h2 className="text-2xl font-semibold hover:tracking-wider duration-300 mb-12">
              PROJECTS
            </h2>
            <ul className="grid gap-5 grid-cols-1 md:grid-cols-2">
              <li>
                <a
                  href="https://codeswear-ecommerce.vercel.app"
                  className="hover:text-blue-600 underline text-xl mb-3 block"
                >
                  Codeswear - Ecommerce
                </a>
                <p>
                  Codeswear is a Next.js-based eCommerce website that offers a
                  diverse range of trendy and fashionable clothing and
                  accessories <br />
                </p>
              </li>
              <li>
                <a
                  href="https://maazshaikh.netlify.app/"
                  className="hover:text-blue-600 underline text-xl mb-3 block"
                >
                  Personal Portfolio
                </a>
                <p>
                  Created and updated a personal portfolio using React and
                  tailwind-css and Vite. <br />
                </p>
              </li>
              <li>
                <a
                  href="https://shadowkeys.netlify.app"
                  className="hover:text-blue-600 underline text-xl mb-3 block"
                >
                  Shadow Keys
                </a>
                <p>
                  Made using react and typescript for practicing touch typing
                  and increasing typing speed. <br />
                </p>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-blue-600 underline text-xl mb-3 block"
                >
                  Microsoft-clone
                </a>
                <p>
                  Cloned design of microsoft website as of July 2022 using
                  tailwind-css and react <br />
                </p>
              </li>
            </ul>
          </div>
          <div className="skills my-10">
            <h2 className="text-2xl font-semibold hover:tracking-wider duration-300 mb-8">
              PROFESSIONAL SKILLS
            </h2>
            <ul className="list-disc pl-7 grid grid-cols-2">
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li>JAVASCRIPT</li>
              <li>TYPESCRIPT</li>
              <li>REACT</li>
              <li>NEXT.JS</li>
              <li>TAILWIND CSS</li>
              <li>BOOTSTRAP</li>
              <li>NODEJS</li>
              <li>GIT</li>
              <li>GITHUB</li>
              <li>JEST</li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default CV;
