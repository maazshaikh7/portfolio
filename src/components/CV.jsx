import React from "react";
import { Link } from "react-router-dom";

function CV() {
  return (
    <div className="font-serif bg-gray-500 min-h-screen flex justify-center items-center">
      <div className="absolute top-10 left-10 z-10"><Link to="/" class='bx bx-arrow-back bg-neutral-100 rounded-full p-1'></Link></div>
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
                <i class="bx bx-phone text-lg"></i>
                <span className="text">+91 740 0064 559</span>
              </li>
              <li>
                <i class="bx bxl-gmail text-lg"></i>
                <span className="text">maazshaikh4559@gmail.com</span>
              </li>
              <li>
                <i class="bx bx-globe text-lg"></i>
                <span className="text">www.maazshaikh.com</span>
              </li>
              <li>
                <i class="bx bxl-linkedin text-lg"></i>
                {/* TODO */}
                <span className="text">www.linkedin.com/</span>
              </li>
              <li>
                <i class="bx bx-current-location text-lg"></i>
                <span className="text">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
          <div className="education pt-16">
            <h3 className="text-2xl font-semibold tracking-wider hover:tracking-widest duration-300 mb-8">
              EDUCATION
            </h3>
            <ul className="space-y-3 text-neutral-300 hover:text-white">
              <li>
                <p className="text-xs underline pb-2">2022-2025</p>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              odit temporibus molestias impedit aut iusto praesentium
              consequuntur ex consequatur dolores culpa.
              <br />
              <br /> Repudiandae libero ipsa dolore voluptates quas ipsam
              adipisci placeat maxime minima est neque? Dignissimos harum
              consequatur explicabo recusandae numquam tenetur quos modi
              voluptatem aut eligendi. Nobis numquam aliquid iusto neque
              suscipit!
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
            <Link to="/contact" className="block text-blue-500 text-lg hover:underline hover:font-semibold">Add work +</Link>
          </div>
          <div className="skills my-10">
            <h2 className="text-3xl font-semibold hover:tracking-wider duration-300 mb-8">
              PROFESSIONAL SKILLS
            </h2>
            <ul className="list-disc pl-7">
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li>JAVASCRIPT</li>
              <li>REACT JS</li>
              <li>TAILWIND CSS</li>
              <li>BOOTSTRAP</li>
            </ul>
          </div>
          <div className="interests my-10 ">
            <h2 className="text-3xl font-semibold hover:tracking-wider duration-300 mb-12">
              INTERESTS
            </h2>
            <ul className="flex justify-between flex-wrap text-center lg:w-2/3">
              <li>
                <i class="bx bxs-game"></i>
                <p>GAMING</p>
              </li>
              <li>
                <i class="bx bxs-plane-alt"></i>
                <p>TRAVELLING</p>
              </li>
              <li>
                <i class="bx bx-football"></i>
                <p>FOOTBALL</p>
              </li>
              <li>
                <i class="bx bxs-book-open"></i>
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
