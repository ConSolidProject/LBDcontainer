import React from "react";
import ProjectSetup from "./components/ProjectSetup";


const Plugin = ({ session, project, setProject, history }) => {
  return (
    <div>
      <ProjectSetup session={session} />
    </div>
  );
};

export default Plugin;
