import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

const landingData = {
  landingNav: {
    id: [
      {
        name: "Tentang Saya",
        link: "/about",
      },
      {
        name: "Portofolio",
        link: "/works?category=0",
      },
    ],
    en: [
      {
        name: "About Me",
        link: "/about",
      },
      {
        name: "Portfolio",
        link: "/works?category=0",
      },
    ],
  },

  sosmeds: [
    {
      name: "Instagram",
      link: "https://www.instagram.com/_sulenq/",
      icon: GithubLogo,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/fatwa-linovera-620672150/",
      icon: LinkedinLogo,
    },
    { name: "Github", link: "https://github.com/sulenq", icon: InstagramLogo },
  ],

  contact: {
    id: {
      title: "Hubungi Saya",
      cta: "Suka dengan apa yang anda lihat? Mari bekerja sama",
    },
    en: {
      title: "Contact Me",
      cta: "Like what you see? Let's work together",
    },
  },
};

export default landingData;
