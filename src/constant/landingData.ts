import {
  RiBuilding4Line,
  RiComputerLine,
  RiEmotionLaughFill,
  RiHourglass2Fill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiSmartphoneLine,
  RiTeamFill,
  RiVerifiedBadgeFill,
  RiWhatsappFill,
} from "@remixicon/react";
import memberData from "./memberData";
import worksData from "./worksData";

const initialDate = new Date("2022-01-01");
const today = new Date();

let yearDifference = today.getFullYear() - initialDate.getFullYear();

// Adjust for if the current date is before the anniversary in the current year
if (
  today.getMonth() < initialDate.getMonth() ||
  (today.getMonth() === initialDate.getMonth() &&
    today.getDate() < initialDate.getDate())
) {
  yearDifference--;
}

const landingData = {
  landingNav: {
    id: [
      {
        name: "Beranda",
        link: "/",
      },
      {
        name: "Layanan",
        link: "/services",
      },
      {
        name: "Portofolio",
        link: "/works?search=&category=0",
      },
      {
        name: "Tentang Kami",
        link: "/about",
      },
      {
        name: "FAQs",
        link: "/faqs",
      },
    ],
    en: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Services",
        link: "/services",
      },
      {
        name: "Portfolio",
        link: "/works?search=&category=0",
      },
      {
        name: "About Us",
        link: "/about",
      },
      {
        name: "FAQs",
        link: "/faqs",
      },
    ],
  },

  hero: {
    id: {
      tagline: "Kita adalah tim yang solid",
      headline: "Angkat Ide Menuju Digital yang Cemerlang",
      narrative:
        "Distro Studio mengubah konsep Anda menjadi pengalaman digital yang luar biasa melalui solusi yang inovatif dan tetap relevan dengan perkembangan zaman.",
      vision:
        "Menjadi software agency yang unggul dalam menyediakan solusi digital yang cerdas, efisien, dan efektif untuk meningkatkan produktivitas dan kinerja pelanggan",
      mission: [
        "Untuk menyediakan solusi digital yang inovatif dan efisien yang meningkatkan produktivitas pelanggan",
        "Untuk terus meningkatkan kemampuan perangkat lunak kami untuk memenuhi kebutuhan pelanggan yang terus berkembang",
        "Untuk menumbuhkan budaya keunggulan dan inovasi dalam agensi kami",
      ],
      contactUs: {
        link: "#contact",
        label: "Hubungi Kami",
      },
      letsTalk: {
        link: "#contact",
        label: "Konsultasi Sekarang",
      },
    },
    en: {
      tagline: "We are solid team",
      headline: "Elevating Ideas Into Digital Brilliance",
      narrative:
        "Distro Studio turns your concept into an extraordinary digital experience through solutions that are innovative and remain relevant to the times.",
      vision:
        "To become a software agency that excels in providing smart, efficient and effective digital solutions to increase customer productivity and performance",
      mission: [
        "To deliver innovative and efficient digital solutions that enhance customer productivity",
        "To continuously improve our software capabilities to meet the evolving needs of our customers",
        "To foster a culture of excellence and innovation within our agency",
      ],
      contactUs: {
        link: "#contact",
        label: "Contact Us",
      },
      letsTalk: {
        link: "#contact",
        label: "Consult Now",
      },
    },
  },

  sosmeds: [
    {
      name: "Whatsappp",
      icon: RiWhatsappFill,
      link: "https://wa.me/+6283836444099",
    },
    {
      name: "Instagram",
      icon: RiInstagramFill,
      link: "https://www.instagram.com/distrostudio_/",
    },
    {
      name: "LinkedIn",
      icon: RiLinkedinBoxFill,
      link: "https://www.linkedin.com/company/distro-studio/",
    },
  ],

  stats: {
    id: [
      {
        icon: RiVerifiedBadgeFill,
        name: "Proyek Selesai",
        value: worksData.id.length,
      },
      {
        icon: RiHourglass2Fill,
        name: "Tahun Pengalaman",
        value: `${yearDifference}+`,
      },
      {
        icon: RiEmotionLaughFill,
        name: "Klien Puas Hati",
        value: 4,
      },
      { icon: RiTeamFill, name: "Tim Ahli", value: memberData.length },
    ],
    en: [
      {
        icon: RiVerifiedBadgeFill,
        name: "Projects Finished",
        value: worksData.id.length,
      },
      {
        icon: RiHourglass2Fill,
        name: "Years of Experience",
        value: `${yearDifference}+`,
      },
      {
        icon: RiEmotionLaughFill,
        name: "Clients Satisfied",
        value: 4,
      },
      { icon: RiTeamFill, name: "Expert Team", value: memberData.length },
    ],
  },

  services: {
    id: {
      detail: "Lihat detail",
      nav: "Layanan",
      title: "Apa yang Kami Bantu?",
      servicesItem: [
        {
          icon: RiBuilding4Line,
          title: "Company Profile/Landing Page",
          image: "/images/services/compro.jpg",
          narrative:
            "Buat situs profil perusahaan yang dinamis untuk pengalaman pengguna yang lancar dan menarik dengan penyampaian informasi yang mudah",
          detailLink: "/services?section=0",
        },
        {
          icon: RiComputerLine,
          title: "Web and Web App Development",
          image: "/images/services/webapp.jpg",
          narrative:
            "Bangun aplikasi bisnis Anda dengan pakar UX & UI kami yang fokus pada peningkatan pengalaman pengguna",
          detailLink: "/services?section=1",
        },
        {
          icon: RiSmartphoneLine,
          title: "Cross Platform Mobile App Development",
          image: "/images/services/mobile.jpg",
          narrative:
            "Buat situs profil perusahaan yang dinamis untuk pengalaman pengguna yang lancar dan menarik dengan penyampaian informasi yang mudah",
          detailLink: "/services?section=2",
        },
      ],
    },
    en: {
      detail: "View detail",
      nav: "Services",
      title: "What Do We Help?",
      servicesItem: [
        {
          icon: RiBuilding4Line,
          title: "Company Profile/Landing Page",
          image: "/images/services/compro.jpg",
          narrative:
            "Create and develop your website to provide useful information while providing a great experience when accessed",
          detailLink: "/services?section=0",
        },
        {
          icon: RiComputerLine,
          title: "Web and Web App Development",
          image: "/images/services/webapp.jpg",
          narrative:
            "Build your business app with our UX & UI specialists who focus on improving user experience",
          detailLink: "/services?section=1",
        },
        {
          icon: RiSmartphoneLine,
          title: "Cross Platform Mobile App Development",
          image: "/images/services/mobile.jpg",
          narrative:
            "Create a dynamic company profile site for a seamless, engaging user experience with effortless information delivery",
          detailLink: "/services?section=2",
        },
      ],
    },
  },

  works: {
    content: {
      id: {
        nav: "Portofolio",
        title: "Karya Terbaru Kami",
        otherWorks: {
          link: "",
          label: "Lihat Lainnya",
        },
        viewDetail: "Lihat Detail",
      },
      en: {
        nav: "Portfolio",
        title: "Our Latest Works",
        otherWorks: {
          link: "",
          label: "View Other",
        },
        viewDetail: "View Detail",
      },
    },
    worksItem: worksData,
  },

  quality: {
    id: {
      title: "Pada Akhirnya Kualitas Lah yang Berbicara",
      narrative:
        "Distro Studio menunjukkan komitmen yang teguh terhadap keunggulan dalam setiap hasil karya digital yang dibuat.",
    },
    en: {
      title: "In The End it is Quality That Speaks",
      narrative:
        "Distro Studio shows an unwavering commitment to excellence in every piece of digital work.",
    },
  },

  about: {
    id: {
      nav: "Tentang Kami",
      title: "Mengapa Memilih Kami",
      narrative: {
        title: "Kenali Kami Lebih Dekat",
        content: "Cari tau profil dari anggota kami, cara kami bekerja, dll",
      },
      ourMember: {
        label: "Cari Tahu",
      },
      items: [],
    },
    en: {
      nav: "About Us",
      title: "Why Choose Us",
      narrative: {
        title: "Get to Know Us Better",
        content: "Find out the profiles of our members, how we work, etc",
      },
      ourMember: {
        label: "Find Out",
      },
      items: [],
    },
  },

  clients: {
    id: {
      title: "Brand Percaya Kami",
      subtitle: "Setiap klien menunjukkan babak berbeda dalam cerita kami.",
      items: [
        {
          name: "RSKI",
          logo: "/images/clients/rski.png",
        },
        {
          name: "Poltekkes Semarang",
          logo: "/images/clients/poltekkes.png",
        },
        {
          name: "BPJS Kesehatan",
          logo: "/images/clients/bpjs.png",
        },
        {
          name: "Gerindra",
          logo: "/images/clients/gerindra.png",
        },
      ],
    },
    en: {
      title: "Brand Trust Us",
      subtitle: "Every client represents a distinct chapter in our story.",
      items: [
        {
          name: "RSKI",
          logo: "/images/clients/rski.png",
        },
        {
          name: "Poltekkes Semarang",
          logo: "/images/clients/poltekkes.png",
        },
        {
          name: "BPJS Kesehatan",
          logo: "/images/clients/bpjs.png",
        },
        {
          name: "Gerindra",
          logo: "/images/clients/gerindra.png",
        },
      ],
    },
  },

  contact: {
    id: {
      title: "Hubungi Kami",
      form: {
        name: "Nama",
        email: "Email",
        phone: "Telepon",
        country: "Negara",
        company: "Perusahaan",
        message: "Tulis pesanmu disini...",
        discalimer: "Dengan mengirim, saya telah menyetujui",
        termsAndConditions: "Syarat & Ketentuan",
        termsAndConditionsLink: "",
        send: "Kirim Pesan",
      },
      faqs: [
        {
          title:
            "Apakah Distro Studio memiliki pengalaman dalam industri atau teknologi tertentu?",
          description:
            "Ya, Distro Studio memiliki pengalaman dalam manajemen proyek pengembangan aplikasi dengan spesialisasi dalam antarmuka pengguna (UI/UX), pengembangan frontend menggunakan React, dan backend menggunakan Laravel. Kami telah berhasil menyelesaikan berbagai proyek di berbagai industri termasuk keuangan, e-commerce, dan lainnya.",
        },
        {
          title: "Berapa biaya estimasi untuk menyelesaikan proyek tertentu?",
          description:
            "Estimasi biaya untuk menyelesaikan proyek akan bergantung pada berbagai faktor seperti kompleksitas proyek, skala, dan persyaratan spesifik yang diberikan oleh klien. Distro Studio akan menyediakan estimasi biaya setelah melakukan analisis menyeluruh terhadap persyaratan proyek yang diberikan oleh klien. Silakan hubungi tim kami untuk mendiskusikan proyek Anda dan mendapatkan perkiraan biaya yang lebih akurat.",
        },
        {
          title:
            "Berapa lama waktu yang dibutuhkan untuk menyelesaikan sebuah proyek?",
          description:
            "Waktu yang dibutuhkan untuk menyelesaikan sebuah proyek dapat bervariasi tergantung pada kompleksitas dan skala proyek. Dalam kasus Distro Studio, kami melakukan penjadwalan proyek dengan cermat dan memperkirakan waktu yang dibutuhkan berdasarkan analisis menyeluruh terhadap persyaratan proyek yang diberikan.",
        },
        {
          title:
            "Apa metode pengelolaan proyek yang biasa digunakan oleh Distro Studio?",
          description:
            "Distro Studio biasanya menggunakan metodologi pengelolaan proyek Agile dalam proses pengembangan aplikasi. Pendekatan ini memungkinkan klien untuk terlibat secara aktif dalam setiap tahap pengembangan, memungkinkan adaptasi cepat terhadap perubahan kebutuhan, dan memastikan transparansi dalam seluruh proses pengelolaan proyek.",
        },
        {
          title:
            "Bagaimana cara klien mengontrol proyek yang sedang dikerjakan?",
          description:
            "Dalam Distro Studio, kami memahami pentingnya keterlibatan klien dalam pengendalian proyek mereka. Untuk itu, kami sangat fleksibel untuk dihubungi bagi klien guna memantau kemajuan proyek mereka. Karena menggunakan metode Agile, client dapat memberikan masukan atau revisi secara langsung kepada tim pengembangan. Dengan cara ini, kami memastikan bahwa klien memiliki kendali penuh atas proyek mereka dan dapat memberikan arahan yang dibutuhkan saat diperlukan.",
        },
      ],
      allFaqs: {
        label: "View All",
        link: "",
      },
    },
    en: {
      title: "Contact Us",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        country: "Country",
        company: "Company",
        message: "Write your message here...",
        discalimer: "By submitting, I'm agreeed to the",
        termsAndConditions: "Terms & Conditions",
        termsAndConditionsLink: "",
        send: "Send Message",
      },
      faqs: [
        {
          title:
            "Does Distro Studio have experience in a specific industry or technology?",
          description:
            "Yes, Distro Studio has experience in project management for application development, specializing in user interface (UI/UX) design, frontend development using React, and backend development using Laravel. We have successfully completed various projects across industries including finance, e-commerce, and others.",
        },
        {
          title: "What is the estimated cost to complete a specific project?",
          description:
            "The cost estimation to complete a project depends on various factors such as project complexity, scale, and specific requirements provided by the client. Distro Studio will provide a cost estimate after conducting a thorough analysis of the project requirements provided by the client. Please contact our team to discuss your project and obtain a more accurate cost estimate.",
        },
        {
          title: "How long does it take to complete a project?",
          description:
            "The time required to complete a project can vary depending on the complexity and scale of the project. In the case of Distro Studio, we carefully schedule projects and estimate the time required based on a thorough analysis of the project requirements provided.",
        },
        {
          title:
            "What project management method does Distro Studio commonly use?",
          description:
            "Distro Studio typically utilizes the Agile project management methodology in the application development process. This approach allows clients to actively participate in every stage of development, enabling quick adaptation to changing requirements, and ensuring transparency throughout the project management process.",
        },
        {
          title: "How do clients control the ongoing project?",
          description:
            "At Distro Studio, we understand the importance of client involvement in controlling their projects. Therefore, we are highly flexible to be contacted by clients to monitor the progress of their projects. Utilizing the Agile method, clients can provide feedback or revisions directly to the development team. This way, we ensure that clients have full control over their projects and can provide necessary guidance when needed.",
        },
      ],
      allFaqs: {
        label: "View All",
        link: "",
      },
    },
  },

  footer: {
    id: {
      companyName: "PT. Kreasi Teknologi Kini",
      email: "contact@distrostudio.org",
      phone: "+6283836444099",
      narrative: {
        title: "Kami Distro Studio",
        description:
          "Kami bukan sekedar tim, kami adalah manifestasi kreativitas tanpa batas di dunia digital. Di Distro Studio, kami merangkai kode menjadi seni, menciptakan pengalaman digital yang tak terlupakan. Inilah kami, yang tidak hanya membangun, tetapi juga merangkai kisah sukses.",
      },
      navs: {
        company: {
          label: "Perusahaan",
          items: [
            {
              label: "Distro Studio",
              link: "/",
            },
            {
              label: "Layanan",
              link: "/services",
            },
            {
              label: "Portofolio",
              link: "/works?search=&category=0",
            },
            {
              label: "Tentang Kami",
              link: "/about",
            },
          ],
        },
        links: {
          label: "Links",
          items: [
            {
              label: "FAQs",
              link: "/faqs",
            },
            // {
            //   label: "Pusat Bantuan",
            //   link: "/help",
            // },
            // {
            //   label: "Kebijakan Privasi",
            //   link: "/privacy-policy",
            // },
            {
              label: "Syarat & Ketentuan",
              link: "/policy",
            },
          ],
        },
      },
      location: "Kami berbasis di Semarang, Jawa Tengah, Indonesia",
    },
    en: {
      companyName: "PT. Kreasi Teknologi Kini",
      email: "contact@distrostudio.org",
      phone: "+6283836444099",
      narrative: {
        title: "We're Distro Studio",
        description:
          "We are not just a team, we are a manifestation of limitless creativity in the digital world. At Distro Studio, we weave code into art, creating unforgettable digital experiences. Here we are, who not only build, but also weave success stories.",
      },
      navs: {
        company: {
          label: "Company",
          items: [
            {
              label: "Distro Studio",
              link: "/",
            },
            {
              label: "Services",
              link: "/services",
            },
            {
              label: "Portfolio",
              link: "/works?search=&category=0",
            },
            {
              label: "About Us",
              link: "/about",
            },
          ],
        },
        links: {
          label: "Links",
          items: [
            {
              label: "FAQs",
              link: "/faqs",
            },
            // {
            //   label: "Help Center",
            //   link: "/help",
            // },
            // {
            //   label: "Privacy Policy",
            //   link: "/privacy-policy",
            // },
            {
              label: "Terms & Conditions",
              link: "/policy",
            },
          ],
        },
      },
      location: "We are based on Semarang, Central Java, Indonesia",
    },
  },
};

export default landingData;
