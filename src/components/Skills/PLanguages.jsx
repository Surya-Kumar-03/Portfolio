import React from "react";
import { Icon } from "@iconify/react";

function PLanguages() {
  return (
    <div className="flex flex-row h-auto w-auto justify-center items-center">
      <Icon icon="vscode-icons:file-type-cpp3" width="70" height="70" className="animatePLs"/>
      <Icon icon="logos:c" width="65" height="65" className="animatePLs"/>
      <Icon icon="skill-icons:javascript" width="55" height="55" className="m-2 animatePLs"/> 
      <Icon icon="logos:python" width="50" height="50" className="animatePLs"/>   
    </div>
  );
}

export default PLanguages;
