export type LanguageOptions = "id" | "en";

export interface Interface__Nav {
  label: {
    [lang in LanguageOptions]: string;
  };
  link: string;
}

export type ServiceData = {
  icon: any;
  iconVector: any;
  title: string;
  narrative: string;
  image: string;
  detailLink: string;
  benefit: {
    title: string;
    items: { title: string; narrative: string }[];
  };
};

export type ServicesData = {
  [lang in LanguageOptions]: ServiceData[];
};

export type ServicesData2 = {
  [lang in LanguageOptions]: {
    tagline: string;
    narrative: string;
    items: ServiceData[];
  };
};

export type WorkData = {
  id: number;
  category: number;
  subTitle: string;
  clientLogo: string;
  clientName: string;
  title: string;
  image: string;
  imageAlter: string;
  narrative: string;
  solution: string;
  ss: string[];
  ssScrollLength: number;
};

export type WorksData = {
  [lang in LanguageOptions]: WorkData[];
};

export type AboutData = {
  [lang in LanguageOptions]: {
    intro: {
      title: string;
      narrative: string[];
    };
    members: {
      title: string;
    };
  };
};
