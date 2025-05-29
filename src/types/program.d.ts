export interface ProgramEntry {
  title: string;
  slug: string;
  hero: {
    heading: string;
    text: string;
    buttonText: string;
    phoneQuestionText: string;
    treatmentsLabel: string;
    callButtonText: string;
    navItems: Array<{
      text: string;
      url: string;
      sublinks: Array<{
        text: string;
        link: string;
      }>;
      sublinks2: Array<{
        text: string;
        link: string;
      }>;
    }>;
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
    treatments: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
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
    }>>;
  };
  testimonials: {
    list: Array<{
      name: string;
      position: string;
      text: string;
      image: string;
    }>;
  };
  program12: {
    badgeText: string;
    heading: string;
    description: string;
    mainImage: string;
    mainImageAlt: string;
    steps: Array<{
      stepNumber: string;
      title: string;
    }>;
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
  faq: {
    heading: string;
    faq: Array<{
      title: string;
      details: string;
    }>;
  };
  disorders: {
    heading: string;
    headingTwo_Part_1: string;
    headingTwo_Part_2: string;
    headingTwo_Part_3: string;
    disorders: Array<{
      link: string;
      title: string;
      image: string;
    }>;
  };
  cta: {
    heading: string;
    text: string;
    buttonText: string;
  };
}
