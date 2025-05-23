
"use client";

const SLIDESHOW_DURATION = 5000;

import { Checkbox, IconButton, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { FaCaretDown, FaGithub } from "react-icons/fa";
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
    <div className="relative h-[150px] w-full">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Project Image ${index + 1}`}
          style={{ width: '100%', height: '100%' }}
          className={`absolute top-0 left-0 w-full h-full object-contain rounded-t-md transition-opacity duration-500 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default function ProjectsMobile() {
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

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="flex flex-col h-full">
      <div className="h-[40px] flex items-center justify-between border-b border-line px-4">
        <div className="flex-vertical-center">
          <span className="text-white">Projects</span>
        </div>
        {/*
        <IconButton className="pr-3 border-l border-line" onClick={handleClick}>
          <FaCaretDown className="text-xl text-white" />
        </IconButton>
        */}
      </div>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              width: 250,
              maxHeight: 400,
              backgroundColor: "#01080E",
              color: "#FFFFFF",
            },
          },
        }}
      >
        <MenuItem onClick={toggleAllTechnologies}>
          <Checkbox
            checked={activeTechnologies.length === technologies.length}
            onChange={toggleAllTechnologies}
            style={{
              color: "#43D9AD",
            }}
          />
          <span className="ml-2">
            {activeTechnologies.length === technologies.length
              ? "Clear all"
              : "Select all"}
          </span>
        </MenuItem>
        {technologies.map((tech, index) => (
          <MenuItem key={index} onClick={() => toggleCheckbox(tech)}>
            <Checkbox
              checked={activeTechnologies.includes(tech)}
              onChange={() => toggleCheckbox(tech)}
              style={{
                color: "#43D9AD",
              }}
            />
            <TechIcon tech={tech} />
            <span className="ml-2">{standardizeName(tech)}</span>
          </MenuItem>
        ))}
      </Menu>

      <div className="flex-1 overflow-y-auto py-4 px-4 custom-scrollbar">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={index} className="my-4 w-full text-secondaryLightBlue">
              <div className="text-body truncate mb-2 text-secondaryFluorescentGreen">
                {project.name}
              </div>
              <div className="border border-line shadow-md bg-primaryDeepNavyBlue rounded-lg flex flex-col max-h-[400px]">
                <Slideshow images={project.images} />
                <div className="text-labels mx-4 mt-2 truncate-5">
                  {project.description}
                </div>
                <div className="flex justify-between items-center mx-4 my-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[150px]"
                  >
                    <button
                      className="w-full bg-buttonbackground py-2 px-3 rounded-md text-white
                      transition-colors duration-300 ease-in-out
                      hover:bg-buttonhover"
                    >
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
  );
}
