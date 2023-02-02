import React from "react";
import { Icon } from "@iconify/react";

function PLanguages() {
  return (
    <div className="flex flex-row h-auto w-auto justify-center items-center">
      <Icon icon="vscode-icons:file-type-cpp3" width="65" height="70" className="sm:hover:scale-110 transition-all"/>
      <Icon icon="logos:c" width="51" height="65" className="sm:hover:scale-110 transition-all"/>
      <Icon icon="skill-icons:javascript" width="52" height="55" className="mx-[0.35rem] sm:hover:scale-110 transition-all"/> 
      <Icon icon="logos:python" width="45" height="50" className="sm:hover:scale-110 transition-all"/>   
    </div>
  );
}

export default PLanguages;
