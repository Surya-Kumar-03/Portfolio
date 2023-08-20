import { Icon } from "@iconify/react";

function DevTools() {
  return (
    <div className="flex flex-row h-auto w-auto justify-center items-center">
      <Icon
        icon="mdi:git"
        color="#f54d27"
        width="60"
        height="60"
        className="sm:hover:scale-110 transition-all"
      />
      <Icon
        icon="ion:logo-github"
        width="55"
        height="55"
        className="sm:hover:scale-110 transition-all"
      />
      <Icon
        icon="logos:gitlab"
        width="50"
        height="50"
        className="sm:hover:scale-110 ml-1 mr-1 transition-all"
      />
      <Icon
        icon="logos:visual-studio-code"
        width="45"
        height="45"
        className="m-1 sm:hover:scale-110 transition-all"
      />
      <Icon
        icon="logos:visual-studio"
        width="45"
        height="45"
        className="mx-2 sm:hover:scale-110 transition-all"
      />
      <Icon
        icon="cib:canva"
        color="#1d95da"
        width="48"
        height="48"
        className="m-1 sm:hover:scale-110 transition-all"
      />
    </div>
  );
}
export default DevTools;
