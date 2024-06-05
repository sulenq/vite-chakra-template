import {
  RiGlobalLine,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";

const memberData = [
  {
    name: "Bayu Prasetya Adji Sugiyarto",
    image: "/images/about/members/bayu.png",
    role: "UI/UX Designer",
    sosmeds: [
      {
        label: "LinkedIn",
        icon: RiLinkedinBoxFill,
        link: "https://www.linkedin.com/in/bayuprasetyaadjisugiyarto/",
      },
      {
        label: "Instagram",
        icon: RiInstagramFill,
        link: "https://www.instagram.com/prst.b.y/",
      },
    ],
    narrative:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    quote: {
      id: "Percayalah pada diri sendiri, hadapi tantangan Anda",
      en: "Believe in yourself, take on your challenges",
    },
  },
  {
    name: "Fatwa Linovera",
    image: "/images/about/members/sulenq.png",
    role: "Frontend Developer",
    sosmeds: [
      {
        label: "LinkedIn",
        icon: RiLinkedinBoxFill,
        link: "https://www.linkedin.com/in/fatwa-linovera-620672150/",
      },
      // {
      //   label: "Instagram",
      //   icon: RiInstagramFill,
      //   link: "https://www.instagram.com/_sulenq/",
      // },
      {
        label: "Website",
        icon: RiGlobalLine,
        link: "https://fatwalinovera.netlify.app/",
      },
    ],
    narrative:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    quote: {
      id: "Satu-satunya kebijaksanaan sejati adalah mengetahui bahwa Anda tidak tahu apa-apa",
      en: "The only true wisdom is in knowing you know nothing",
    },
  },
  {
    name: "Reza Hashfi Hawari",
    image: "/images/about/members/reza.png",
    role: "Backend Developer",
    sosmeds: [
      {
        label: "LinkedIn",
        icon: RiLinkedinBoxFill,
        link: "https://www.linkedin.com/in/reza-hashfi-hawari-b80549202/",
      },
      {
        label: "Instagram",
        icon: RiInstagramFill,
        link: "https://www.instagram.com/rezahhawari/",
      },
    ],
    narrative:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    quote: {
      id: "Jatuh bukanlah suatu kegagalan. Kegagalan datang ketika Anda tetap berada di tempat Anda terjatuh.",
      en: "Faling down is not a failure. Failure comes when you stay where you have fallen.",
    },
  },
];

export default memberData;
