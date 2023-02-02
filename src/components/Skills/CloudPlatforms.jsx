import { Icon } from "@iconify/react";

function CloudPlatforms() {
  return (
    <div className="flex flex-row h-auto w-auto justify-center items-center">
      <Icon icon="logos:google-cloud" width="60" height="60" className="sm:hover:scale-110 transition-all"/>
      <Icon
        icon="logos:heroku-icon"
        width="50"
        height="50"
        className="m-1 mr-0 sm:hover:scale-110 transition-all"
      />
      <Icon icon="vscode-icons:file-type-netlify" width="60" height="60" className="sm:hover:scale-110 transition-all"/>
    </div>
  );
}

export default CloudPlatforms;
