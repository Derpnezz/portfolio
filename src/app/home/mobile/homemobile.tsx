"use client";
import userdata from "../../../../public/data/user.json";
import AnimatedText from "../../components/animatedtext/animatedtext";
import "./homemobile.css";

export default function HomeMobile() {
  return (
    <div className="h-full flex flex-col items-center pt-32 p-4 home-bg  text-left flex-grow">
      <div className="w-full p-4 text-white">
        <p className="text-body">Hey there! I'm</p>
        <h1 className="text-headline font-regular leading-tight">
          {userdata.user.name}
        </h1>
        <h4 className="text-accentOrange text-[1.5em] mb-2">
          <AnimatedText />
        </h4>

        <div className="text-secondaryLightBlue font-labels">
          &#47;&#47; Want to support me through a donation?
        </div>
        {/*
        <div className="font-labels mb-2">
          <span className="text-secondaryBrightPurple">const</span>{" "}
          <span className="text-accentBrightGreen">codeLink</span> ={" "}
          <a
            href="https://github.com/Derpnezz/portfolio"
            className="text-accentOrange underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Derpnezz/portfolio
          </a>
        </div>
        */}
        <div className="font-labels">
          {" "}
          <span className="text-secondaryBrightPurple">const</span>{" "}
          <span className="text-accentBrightGreen"> supportMe</span> ={" "}
          <a
            href="https://donate.gabyee.dev"
            className="text-accentOrange underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://donate.gabyee.dev
          </a>
        </div>
      </div>
    </div>
  );
}
