import React from "react";
import userdata from "../../../../../public/data/user.json";
import Folder from "../../../components/folder";
import { useRouter } from "next/navigation";
import { useOpenedFiles } from "../../../contexts/filestackcontext";

interface SidebarProps {
  isOpen: boolean; // Add isOpen prop to the interface
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const router = useRouter();
  const { openFile } = useOpenedFiles();

  const educationFiles = userdata.user.education.map((edu, index) => ({
    text: edu.title,
    onTap: () => {
      openFile(`/about/education/${edu.title}`);
      router.push(`/about/education/${edu.title}`);
    },
  }));

  const workFiles = userdata.user.work.map((work, index) => ({
    text: work.company,
    onTap: () => {
      openFile(`/about/work/${work.company}`);
      router.push(`/about/work/${work.company}`);
    },
  }));

  const hobbyFiles = userdata.user.hobbies.map((hobby, index) => ({
    text: hobby.title,
    onTap: () => {
      openFile(`/about/hobbies/${hobby.title}`);
      router.push(`/about/hobbies/${hobby.title}`);
    },
  }))

  if (!isOpen) return null; // Optionally hide the sidebar based on isOpen

  return (
    <div className="h-full">
      <div className="pt-2"></div>
      { // DON'T FORGET TO ADD THESE BACK WHEN NEEDED
      }
      {//<Folder color="#FEA55F" name="education" files={educationFiles} />
      }
      {//<Folder color="#43D9AD" name="work" files={workFiles} />
      }
      {
      //<Folder color="#991dd0" name="hobbies" files={hobbyFiles} />
        }
      
    </div>
  );
};

export default Sidebar;