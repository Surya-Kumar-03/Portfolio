import { Icon } from "@iconify/react";

function CloudPlatforms() {
  return (
    <div className="flex flex-row h-auto w-auto justify-center items-center">
      <Icon
        icon="logos:google-cloud"
        width="55"
        height="55"
        className="sm:hover:scale-110 transition-all"
      />
      <Icon
        icon="logos:docker-icon"
        width="55"
        height="55"
        className="sm:hover:scale-110 ml-2 transition-all"
      />
      <Icon
        icon="logos:kubernetes"
        width="50"
        height="50"
        className="sm:hover:scale-110 ml-2 transition-all"
      />
      <Icon
        icon="logos:heroku-icon"
        width="45"
        height="45"
        className="m-1 mr-0 sm:hover:scale-110 transition-all"
      />
      <Icon
        icon="vscode-icons:file-type-netlify"
        width="55"
        height="55"
        className="sm:hover:scale-110 transition-all"
      />
    </div>
  );
}

export default CloudPlatforms;
