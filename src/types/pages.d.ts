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
      subheading: string;
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
      buttonText: string;
      phoneQuestionText: string;
      treatmentsLabel: string;
      callButtonText: string;
      navItems: {
        text: string;
        url: string;
        hasDropdown: boolean;
        sublinks?: {
          text: string;
          link: string;
        }[];
        sublinks2?: {
          text: string;
          link: string;
        }[];
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
    
    contactHero: {
      
      address: string;
      email: string;
      phone: string;
      formHeading: string;
      emergencyHeading: string;
      emergencyText: string;
      supportHeading: string;
      businessHours: {
        heading: string;
        hours: string;
        weekend: string;
      };
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
    
    programs: {
      heading: string;
      text: string;
      programs: {
        title: string;
        image: string;
        link: string; // Added link field
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
      subheading: string;
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
    cta: {
      heading: string;
      text: string;
      buttonText: string;
      image: string;
      altText: string;
      phoneText: string;
      phoneNumber: string;
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
      subheading: string;
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
      heading: string;
      text: string;
      buttonText: string;
      phoneQuestionText: string;
      treatmentsLabel: string;
      callButtonText: string;
      navItems: {
        text: string;
        url: string;
        sublinks?: {
          text: string;
          link: string;
        }[];
        sublinks2?: {
          text: string;
          link: string;
        }[];
      }[];
    };
    about: {
      headingOne: string;
      headingTwo: string;
      textOne: string;
      textTwo: string;
      images: {
        imageOne: string;
        imageTwo: string;
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
      subheading: string;
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
      image: string;
      altText: string;
      phoneText: string;
      phoneNumber: string;
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
    video: {
      heading: string;
      headingColored: string;
      description: string;
      image: string;
      imageAlt: string;
    };
    treatmentGrid: {
      heading: string;
      subheading: string;
      description: string;
      featuredImage: string;
      treatments: {
        icon: string;
        title: string;
        description: string;
      }[];
    };
    whyChoose: {
      title: string;
      content: {
        paragraph1: string;
        paragraph2: string;
      };
      imageUrl: string;
      imageAlt: string;
    };
    secondWhyChoose: {
      title: string;
      content: {
        paragraph1: string;
        paragraph2: string;
      };
      imageUrl: string;
      imageAlt: string;
    };
    whoNeeds: {
      heading: string;
      headingColored: string;
      headingEnd: string;
      description: string;
      listHeading: string;
      listItems: string[];
      listDescription: string;
      primaryButtonText: string;
      phoneQuestion: string;
      phoneNumber: string;
      phoneButtonText: string;
    };
    program12: {
      badgeText: string;
      heading: string;
      description: string;
      mainImage: string;
      mainImageAlt: string;
      steps: {
        stepNumber: string;
        title: string;
      }[];
    };
     programTMS: {
      mainHeading: string;
      coloredHeading: string;
      description: string;
      primaryButtonText: string;
      phoneQuestion: string;
      phoneNumber: string;
      image: string;
      imageAlt: string;
      conditions: Array<Array<{
        title: string;
        icon: string;
        description: string;
      }>>;
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
      subheading: string;
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
      subheading: string;
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
      subheading: string;
      faq: {
        title: string;
        details: string;
      }[];
    };
  };
}

export interface BlogPage {
  data: {
    hero: {
      heading: string;
      text: string;
      buttonText: string;
      phoneQuestionText: string;
      treatmentsLabel: string;
      callButtonText: string;
      navItems: {
        text: string;
        url: string;
        hasDropdown: boolean;
        sublinks?: {
          text: string;
          link: string;
        }[];
        sublinks2?: {
          text: string;
          link: string;
        }[];
      }[];
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
    cta: {
      heading: string;
      text: string;
      buttonText: string;
      image: string;
      altText: string;
      phoneText: string;
      phoneNumber: string;
    };
  };
}

export interface Insurance {
  data: {
    hero: {
      heading: string;
      text: string;
      buttonText: string;
      phoneQuestionText: string;
      treatmentsLabel: string;
      callButtonText: string;
      navItems: {
        text: string;
        url: string;
        hasDropdown: boolean;
        sublinks?: {
          text: string;
          link: string;
        }[];
        sublinks2?: {
          text: string;
          link: string;
        }[];
      }[];
    };
    contactHero: {
      title: {
        line1: string;
        line2: string;
        line3: string;
      };
      description: string;
      bottomDescription: string;
      formTitle: string;
      formSubtitle: string;
      insuranceProviders: {
        name: string;
      }[];
      privacyNotice: string;
    };
    insuranceProviders: {
      heading: string;
      subheading: string;
      buttonText: string;
      callText: string;
      phoneNumber: string;
      footerText: string;
      verifyButtonText: string;
      providers: {
        name: string;
        description: string;
        logo: string;
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
    treatmentGrid: {
      heading: string;
      subheading: string;
      description: string;
      featuredImage: string;
      treatments: {
        icon: string;
        title: string;
        description: string;
      }[];
    };
    cta: {
      heading: string;
      text: string;
      buttonText: string;
      image: string;
      altText: string;
      phoneText: string;
      phoneNumber: string;
    };
    insuranceVerification: {
      title: {
        line1: string;
        line2: string;
      };
      description: string;
      features: {
        text: string;
      }[];
      cta: {
        heading: string;
        subheading: string;
        buttonText: string;
        callText: string;
        phoneNumber: string;
      };
    };
  };
}

export interface Location {
  data: {
    hero: {
      heading: string;
      text: string;
      buttonText: string;
      phoneQuestionText: string;
      treatmentsLabel: string;
      callButtonText: string;
      navItems: {
        text: string;
        url: string;
        hasDropdown: boolean;
        sublinks?: {
          text: string;
          link: string;
        }[];
        sublinks2?: {
          text: string;
          link: string;
        }[];
      }[];
    };
    locationHero: {
      header: string;
      subheaderHighlight: string;
      description: string;
      locationInfo: {
        title: string;
        addressLine1: string;
        addressLine2: string;
        email: string;
        phone: string;
        hours: string;
        buttonText: string;
      };
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
    cta: {
      heading: string;
      text: string;
      buttonText: string;
      image: string;
      altText: string;
      phoneText: string;
      phoneNumber: string;
    };
  };
}

export interface Treatment {
  data: {
    hero: {
      heading: string;
      text: string;
      buttonText: string;
      phoneQuestionText: string;
      treatmentsLabel: string;
      callButtonText: string;
      navItems: {
        text: string;
        url: string;
        hasDropdown: boolean;
        sublinks?: {
          text: string;
          link: string;
        }[];
        sublinks2?: {
          text: string;
          link: string;
        }[];
      }[];
    };
    treatmentHero: {
      heading: string;
      tagline: string;
      title: string;
      subtitle: string;
      description: string;
      approaches: {
        id: string;
        title: string;
        description: string;
      }[];
    };
    treatment2: {
      heading: string;
      headingHighlight: string;
      description: string;
      symptoms: {
        icon: string;
        text: string;
      }[];
      buttonText: string;
      phoneText: string;
      phoneNumber: string;
      image: string;
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
    cta: {
      heading: string;
      text: string;
      buttonText: string;
      image: string;
      altText: string;
      phoneText: string;
      phoneNumber: string;
    };
  };
}

export interface Pricing {
  data: {
    hero: {
      heading: string;
      text: string;
      buttonText: string;
      phoneQuestionText: string;
      treatmentsLabel: string;
      callButtonText: string;
      navItems: {
        text: string;
        url: string;
        sublinks?: {
          text: string;
          link: string;
        }[];
        sublinks2?: {
          text: string;
          link: string;
        }[];
      }[];
    };
    pricingHero: {
      heading: string;
      subheading: string;
      initialConsultation: {
        title: string;
        features: string[];
      };
      followUpVisits: {
        title: string;
        features: string[];
      };
      specializedTreatmentsHeading: string;
      tmsTherapy: {
        title: string;
        features: string[];
      };
      spravatoTreatment: {
        title: string;
        features: string[];
      };
    };
    paymentOptions: {
      heading: string;
      options: string[];
      contactText: string;
      image: string;
      imageAlt: string;
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
    cta: {
      heading: string;
      text: string;
      buttonText: string;
      image: string;
      altText: string;
      phoneText: string;
      phoneNumber: string;
    };
  };
}
