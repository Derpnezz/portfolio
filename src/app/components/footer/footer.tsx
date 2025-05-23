import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
{/* https://react-icons.github.io/react-icons/ */}
import userdata from "../../../../public/data/user.json";

const Footer: React.FC = () => {
  const user = userdata.user;
  const socials = user.socials;

  const findSocialLink = (name: string) =>
    socials.find((social) => social.name.toLowerCase() === name.toLowerCase())
      ?.link;

  const devpostLink = findSocialLink("devpost");
  const linkedinLink = findSocialLink("linkedin");
  const githubLink = findSocialLink("github");
  const discordLink = findSocialLink("discord");
  const githubUsername = githubLink.split(".com/")[1];

  return (
    <footer className="bg-primaryLightNavyBlue text-secondaryLightBlue h-12 flex items-center justify-between border-t border-line rounded-lg">
      <div className="flex-vertical-center">
        <div className="px-[22px] border-r border-line flex-vertical-center">
          find me on :
        </div>

        {linkedinLink && (
          <div className="border-r border-line flex-vertical-center">
            <a href={linkedinLink} target="_blank" className="group h-full">
              <div className="h-full border-r border-line flex-vertical-center px-[14px] group-hover:bg-gray-700 transition-all duration-300 cursor-pointer">
                <FaLinkedin
                  className="text-secondaryLightBlue group-hover:text-secondaryFluorescentGreen transition-colors duration-300"
                  size={20}
                />
              </div>
            </a>
          </div>
        )}

        {devpostLink && (
          <div className="border-r border-line flex-vertical-center">
            <a href={devpostLink} target="_blank" className="group h-full">
              <div className="h-full border-r border-line flex-vertical-center px-[14px] group-hover:bg-gray-700 transition-all duration-300 cursor-pointer">
                <SiDevpost
                  className="text-secondaryLightBlue group-hover:text-secondaryFluorescentGreen transition-colors duration-300"
                  size={20}
                />
              </div>
            </a>
          </div>
        )}

        {discordLink && (
          <div className="border-r border-line flex-vertical-center">
            <a href={discordLink} target="_blank" className="group h-full">
              <div className="h-full border-r border-line flex-vertical-center px-[14px] group-hover:bg-gray-700 transition-all duration-300 cursor-pointer">
                <FaDiscord
                  className="text-secondaryLightBlue group-hover:text-secondaryFluorescentGreen transition-colors duration-300"
                  size={20}
                />
              </div>
            </a>
          </div>
        )}
      </div>

      {/*
      <div className="flex-center-items">
        <span>
          Made with <span className="text-red">♥</span> by Gab
        </span>
      </div>
      */}

      {githubLink && (
        <div className="flex-center-items">
          <a href={githubLink} target="_blank" className="group h-full">
            <div className="h-full px-[14px] flex-vertical-center group-hover:bg-gray-700 group-hover:text-secondaryFluorescentGreen transition-all duration-300 cursor-pointer">
              <span className="mr-2">@{githubUsername}</span>
              <FaGithub />
            </div>
          </a>
        </div>
      )}
    </footer>
  );
};

export default Footer;
