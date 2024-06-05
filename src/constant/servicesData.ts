import {
  RiBuilding2Line,
  RiComputerLine,
  RiSmartphoneLine,
} from "@remixicon/react";
import { ServicesData2 } from "./types";
import chartLottie from "../../public/vectors/chart.json";
import monitorLottie from "../../public/vectors/monitor.json";
import phoneLottie from "../../public/vectors/phone.json";

const servicesData: ServicesData2 = {
  id: {
    tagline: "Ketika Presisi dan Kualitas Bertemu",
    narrative:
      " Kami menyatukan kualitas unggul dengan solusi yang tepat, membawa inovasi yang presisi untuk memenuhi kebutuhan Anda.",
    items: [
      {
        icon: RiBuilding2Line,
        iconVector: chartLottie,
        title: "Landing Page",
        image: "/images/services/compro.png",
        narrative:
          "Buat situs profil perusahaan yang dinamis untuk pengalaman pengguna yang lancar dan menarik dengan penyampaian informasi yang mudah",
        detailLink: "/services?section=0",
        benefit: {
          title: "Yang Anda Dapatkan",
          items: [
            {
              title: "SEO Friendly",
              narrative:
                "Kami akan mengoptimalkan website Anda untuk mesin pencari, sehingga perusahaan Anda dapat dengan mudah ditemukan oleh calon pelanggan.",
            },
            {
              title: "Pengalaman Pengguna yang Hebat",
              narrative:
                "Kami berfokus pada pengalaman pengguna yang hebat saat mengakses website. Kami akan memastikan bahwa website Anda mudah digunakan, cepat dimuat, dan responsif di semua perangkat.",
            },
            {
              title: "Dukungan dan Pemeliharaan",
              narrative:
                "Kami juga menawarkan layanan dukungan dan pemeliharaan setelah website Anda siap. Kami akan memastikan bahwa website Anda selalu up-to-date dan berfungsi dengan baik.",
            },
          ],
        },
      },
      {
        icon: RiComputerLine,
        iconVector: monitorLottie,
        title: "Web App",
        image: "/images/services/webapp.png",
        narrative:
          "Bangun aplikasi Anda dengan pakar UX & UI kami dan Engineer kami yang handal, dengan berbasis PWA atau Progressive Webb App, aplikasi yang kami buat dapat diakses lintas platform",
        detailLink: "/services?section=1",
        benefit: {
          title: "Yang Anda Dapatkan",
          items: [
            {
              title: "User Friendly",
              narrative:
                "Pengalaman pengguna menjadi lebih ramah, memastikan navigasi yang intuitif dan proses yang lancar. Kombinasi antara desain yang bersih dan fokus pada fungsi utama membuat produk lebih mudah dipahami dan digunakan oleh pengguna.",
            },
            {
              title: "Pengalaman Pengguna yang Hebat",
              narrative:
                "Kami berfokus pada pengalaman pengguna yang hebat saat mengakses website. Kami akan memastikan bahwa website Anda mudah digunakan, cepat dimuat, dan responsif di semua perangkat.",
            },
            {
              title: "Dukungan dan Pemeliharaan",
              narrative:
                "Kami juga menawarkan layanan dukungan dan pemeliharaan setelah website Anda siap. Kami akan memastikan bahwa website Anda selalu up-to-date dan berfungsi dengan baik.",
            },
          ],
        },
      },
      {
        icon: RiSmartphoneLine,
        iconVector: phoneLottie,
        title: "Mobile App",
        image: "/images/services/mobile.png",
        narrative:
          "Kami menyediakan kebutuhan aplikasi mobile, dengan menggunakan teknologi terkini, aplikasi yang kami buat lebih relevan dan lebih bertahan lama",
        detailLink: "/services?section=2",
        benefit: {
          title: "Yang Anda Dapatkan",
          items: [
            {
              title: "Cross Platform (Android/IOS)",
              narrative:
                "Pengembangan mobile kami tentu dapat diakses di sistem operasi Android maupun IOS agar sistem yang kami bangun mengakomodasi semua pengguna.",
            },
            {
              title: "Pengalaman Pengguna yang Hebat",
              narrative:
                "Kami berfokus pada pengalaman pengguna yang hebat saat mengakses perangkat lunak. Kami akan memastikan bahwa perangkat lunak Anda mudah digunakan, cepat dimuat, dan responsif di semua perangkat.",
            },
            {
              title: "Dukungan dan Pemeliharaan",
              narrative:
                "Kami juga menawarkan layanan dukungan dan pemeliharaan setelah website Anda siap. Kami akan memastikan bahwa website Anda selalu up-to-date dan berfungsi dengan baik.",
            },
          ],
        },
      },
    ],
  },
  en: {
    tagline: "When  Precision and Quality Meet",
    narrative:
      "We combine superior quality with the right solutions, bringing precision innovation to meet your needs.",
    items: [
      {
        icon: RiBuilding2Line,
        iconVector: chartLottie,
        title: "Landing Page",
        image: "/images/services/compro.png",
        narrative:
          "Create a dynamic company profile site for a seamless, engaging user experience with effortless information delivery",
        detailLink: "/services?section=0",
        benefit: {
          title: "What You Get",
          items: [
            {
              title: "SEO Friendly",
              narrative:
                "We will optimize your website for search engines, so that your company can be easily found by potential customers.",
            },
            {
              title: "Great User Experience",
              narrative:
                "In addition, we focus on providing a great user experience when accessing the website. We will ensure that your website is easy to use, fast to load, and responsive on all devices.",
            },
            {
              title: "Support and Maintenance",
              narrative:
                "We also offer support and maintenance services after your website is ready. We will ensure that your website is always up-to-date and functioning properly.",
            },
          ],
        },
      },
      {
        icon: RiComputerLine,
        iconVector: monitorLottie,
        title: "Web App",
        image: "/images/services/webapp.png",
        narrative:
          "Build your application with our UX & UI experts and our skilled Engineers, based on PWA or Progressive Webb App, the applications we create can be accessed across platforms",
        detailLink: "/services?section=1",
        benefit: {
          title: "What You Get",
          items: [
            {
              title: "User Friendly",
              narrative:
                "The user experience becomes friendlier, ensuring intuitive navigation and smooth processes. The combination of clean design and focus on key functions makes the product easier for users to understand and use.",
            },
            {
              title: "Great User Experience",
              narrative:
                "In addition, we focus on providing a great user experience when accessing the website. We will ensure that your website is easy to use, fast to load, and responsive on all devices.",
            },
            {
              title: "Support and Maintenance",
              narrative:
                "We also offer support and maintenance services after your website is ready. We will ensure that your website is always up-to-date and functioning properly.",
            },
          ],
        },
      },
      {
        icon: RiSmartphoneLine,
        iconVector: phoneLottie,
        title: "Mobile App",
        image: "/images/services/mobile.png",
        narrative:
          "We provide mobile application needs, by using the latest technology, the applications we create are more relevant and last longer",
        detailLink: "/services?section=2",
        benefit: {
          title: "What You Get",
          items: [
            {
              title: "Cross Platform (Android/IOS)",
              narrative:
                "Mobile development uses PWA or Progressive Web App which is able to accommodate all mobile platforms and can even be accessed via the website.",
            },
            {
              title: "Great User Experience",
              narrative:
                "In addition, we focus on providing a great user experience when accessing the software. We will ensure that your software is easy to use, fast to load, and responsive on all devices.",
            },
            {
              title: "Support and Maintenance",
              narrative:
                "We also offer support and maintenance services after your website is ready. We will ensure that your website is always up-to-date and functioning properly.",
            },
          ],
        },
      },
    ],
  },
};

export default servicesData;
