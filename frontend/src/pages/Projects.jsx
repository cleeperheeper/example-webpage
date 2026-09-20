import ProjectCard from "../components/ProjectCard";
import { useState } from "react";

function Projects() {
    const [searchQuery, setSearchQuery] = useState("")

  const projects = [
    { id: 1, title: "Three.js Website project", timeline: "2025-2026" },
    { id: 2, title: "Sword render", timeline: "2025" },
    { id: 3, title: "This project", timeline: "2026-current" },
  ];

  const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery);
  };

  return (
    <div className="projects-page">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for projects: "
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div projects-grid>
        {projects.map((project) => (
          project.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <ProjectCard info={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
