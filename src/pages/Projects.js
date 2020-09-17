import React from "react";
import Card from "../components/Card";
import projects from "../utils/projects";

export default function Projects() {
  return (
    <div>
      {projects.map(({id, title, src, description, deployed_link, repo_link}) => <Card
        key={id}
        title={title}
        image={src}
        description={description}
        deployed={deployed_link}
        repo={repo_link}
      />)}
    </div>
  );
}
