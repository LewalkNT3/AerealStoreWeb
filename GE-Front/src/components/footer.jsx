import React from "react";

function FooterSection() {
  return (
    <footer className="bg-gray-950 p-5 mt-10">
      <div className="">
        <ul className="flex flex-row gap-5 items-center justify-center">
          <li>
            <a href="#">
              <img
                className="w-7 h-auto"
                src="/facebooklogo.png"
                alt="logo facebook footer"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="w-5 h-5"
                src="/TwitterLogo.ico"
                alt="logo twitter footer"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/aereal.store/">
              <img
                className="w-5 h-5"
                src="/IGLogo.png"
                alt="logo instagram footer"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterSection;
