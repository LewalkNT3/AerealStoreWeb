import React from "react";

function FooterSection() {
  return (
    <footer className="bg-gray-900 p-5 mt-10">
      <div className="">
        <ul className="flex flex-row gap-5 items-center justify-center">
          <li>
            <a href="#">
              <img className="w-7 h-auto" src="/facebooklogo.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="w-5 h-5" src="/TwitterLogo.ico" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="w-5 h-5" src="/IGLogo.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterSection;
