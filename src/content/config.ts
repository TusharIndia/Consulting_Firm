import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featuredImg: z.string(),
    date: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
    readingTime: z.string().optional(),
  }),
});

const generalCollection = defineCollection({
  type: "data",
  schema: z.object({
    companyName: z.string(),
    logo: z.string(),
    city: z.string(),
    state: z.string(),
    address: z.string(),
    phoneNumber: z.string(),
    phoneNumber2: z.string().optional(),
    Email: z.string().email(),
  }),
});

const aboutCollection = defineCollection({
  type: "data",
  schema: z.object({
    hero: z.object({
      heading: z.string(),
      text: z.string(),
    }),
    about: z.object({
      headingOne: z.string(),
      textOne: z.string(),
      headingTwo: z.string(),
      textTwo: z.string(),
      images: z.object({
        imageOne: z.string(),
        imageTwo: z.string(),
      }),
    }),
    coreValues: z.object({
      heading: z.string(),
      text: z.string(),
      list: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
      buttonText: z.string(),
    }),
    facility: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
      images: z.object({
        imageOne: z.string(),
        imageTwo: z.string(),
      }),
    }),
    approach: z.object({
      headingOne: z.string(),
      textOne: z.string(),
      headingTwo: z.string(),
      textTwo: z.string(),
      images: z.object({
        imageOne: z.string(),
        imageTwo: z.string(),
      }),
    }),
    team: z.object({
      heading: z.string(),
      buttonText: z.string(),
      description: z.string(),
      team: z.array(
        z.object({
          name: z.string(),
          designation: z.string(),
          image: z.string(),
        })
      ),
    }),
    faq: z.object({
      heading: z.string(),
      faq: z.array(
        z.object({
          title: z.string(),
          details: z.string(),
        })
      ),
    }),
  }),
});

const contactCollection = {
  type: "data",
  schema: z.object({
    hero: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
      phoneQuestionText: z.string(),
      treatmentsLabel: z.string(),
      callButtonText: z.string(),
      navItems: z.array(
        z.object({
          text: z.string(),
          url: z.string(),
          hasDropdown: z.boolean().default(false),
          sublinks: z.array(
            z.object({
              text: z.string(),
              link: z.string(),
            })
          ).optional(),
          sublinks2: z.array(
            z.object({
              text: z.string(),
              link: z.string(),
            })
          ).optional(),
        })
      ),
    }),
    
    testimonials: z.object({
      list: z.array(
        z.object({
          name: z.string(),
          position: z.string(),
          text: z.string(),
          image: z.string(),
        })
      ),
    }),
    
    contactHero: z.object({
     
      address: z.string(),
      email: z.string(),
      phone: z.string(),
      formHeading: z.string(),
      emergencyHeading: z.string(),
      emergencyText: z.string(),
      supportHeading: z.string(),
      businessHours: z.object({
        heading: z.string(),
        hours: z.string(),
        weekend: z.string(),
      }),
    }),
  }),
};

const homeCollection = {
  type: "data",
  schema: z.object({
    hero: z.object({
      location: z.string(),
      heading: z.string(),
      text: z.string(),
      formTitle: z.string(),
      features: z.array(z.string()),
    }),
    about: z.object({
      headingOne: z.string(),
      textOne: z.string(),
      headingTwo: z.string(),
      textTwo: z.string(),
      images: z.object({
        imageOne: z.string(),
        imageTwo: z.string(),
      }),
    }),
    singleTestimonial: z.object({
      cardDetail: z.string(),
      cardTitle: z.string(),
    }),
    therapies: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
      list: z.array(z.object({
        title: z.string(),
        description: z.string(),
      })),
    }),
   
    programs: z.object({
      heading: z.string(),
      text: z.string(),
      programs: z.array(z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
      })),
    }),
    services: z.object({
      heading: z.string(),
      description: z.string(),
      services: z.array(z.object({
        iconName: z.string(),
        title: z.string(),
        description: z.string(),
      })),
    }),
    disorders: z.object({
      heading: z.string(),
      description: z.string(),
      disorders: z.array(z.object({
        iconName: z.string(),
        title: z.string(),
      })),
    }),
    faq: z.object({
      heading: z.string(),
      faq: z.array(z.object({
        title: z.string(),
        details: z.string(),
      })),
    }),
    insuranceOptions: z.object({
      heading: z.string(),
      description: z.string(),
      insuranceOptions: z.array(z.object({
        logo: z.string(),
      })),
    }),
    cta: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
      image: z.string(),
      altText: z.string(),
      phoneText: z.string(),
      phoneNumber: z.string(),
    }),
  }),
};

const admissionsCollection = defineCollection({
  type: "data",
  schema: z.object({
    hero: z.object({
      heading: z.string(),
      text: z.string(),
      videoLink: z.string(),
      video: z.object({
        img: z.string(),
        videoSrc: z.string(),
      }),
    }),
    cta: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
    }),
    steps: z.array(
      z.object({
        name: z.string(),
        title: z.string(),
        text: z.string(),
        icon: z.string(),
        modalText: z.string(),
      })
    ),
    nextSteps: z.object({
      heading: z.string(),
      description: z.string(),
      nextSteps: z.array(
        z.object({
          title: z.string(),
          linkOne: z.string(),
          linkOneUrl: z.string(),
          linkTwo: z.string(),
          linkTwoUrl: z.string(),
        })
      ),
    }),
    pdf: z.object({
      heading: z.string(),
      description: z.string(),
      pdf: z.object({
        link: z.string(),
        linkUrl: z.string(),
      }),
    }),
    faq: z.object({
      heading: z.string(),
      faq: z.array(
        z.object({
          title: z.string(),
          details: z.string(),
        })
      ),
    }),
  })
});

const programCollection = {
  type: "data",
  schema: z.object({
    hero: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
      phoneQuestionText: z.string(),
      treatmentsLabel: z.string(),
      callButtonText: z.string(),
      navItems: z.array(
        z.object({
          text: z.string(),
          url: z.string(),
          sublinks: z.array(
            z.object({
              text: z.string(),
              link: z.string(),
            })
          ).optional(),
          sublinks2: z.array(
            z.object({
              text: z.string(),
              link: z.string(),
            })
          ).optional(),
        })
      ),
    }),
    about: z.object({
      headingOne: z.string(),
      headingTwo: z.string(),
      textOne: z.string(),
      textTwo: z.string(),
      images: z.object({
        imageOne: z.string(),
        imageTwo: z.string(),
      }),
    }),
    video: z.object({
      heading: z.string(),
      description: z.string(),
      video: z.object({
        img: z.string(),
        videoSrc: z.string(),
      }),
    }),
    team: z.object({
      heading: z.string(),
      description: z.string(),
      team: z.array(z.object({
        name: z.string(),
        designation: z.string(),
        image: z.string(),
      })),
    }),
    nextSteps: z.object({
      heading: z.string(),
      description: z.string(),
      nextSteps: z.array(z.object({
        title: z.string(),
        linkOne: z.string(),
        linkOneUrl: z.string(),
        linkTwo: z.string(),
        linkTwoUrl: z.string(),
      })),
    }),
    singleReview: z.object({
      heading: z.string(),
      description: z.string(),
      buttonText: z.string(),
      cardDetail: z.string(),
      cardTitle: z.string(),
    }),
    pdf: z.object({
      heading: z.string(),
      description: z.string(),
      pdf: z.object({
        link: z.string(),
        linkUrl: z.string(),
      }),
    }),
    howWeTreat: z.object({
      heading: z.string(),
      description: z.string(),
      process: z.array(z.object({
        title: z.string(),
        details: z.string(),
      })),
    }),
    residentialRehab: z.object({
      img: z.string(),
      heading: z.string(),
      description: z.string(),
      cardTitle: z.string(),
      process: z.array(z.object({
        title: z.string(),
        details: z.string(),
      })),
    }),
    therapies: z.object({
      heading: z.string(),
      description: z.string(),
      therapies: z.array(z.object({
        title: z.string(),
        details: z.string(),
      })),
    }),
    amenities: z.object({
      img: z.string(),
      heading: z.string(),
      description: z.string(),
    }),
    faq: z.object({
      heading: z.string(),
      faq: z.array(z.object({
        title: z.string(),
        details: z.string(),
      })),
    }),
    otherTreatments: z.object({
      heading: z.string(),
      buttonText: z.string(),
      buttonUrl: z.string(),
      cards: z.array(z.object({
        title: z.string(),
        buttonText: z.string(),
        image: z.string(),
      })),
    }),
  }),
};

export const programarchiveCollection = {
  type: "data",
  schema: z.object({
    hero: z.object({
      heading: z.string(),
      text: z.string(),
    }),
    about: z.object({
      headingOne: z.string(),
      textOne: z.string(),
      headingTwo: z.string(),
      textTwo: z.string(),
      images: z.object({
        imageOne: z.string(),
        imageTwo: z.string(),
      }),
    }),
    cta: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
    }),
    footerCta: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
    }),
    coreValues: z.object({
      heading: z.string(),
      text: z.string(),
      list: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
      buttonText: z.string(),
    }),
    programs: z.object({
      heading: z.string(),
      text: z.string(),
      programs: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          image: z.string(),
        })
      ),
    }),
    facility: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
      images: z.object({
        imageOne: z.string(),
        imageTwo: z.string(),
      }),
    }),
    approach: z.object({
      headingOne: z.string(),
      textOne: z.string(),
      headingTwo: z.string(),
      textTwo: z.string(),
      images: z.object({
        imageOne: z.string(),
        imageTwo: z.string(),
      }),
    }),
    faq: z.object({
      heading: z.string(),
      faq: z.array(
        z.object({
          title: z.string(),
          details: z.string(),
        })
      ),
    }),
  }),
};

export const teamCollection = {
  type: "data",
  schema: z.object({
    hero: z.object({
      heading: z.string(),
      text: z.string(),
    }),
    cta: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
    }),
    team: z.object({
      heading: z.string(),
      buttonText: z.string(),
      description: z.string(),
      team: z.array(
        z.object({
          name: z.string(),
          designation: z.string(),
          image: z.string(),
        })
      ),
    }),
    faq: z.object({
      heading: z.string(),
      faq: z.array(
        z.object({
          title: z.string(),
          details: z.string(),
        })
      ),
    }),
  }),
};

const treatmentarchiveCollection = {
  type: "data",
  schema: z.object({
    hero: z.object({
      heading: z.string(),
      text: z.string(),
    }),
    about: z.object({
      headingOne: z.string(),
      textOne: z.string(),
      headingTwo: z.string(),
      textTwo: z.string(),
      images: z.object({
        imageOne: z.string(),
        imageTwo: z.string(),
      }),
    }),
    cta: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
    }),
    footerCta: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
    }),
    coreValues: z.object({
      heading: z.string(),
      text: z.string(),
      list: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
      buttonText: z.string(),
    }),
    programs: z.object({
      heading: z.string(),
      text: z.string(),
      programs: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          image: z.string(),
        })
      ),
    }),
    facility: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
      images: z.object({
        imageOne: z.string(),
        imageTwo: z.string(),
      }),
    }),
    approach: z.object({
      headingOne: z.string(),
      textOne: z.string(),
      headingTwo: z.string(),
      textTwo: z.string(),
      images: z.object({
        imageOne: z.string(),
        imageTwo: z.string(),
      }),
    }),
    disorders: z.object({
      heading: z.string(),
      description: z.string(),
      disorders: z.array(
        z.object({
          iconName: z.string(),
          title: z.string(),
        })
      ),
    }),
    faq: z.object({
      heading: z.string(),
      faq: z.array(
        z.object({
          title: z.string(),
          details: z.string(),
        })
      ),
    }),
  }),
};

const blogpageCollection = {
  type: "data",
  schema: z.object({
    hero: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
      phoneQuestionText: z.string(),
      treatmentsLabel: z.string(),
      callButtonText: z.string(),
      navItems: z.array(
        z.object({
          text: z.string(),
          url: z.string(),
          hasDropdown: z.boolean().default(false),
          sublinks: z.array(
            z.object({
              text: z.string(),
              link: z.string(),
            })
          ).optional(),
          sublinks2: z.array(
            z.object({
              text: z.string(),
              link: z.string(),
            })
          ).optional(),
        })
      ),
    }),
    disorders: z.object({
      heading: z.string(),
      description: z.string(),
      disorders: z.array(z.object({
        iconName: z.string(),
        title: z.string(),
      })),
    }),
     cta: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
      image: z.string(),
      altText: z.string(),
      phoneText: z.string(),
      phoneNumber: z.string(),
    }),
  }),
};

const insuranceCollection = {
  type: "data",
  schema: z.object({
    hero: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
      phoneQuestionText: z.string(),
      treatmentsLabel: z.string(),
      callButtonText: z.string(),
      navItems: z.array(
        z.object({
          text: z.string(),
          url: z.string(),
          hasDropdown: z.boolean().default(false),
          sublinks: z.array(
            z.object({
              text: z.string(),
              link: z.string(),
            })
          ).optional(),
          sublinks2: z.array(
            z.object({
              text: z.string(),
              link: z.string(),
            })
          ).optional(),
        })
      ),
    }),
    contactHero: z.object({
      title: z.object({
        line1: z.string(),
        line2: z.string(),
        line3: z.string(),
      }),
      description: z.string(),
      bottomDescription: z.string(),
      formTitle: z.string(),
      formSubtitle: z.string(),
      insuranceProviders: z.array(
        z.object({
          name: z.string(),
        })
      ),
      privacyNotice: z.string(),
    }),
    insuranceProviders: z.object({
      heading: z.string(),
      subheading: z.string(),
      buttonText: z.string(),
      callText: z.string(),
      phoneNumber: z.string(),
      footerText: z.string(),
      verifyButtonText: z.string(),
      providers: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          logo: z.string(),
        })
      ),
    }),
    insuranceVerification: z.object({
      title: z.object({
        line1: z.string(),
        line2: z.string(),
      }),
      description: z.string(),
      features: z.array(
        z.object({
          text: z.string(),
        })
      ),
      cta: z.object({
        heading: z.string(),
        subheading: z.string(),
        buttonText: z.string(),
        callText: z.string(),
        phoneNumber: z.string(),
      }),
    }),
    testimonials: z.object({
      list: z.array(
        z.object({
          name: z.string(),
          position: z.string(),
          text: z.string(),
          image: z.string(),
        })
      ),
    }),
    cta: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
      image: z.string(),
      altText: z.string(),
      phoneText: z.string(),
      phoneNumber: z.string(),
    }),
  }),
};

const locationCollection = {
  type: "data",
  schema: z.object({
    hero: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
      phoneQuestionText: z.string(),
      treatmentsLabel: z.string(),
      callButtonText: z.string(),
      navItems: z.array(
        z.object({
          text: z.string(),
          url: z.string(),
          hasDropdown: z.boolean().default(false),
          sublinks: z.array(
            z.object({
              text: z.string(),
              link: z.string(),
            })
          ).optional(),
          sublinks2: z.array(
            z.object({
              text: z.string(),
              link: z.string(),
            })
          ).optional(),
        })
      ),
    }),
    locationHero: z.object({
      header: z.string(),
      subheaderHighlight: z.string(),
      description: z.string(),
      locationInfo: z.object({
        title: z.string(),
        addressLine1: z.string(),
        addressLine2: z.string(),
        email: z.string(),
        phone: z.string(),
        hours: z.string(),
        buttonText: z.string(),
      }),
    }),
    disorders: z.object({
      heading: z.string(),
      headingTwo_Part_1: z.string(),
      headingTwo_Part_2: z.string(),
      headingTwo_Part_3: z.string(),
      disorders: z.array(z.object({
        link: z.string(),
        title: z.string(),
        image: z.string(),
      })),
    }),
    cta: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
      image: z.string(),
      altText: z.string(),
      phoneText: z.string(),
      phoneNumber: z.string(),
    }),
  }),
};

const treatmentCollection = {
  type: "data",
  schema: z.object({
    hero: z.object({
      heading: z.string(),
      text: z.string(),
      buttonText: z.string(),
      phoneQuestionText: z.string(),
      treatmentsLabel: z.string(),
      callButtonText: z.string(),
      navItems: z.array(
        z.object({
          text: z.string(),
          url: z.string(),
          hasDropdown: z.boolean().default(false),
          sublinks: z.array(
            z.object({
              text: z.string(),
              link: z.string(),
            })
          ).optional(),
          sublinks2: z.array(
            z.object({
              text: z.string(),
              link: z.string(),
            })
          ).optional(),
        })
      ),
    }),
    disorders: z.object({
      heading: z.string(),
      headingTwo_Part_1: z.string(),
      headingTwo_Part_2: z.string(),
      headingTwo_Part_3: z.string(),
      disorders: z.array(z.object({
        link: z.string(),
        title: z.string(),
        image: z.string(),
      })),
    }),
  }),
};

export const collections = {
  blog: blogCollection,
  general: generalCollection,
  about: aboutCollection,
  contact: contactCollection,
  home: homeCollection,
  admissions: admissionsCollection,
  program: programCollection,
  programarchive: programarchiveCollection,
  team: teamCollection,
  treatmentarchive: treatmentarchiveCollection,
  blogpage: blogpageCollection,
  insurance: insuranceCollection,
  location: locationCollection,
  treatment: treatmentCollection
};
