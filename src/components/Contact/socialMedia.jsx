import { Icon } from "@iconify/react";

function SocialMedia() {
  return (
    <div className="flex flex-row h-auto w-auto justify-center items-center contactSocial">
      <a href="https://www.linkedin.com/in/bandepalli-surya/" target="_blank" rel="noreferrer">
        <Icon
          icon="uiw:linkedin"
          color="#0a66c2"
          width="49"
          height="49"
          className="m-1 sm:hover:scale-110 transition-all"
        />
      </a>
      <a href="https://discordapp.com/users/787550084371578891" target="_blank" rel="noreferrer">
        <Icon
          icon="skill-icons:discord"
          color="#f54d27"
          width="60"
          height="50"
          className="sm:hover:scale-110 transition-all"
        />
      </a>
      <a href="https://twitter.com/surya_mcp" target="_blank" rel="noreferrer">
        <Icon
          icon="mdi:twitter"
          color="#1a8cd8"
          width="55"
          height="55"
          className="sm:hover:scale-110 transition-all"
        />
      </a>
    </div>
  );
}
export default SocialMedia;
