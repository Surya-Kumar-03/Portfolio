import React from "react";
import { Icon } from "@iconify/react";

function PLanguages() {
  return (
    <div className="flex flex-row h-auto w-auto justify-center items-center scale-95">
      <Icon
        icon="skill-icons:cpp"
        width="60"
        height="52.5"
        className="sm:hover:scale-110 transition-all mr-[0.2rem]"
      />
      <Icon
        icon="skill-icons:c"
        width="51"
        height="65"
        className="sm:hover:scale-110 transition-all mr-2"
      />
      <Icon
        icon="skill-icons:javascript"
        width="52"
        height="55"
        className="mr-2 sm:hover:scale-110 transition-all"
      />
      <Icon
        icon="vscode-icons:file-type-csharp2"
        width="60"
        height="60"
        className="sm:hover:scale-110 transition-all"
      />
      <Icon
        icon="logos:python"
        width="45"
        height="50"
        className="sm:hover:scale-110 transition-all"
      />
    </div>
  );
}

export default PLanguages;
