import React from "react";
import ProfilePic from "../components/ProfilePic";
import Introduction from "../components/Introduction";
import Link from "../components/Link";
import GithubIcon from "../stuff/Github_Icons/GitHub-Mark-64px.png";
import LinkedInIcon from "../stuff/linkedIn_Icon.png";
import DownloadResume from "../stuff/downloadResume.png";
import MyResume from "../stuff/WesleyResume.pdf";

export default function About() {
  return (
    <div>
      <ProfilePic />
      <Introduction />
      <Link link="https://github.com/wesaboo">
        <img src={GithubIcon} alt="Github" /> Github
      </Link>
      <Link link="https://github.com/wesaboo">
        <img src={LinkedInIcon} alt="LinkedIn" /> LinkedIn
      </Link>
      <a href={MyResume} download>
        <img src={DownloadResume} alt="Resume_Download" /> Resume
      </a>
    </div>
  );
}
