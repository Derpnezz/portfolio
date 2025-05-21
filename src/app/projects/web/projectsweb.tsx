
"use client";

const SLIDESHOW_DURATION = 5000;

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import metadata from "../../../../public/data/meta.json";
import userdata from "../../../../public/data/user.json";
import TechIcon from "../../components/techicon";
import { Project } from "../../utils/interfaces";
import { standardizeName } from "../../utils/utils";
import EmptyState from "../emptystate";

const Slideshow: React.FC<{ images?: string[] }> = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, SLIDESHOW_DURATION);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative h-[250px] w-full">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Project Image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover rounded-t-md transition-opacity duration-500 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default function ProjectsWeb() {
  const { technologies } = metadata;
  const projects: Project[] = userdata.user.projects;
  const [activeTechnologies, setActiveTechnologies] = useState<string[]>(technologies);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    const newFilteredProjects = projects.filter((project) => {
      return project.techstack.some(
        (tech) =>
          activeTechnologies.includes(tech.toLowerCase()) ||
          activeTechnologies.includes(tech)
      );
    });
    setFilteredProjects(newFilteredProjects);
  }, [activeTechnologies, projects]);

  const toggleCheckbox = (tech: string) => {
    if (activeTechnologies.includes(tech)) {
      setActiveTechnologies(activeTechnologies.filter((t) => t !== tech));
    } else {
      setActiveTechnologies([...activeTechnologies, tech]);
    }
  };

  const toggleAllTechnologies = () => {
    if (activeTechnologies.length === technologies.length) {
      setActiveTechnologies([]);
    } else {
      setActiveTechnologies(technologies);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 text-secondaryLightBlue flex items-start maintain-size-x">
        <div className="flex h-full flex-wrap justify-center custom-scrollbar pt-8 w-full">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={index}
                className="flex-grow max-w-[450px] w-full md:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)] xl:w-[calc(25%-1rem)] my-4 mx-4 text-secondaryLightBlue"
              >
                <div className="text-body truncate mb-2 text-secondaryFluorescentGreen">
                  {project.name}
                </div>
                <div className="relative border border-line shadow-md bg-primaryDeepNavyBlue rounded-lg overflow-hidden">
                  <Slideshow images={project.images} />
                  <div className="text-labels p-4 text-secondaryLightBlue">
                    {project.description}
                  </div>
                  <div className="p-4 pt-0 flex justify-between items-center">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-buttonbackground py-2 px-3 rounded-md text-white transition-colors duration-300 ease-in-out hover:bg-buttonhover">
                        view-project
                      </button>
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300 ease-in-out"
                      >
                        <FaGithub className="text-white text-lg" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
}
