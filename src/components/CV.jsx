import React from "react";
import { Link } from "react-router-dom";

function CV() {
  return (
    <div className="font-serif bg-gray-500 min-h-screen flex justify-center items-center">
      <div className="absolute top-10 left-10 z-10 text-center">
        <Link
          to="/"
          className="bx bx-arrow-back bg-neutral-100 rounded-full p-1 mb-2"
        ></Link>
        <br />
        <p className="hidden sm:block text-neutral-300">Home</p>
      </div>
      <div className="absolute top-10 right-10 z-10 text-center">
        {/* *** ADD CV PDF USING PRINT WEBSITE*** */}
        <a
          href="src\assets\cv.pdf"
          download={"maaz-cv"}
          className="bx bx-download bg-neutral-100 rounded-full p-1 mb-2"
        ></a>
        <br />
        <p className="hidden sm:block text-neutral-300"> Download CV</p>
      </div>
      <div className="container relative w-full max-w-5xl min-h-[1000px] m-5 xl:m-16 bg-white grid grid-cols-1 xl:grid-cols-3 shadow-2xl">
        <div className="left relative bg-neutral-800 p-10 text-neutral-100">
          <div className="profileText relative flex flex-col items-center space-y-10 pb-8 border-b-2 border-neutral-500">
            <div className="imgBx relative w-48 h-48 rounded-full overflow-hidden hover:border-8 duration-300 border-neutral-300">
              <img src="src\assets\avatar.webp" alt="Profile picture" />
            </div>
            <h2 className="text-4xl text-center font-semibold hover:tracking-wider duration-500">
              Maaz Shaikh
              <br />
              <span className="text-xl font-extralight ">Web developer</span>
            </h2>
          </div>
          <div className="contactInfo pt-16">
            <h3 className="text-2xl font-semibold tracking-wider hover:tracking-widest duration-300 mb-8">
              CONTACT INFO
            </h3>
            <ul className="space-y-3 ulul text-neutral-300">
              <li>
                <i className="bx bx-phone text-lg"></i>
                <span className="text">+91 740 0064 559</span>
              </li>
              <li>
                <i className="bx bxl-gmail text-lg"></i>
                <span className="text">maazshaikh4559@gmail.com</span>
              </li>
              <li>
                <i className="bx bx-globe text-lg"></i>
                <span className="text">www.maazshaikh.com</span>
              </li>
              <li>
                <i className="bx bxl-linkedin text-lg"></i>
                {/* TODO */}
                <span className="text">www.linkedin.com/</span>
              </li>
              <li>
                <i className="bx bx-current-location text-lg"></i>
                <span className="text">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
          <div className="education pt-16">
            <h3 className="text-2xl font-semibold tracking-wider hover:tracking-widest duration-300 mb-8">
              EDUCATION
            </h3>
            <ul className="space-y-3 text-neutral-300 hover:text-white group">
              <li>
                <div className="text-xs underline pb-2">
                  <p className="inline">2022-2025 </p>
                  <p className="inline-block group-hover:text-red-500"> &#91; Pursuing &#93;</p>
                </div>
                <h4>Bachelors in Computer Applications &#91; BCA &#93;</h4>
                <h5 className="text-xs pt-1">
                  Somaiya Vidyavihar University &#91; Mumbai &#93;
                </h5>
              </li>
            </ul>
          </div>
          <div className="languages pt-16">
            <h3 className="text-2xl font-semibold tracking-wider hover:tracking-widest duration-300 mb-8">
              LANGUAGES
            </h3>
            <ul className="space-y-3 text-neutral-300 hover:text-white">
              <li> English - Fluent</li>
              <li> Hindi - Native</li>
            </ul>
          </div>
        </div>
        <div className="right relative bg-neutral-100 p-10 xl:col-span-2">
          <div className="about my-10">
            <h2 className="text-3xl font-semibold hover:tracking-widest duration-300 mb-8">
              PROFILE
            </h2>
            <p>
            I am a self taught frontend engineer based in Mumbai, India. Over the
          past year, I have worked on personal and corporate projects using CSS
          frameworks, react and my photoshop skills. I am always eager to learn
          new skills and up for challenges!! I can bring innovative ideas to web
          development and contribute to building a strong team bond and a
          healthy working envoirnment.
            </p>
          </div>
          <div className="work my-10 pt-5 space-y-5">
            <h2 className="text-3xl font-semibold hover:tracking-wider duration-300 mb-12">
              WORK EXPERIENCE
            </h2>
            <h4 className="text-2xl">Work 1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              soluta reiciendis cum fugit minima assumenda ad architecto dolorum
              dolor. Necessitatibus aliquam accusantium blanditiis similique
              molestiae, laborum eveniet dolorem exercitationem doloremque
              magnam. Praesentium, qui dolores!
            </p>
            <h4 className="text-2xl">Work 2</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              soluta reiciendis cum fugit minima assumenda ad architecto dolorum
              dolor. Necessitatibus aliquam accusantium blanditiis similique
              molestiae, laborum eveniet dolorem exercitationem doloremque
              magnam. Praesentium, qui dolores!
            </p>
            <h4 className="text-2xl">Work 3</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              soluta reiciendis cum fugit minima assumenda ad architecto dolorum
              dolor. Necessitatibus aliquam accusantium blanditiis similique
              molestiae, laborum eveniet dolorem exercitationem doloremque
              magnam. Praesentium, qui dolores!
            </p>
            <Link
              to="/contact"
              className="block text-blue-500 text-lg hover:underline hover:font-semibold"
            >
              Add work +
            </Link>
          </div>
          <div className="skills my-10">
            <h2 className="text-3xl font-semibold hover:tracking-wider duration-300 mb-8">
              PROFESSIONAL SKILLS
            </h2>
            <ul className="list-disc pl-7 grid grid-cols-2">
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li>JAVASCRIPT</li>
              <li>REACT JS</li>
              <li>TAILWIND CSS</li>
              <li>BOOTSTRAP</li>
              <li>GIT</li>
              <li>GITHUB</li>
            </ul>
          </div>
          <div className="interests my-10 ">
            <h2 className="text-3xl font-semibold hover:tracking-wider duration-300 mb-12">
              INTERESTS
            </h2>
            <ul className="flex justify-between flex-wrap text-center lg:w-2/3">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
