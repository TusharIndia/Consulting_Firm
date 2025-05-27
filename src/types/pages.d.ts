export interface About {
  data: {
    hero: {
      heading: string;
      text: string;
    };
    about: {
      headingOne: string;
      textOne: string;
      headingTwo: string;
      textTwo: string;
      images: {
        imageOne: string;
        imageTwo: string;
      };
    };
    coreValues: {
      heading: string;
      text: string;
      list: {
        title: string;
        description: string;
      }[];
      buttonText: string;
    };
    facility: {
      heading: string;
      text: string;
      buttonText: string;
      images: {
        imageOne: string;
        imageTwo: string;
      };
    };
    approach: {
      headingOne: string;
      textOne: string;
      headingTwo: string;
      textTwo: string;
      images: {
        imageOne: string;
        imageTwo: string;
      };
    };
    team: {
      heading: string;
      buttonText: string;
      description: string;
      team: {
        name: string;
        designation: string;
        image: string;
      }[];
    };
    faq: {
      heading: string;
      faq: {
        title: string;
        details: string;
      }[];
    };
  };
}

export interface Contact {
  data: {
    hero: {
      heading: string;
      text: string;
    };
    contact: {
      heading: string;
      description: string;
    };
  };
}

export interface Home {
  data: {
    hero: {
      backgroundImage: string;
      backgroundImageAlt: string;
      logo: string;
      buttonText: string;
      textBox1: string;
      textBox2_Part_1: string;
      textBox2_Part_2: string;
      textBox2_Part_3: string;
      textBox3: string;
      buttonOne: string;
      buttonTwo: string;
      telephoneNumber: string;
      heroLinks: {
        text: string;
        link: string;
        sublinks: {
          text: string;
          link: string;
        }[];
        sublinks2: {
          text: string;
          link: string;
        }[];
      }[];
    };
    about: {
      headingOne_Part_1: string;
      headingOne_Part_2: string;
      headingTwo: string;
      textOne: string;
      buttonOne: string;
      buttonTwo_Part_1: string;
      buttonTwo_Part_2: string;
      buttonTwo_Number: string;
    };
    testimonials: {
      list: {
        name: string;
        position: string;
        text: string;
        image: string;
      }[];
    };
    therapies: {
      image: string;
      heading: string;
      headingTwo_Part_1: string;
      headingTwo_Part_2: string;
      headingTwo_Part_3: string;
      buttonText: string;
      buttonTwo_Part_1: string;
      buttonTwo_Part_2: string;
      list: {
        title: string;
        description: string;
        image: string;
      }[];
    };
    cta: {
      heading: string;
      text: string;
      buttonText: string;
    };
    programs: {
      heading: string;
      text: string;
      programs: {
        title: string;
        image: string;
      }[];
    };
    services: {
      heading: string;
      description: string;
      services: {
        iconName: string;
        title: string;
        description: string;
      }[];
    };
    patientJourney: {
      heading: string;
      headingTwo_Part_1: string;
      headingTwo_Part_2: string;
      image: string;
      imageAlt: string;
      steps: {
        title: string;
        description: string;
      }[];
    }
    disorders: {
      heading: string;
      headingTwo_Part_1: string;
      headingTwo_Part_2: string;
      headingTwo_Part_3: string;
      disorders: {
        link: string;
        title: string;
        image: string;
      }[];
    };
    faq: {
      heading: string;
      faq: {
        title: string;
        details: string;
      }[];
    };
    insuranceOptions: {
      headingOne: string;
      headingTwo: string;
      description: string;
      insuranceOptions: {
        logo: string;
        alt: string;
      }[];
    };
  };
}

export interface Admissions {
  data: {
    hero: {
      heading: string;
      text: string;
      videoLink: string;
      video: {
        img: string;
        videoSrc: string;
      };
    };
    cta: {
      heading: string;
      text: string;
      buttonText: string;
    };
    steps: {
      name: string;
      title: string;
      text: string;
      icon: string;
      modalText: string;
    }[];
    nextSteps: {
      heading: string;
      description: string;
      nextSteps: {
        title: string;
        linkOne: string;
        linkOneUrl: string;
        linkTwo: string;
        linkTwoUrl: string;
      }[];
    };
    pdf: {
      heading: string;
      description: string;
      pdf: {
        link: string;
        linkUrl: string;
      };
    };
    faq: {
      heading: string;
      faq: {
        title: string;
        details: string;
      }[];
    };
  };
}

export interface Program {
  data: {
    hero: {
      location: string;
      heading: string;
      logo: { iconName: string }[];
    };
    about: {
      headingOne: string;
      textOne: string;
      headingTwo: string;
      textTwo: string;
      images: {
        imageOne: string;
        imageTwo: string;
      };
    };
    video: {
      heading: string;
      description: string;
      video: {
        img: string;
        videoSrc: string;
      };
    };
    team: {
      heading: string;
      description: string;
      team: {
        name: string;
        designation: string;
        image: string;
      }[];
    };
    nextSteps: {
      heading: string;
      description: string;
      nextSteps: {
        title: string;
        linkOne: string;
        linkOneUrl: string;
        linkTwo: string;
        linkTwoUrl: string;
      }[];
    };
    singleReview: {
      heading: string;
      description: string;
      buttonText: string;
      cardDetail: string;
      cardTitle: string;
    };
    pdf: {
      heading: string;
      description: string;
      pdf: {
        link: string;
        linkUrl: string;
      };
    };
    howWeTreat: {
      heading: string;
      description: string;
      process: {
        title: string;
        details: string;
      }[];
    };
    residentialRehab: {
      img: string;
      heading: string;
      description: string;
      cardTitle: string;
      process: {
        title: string;
        details: string;
      }[];
    };
    therapies: {
      heading: string;
      description: string;
      therapies: {
        title: string;
        details: string;
      }[];
    };
    amenities: {
      img: string;
      heading: string;
      description: string;
    };
    faq: {
      heading: string;
      faq: {
        title: string;
        details: string;
      }[];
    };
    otherTreatments: {
      heading: string;
      buttonText: string;
      buttonUrl: string;
      cards: {
        title: string;
        buttonText: string;
        image: string;
      }[];
    };
    cta: {
      heading: string;
      text: string;
      buttonText: string;
    };
    disorders: {
      heading: string;
      headingTwo_Part_1: string;
      headingTwo_Part_2: string;
      headingTwo_Part_3: string;
      disorders: {
        link: string;
        title: string;
        image: string;
      }[];
    };
    testimonials: {
      list: {
        name: string;
        position: string;
        text: string;
        image: string;
      }[];
    };
  }; 
}

export interface Programarchive {
  data: {
    hero: {
      heading: string;
      text: string;
    };
    about: {
      headingOne: string;
      textOne: string;
      headingTwo: string;
      textTwo: string;
      images: {
        imageOne: string;
        imageTwo: string;
      };
    };
    cta: {
      heading: string;
      text: string;
      buttonText: string;
    };
    footerCta: {
      heading: string;
      text: string;
      buttonText: string;
    };
    coreValues: {
      heading: string;
      text: string;
      list: Array<{
        title: string;
        description: string;
      }>;
      buttonText: string;
    };
    programs: {
      heading: string;
      text: string;
      programs: Array<{
        title: string;
        description: string;
        image: string;
      }>;
    };
    facility: {
      heading: string;
      text: string;
      buttonText: string;
      images: {
        imageOne: string;
        imageTwo: string;
      };
    };
    approach: {
      headingOne: string;
      textOne: string;
      headingTwo: string;
      textTwo: string;
      images: {
        imageOne: string;
        imageTwo: string;
      };
    };
    faq: {
      heading: string;
      faq: Array<{
        title: string;
        details: string;
      }>;
    };
  };
}

export interface Team {
  data: {
    hero: {
      heading: string;
      text: string;
    };
    cta: {
      heading: string;
      text: string;
      buttonText: string;
    };
    team: {
      heading: string;
      buttonText: string;
      description: string;
      team: Array<{
        name: string;
        designation: string;
        image: string;
      }>;
    };
    faq: {
      heading: string;
      faq: Array<{
        title: string;
        details: string;
      }>;
    };
  };
}

export interface Treatmentarchive {
  data: {
    hero: {
      heading: string;
      text: string;
    };
    about: {
      headingOne: string;
      textOne: string;
      headingTwo: string;
      textTwo: string;
      images: {
        imageOne: string;
        imageTwo: string;
      };
    };
    cta: {
      heading: string;
      text: string;
      buttonText: string;
    };
    footerCta: {
      heading: string;
      text: string;
      buttonText: string;
    };
    coreValues: {
      heading: string;
      text: string;
      list: {
        title: string;
        description: string;
      }[];
      buttonText: string;
    };
    programs: {
      heading: string;
      text: string;
      programs: {
        title: string;
        description: string;
        image: string;
      }[];
    };
    facility: {
      heading: string;
      text: string;
      buttonText: string;
      images: {
        imageOne: string;
        imageTwo: string;
      };
    };
    approach: {
      headingOne: string;
      textOne: string;
      headingTwo: string;
      textTwo: string;
      images: {
        imageOne: string;
        imageTwo: string;
      };
    };
    disorders: {
      heading: string;
      description: string;
      disorders: {
        iconName: string;
        title: string;
      }[];
    };
    faq: {
      heading: string;
      faq: {
        title: string;
        details: string;
      }[];
    };
  };
}
