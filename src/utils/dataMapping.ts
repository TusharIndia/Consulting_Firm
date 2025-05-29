import { getCollection } from "astro:content";
import type { Blog } from "../types/blog";
import type { General } from "../types/general";
import type {
  About,
  BlogPage,
  Contact,
  Home,
  Admissions,
  Program,
  Programarchive,
  Team,
  Treatmentarchive,
  Insurance,
  Location,
  Treatment
} from "../types/pages";

export async function fetchBlogData(): Promise<Blog[]> {
  const posts = await getCollection("blog");

  return posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    body: post.body,
    collection: post.collection,
    render: post.render,
    data: {
      title: post.data.title,
      description: post.data.description,
      featuredImg: post.data.featuredImg,
      date: post.data.date,
      author: post.data.author,
      tags: post.data.tags,
      readingTime: post.data.readingTime,
    },
  }));
}

export async function fetchGeneralData(): Promise<General> {
  const [general] = await getCollection("general");

  return {
    companyName: general.data.companyName,
    logo: general.data.logo,
    city: general.data.city,
    state: general.data.state,
    address: general.data.address,
    phoneNumber: general.data.phoneNumber,
    phoneNumber2: general.data.phoneNumber2,
    email: general.data.Email,
  };
}

export async function fetchAboutData(): Promise<About> {
  const [about] = await getCollection("pages", (page) => page.id === "about");

  return {
    data: {
      hero: {
        heading: about.data.hero.heading,
        text: about.data.hero.text,
      },
      about: {
        headingOne: about.data.about.headingOne,
        textOne: about.data.about.textOne,
        headingTwo: about.data.about.headingTwo,
        textTwo: about.data.about.textTwo,
        images: {
          imageOne: about.data.about.images.imageOne,
          imageTwo: about.data.about.images.imageTwo,
        },
      },
      coreValues: {
        heading: about.data.coreValues.heading,
        text: about.data.coreValues.text,
        list: about.data.coreValues.list.map((item) => ({
          title: item.title,
          description: item.description,
        })),
        buttonText: about.data.coreValues.buttonText,
      },
      facility: {
        heading: about.data.facility.heading,
        text: about.data.facility.text,
        buttonText: about.data.facility.buttonText,
        images: {
          imageOne: about.data.facility.images.imageOne,
          imageTwo: about.data.facility.images.imageTwo,
        },
      },
      approach: {
        headingOne: about.data.approach.headingOne,
        textOne: about.data.approach.textOne,
        headingTwo: about.data.approach.headingTwo,
        textTwo: about.data.approach.textTwo,
        images: {
          imageOne: about.data.approach.images.imageOne,
          imageTwo: about.data.approach.images.imageTwo,
        },
      },
      team: {
        heading: about.data.team.heading,
        buttonText: about.data.team.buttonText,
        description: about.data.team.description,
        team: about.data.team.team.map((member) => ({
          name: member.name,
          designation: member.designation,
          image: member.image,
        })),
      },
      faq: {
        heading: about.data.faq.heading,
        faq: about.data.faq.faq.map((q) => ({
          title: q.title,
          details: q.details,
        })),
      },
    },
  };
}

export async function fetchContactData(): Promise<Contact> {
  const [contact] = await getCollection(
    "pages",
    (page) => page.id === "contact"
  );

  return {
    data: {
      hero: {
        heading: contact.data.hero.heading,
        text: contact.data.hero.text,
        buttonText: contact.data.hero.buttonText,
        phoneQuestionText: contact.data.hero.phoneQuestionText,
        treatmentsLabel: contact.data.hero.treatmentsLabel,
        callButtonText: contact.data.hero.callButtonText,
        navItems: contact.data.hero.navItems.map((item) => ({
          text: item.text,
          url: item.url,
          hasDropdown: item.hasDropdown,
          sublinks: item.sublinks?.map((sublink) => ({
            text: sublink.text,
            link: sublink.link,
          })),
          sublinks2: item.sublinks2?.map((sublink) => ({
            text: sublink.text, 
            link: sublink.link,
          })),
        })),
      },
      
      testimonials: {
        list: contact.data.testimonials.list.map((testimonial) => ({
          name: testimonial.name,
          position: testimonial.position,
          text: testimonial.text,
          image: testimonial.image,
        })),
      },
      
      contactHero: {
    
        address: contact.data.contactHero.address,
        email: contact.data.contactHero.email,
        phone: contact.data.contactHero.phone,
        formHeading: contact.data.contactHero.formHeading,
        emergencyHeading: contact.data.contactHero.emergencyHeading,
        emergencyText: contact.data.contactHero.emergencyText,
        supportHeading: contact.data.contactHero.supportHeading,
        businessHours: {
          heading: contact.data.contactHero.businessHours.heading,
          hours: contact.data.contactHero.businessHours.hours,
          weekend: contact.data.contactHero.businessHours.weekend,
        },
      },
    },
  };
}

export async function fetchHomeData(): Promise<Home> {
  const [home] = await getCollection("pages", (page) => page.id === "home");

  return {
    data: {
      hero: {
        backgroundImage: home.data.hero.backgroundImage,
        backgroundImageAlt: home.data.hero.backgroundImageAlt,
        logo: home.data.hero.logo,
        buttonText: home.data.hero.buttonText,
        textBox1: home.data.hero.textBox1,
        textBox2_Part_1: home.data.hero.textBox2_Part_1,
        textBox2_Part_2: home.data.hero.textBox2_Part_2,
        textBox2_Part_3: home.data.hero.textBox2_Part_3,
        textBox3: home.data.hero.textBox3,
        buttonOne: home.data.hero.buttonOne,
        buttonTwo: home.data.hero.buttonTwo,
        telephoneNumber: home.data.hero.telephoneNumber,
        heroLinks: home.data.hero.heroLinks.map((link) => ({
          text: link.text,
          link: link.link,
          sublinks: link.sublinks.map((sublink) => ({
            text: sublink.text,
            link: sublink.link,
          })),
          sublinks2: link.sublinks2.map((sublink) => ({
            text: sublink.text,
            link: sublink.link,
          })),
        })),
      },
      about: {
        headingOne_Part_1: home.data.about.headingOne_Part_1,
        headingOne_Part_2: home.data.about.headingOne_Part_2,
        headingTwo: home.data.about.headingTwo,
        textOne: home.data.about.textOne,
        buttonOne: home.data.about.buttonOne,
        buttonTwo_Part_1: home.data.about.buttonTwo_Part_1,
        buttonTwo_Part_2: home.data.about.buttonTwo_Part_2,
        buttonTwo_Number: home.data.about.buttonTwo_Number,
      },
      testimonials: {
        list: home.data.testimonials.list.map((testimonial) => ({
          name: testimonial.name,
          position: testimonial.position,
          text: testimonial.text,
          image: testimonial.image,
        })),
      },
      therapies: {
        image: home.data.therapies.image,
        heading: home.data.therapies.heading,
        headingTwo_Part_1: home.data.therapies.headingTwo_Part_1,
        headingTwo_Part_2: home.data.therapies.headingTwo_Part_2,
        headingTwo_Part_3: home.data.therapies.headingTwo_Part_3,
        buttonText: home.data.therapies.buttonText,
        buttonTwo_Part_1: home.data.therapies.buttonTwo_Part_1,
        buttonTwo_Part_2: home.data.therapies.buttonTwo_Part_2,
        list: home.data.therapies.list.map((therapy) => ({
          title: therapy.title,
          description: therapy.description,
          image: therapy.image,
        })),
      },
      programs: {
        heading: home.data.programs.heading,
        text: home.data.programs.text,
        programs: home.data.programs.programs.map((program) => ({
          title: program.title,
          image: program.image,
        })),
      },
      services: {
        heading: home.data.services.heading,
        description: home.data.services.description,
        services: home.data.services.services.map((service) => ({
          iconName: service.iconName,
          title: service.title,
          description: service.description,
        })),
      },
      patientJourney: {
        heading: home.data.patientJourney.heading,
        headingTwo_Part_1: home.data.patientJourney.headingTwo_Part_1,
        headingTwo_Part_2: home.data.patientJourney.headingTwo_Part_2,
        image: home.data.patientJourney.image,
        imageAlt: home.data.patientJourney.imageAlt,
        steps: home.data.patientJourney.steps.map(
          (journey) => ({
            title: journey.title,
            description: journey.description,
          })
        ),
      },
      disorders: {
        heading: home.data.disorders.heading,
        headingTwo_Part_1: home.data.disorders.headingTwo_Part_1,
        headingTwo_Part_2: home.data.disorders.headingTwo_Part_2,
        headingTwo_Part_3: home.data.disorders.headingTwo_Part_3,
        disorders: home.data.disorders.disorders.map((disorder) => ({
          link: disorder.link,
          title: disorder.title,
          image: disorder.image,
        })),
      },
      faq: {
        heading: home.data.faq.heading,
        faq: home.data.faq.faq.map((faq) => ({
          title: faq.title,
          details: faq.details,
        })),
      },
      insuranceOptions: {
        headingOne: home.data.insuranceOptions.headingOne,
        headingTwo: home.data.insuranceOptions.headingTwo,
        description: home.data.insuranceOptions.description,
        insuranceOptions: home.data.insuranceOptions.insuranceOptions.map(
          (option) => ({
            logo: option.logo,
          })
        ),
      },
      cta: {
        heading: home.data.cta.heading,
        text: home.data.cta.text,
        buttonText: home.data.cta.buttonText,
        image: home.data.cta.image,
        altText: home.data.cta.altText,
        phoneText: home.data.cta.phoneText,
        phoneNumber: home.data.cta.phoneNumber,
      },
    },
  };
}

export async function fetchAdmissions(): Promise<Admissions> {
  const [admissions] = await getCollection(
    "pages",
    (page) => page.id === "admissions"
  );

  return {
    data: {
      hero: {
        heading: admissions.data.hero.heading,
        text: admissions.data.hero.text,
        videoLink: admissions.data.hero.videoLink,
        video: {
          img: admissions.data.hero.video.img,
          videoSrc: admissions.data.hero.video.videoSrc,
        },
      },
      cta: {
        heading: admissions.data.cta.heading,
        text: admissions.data.cta.text,
        buttonText: admissions.data.cta.buttonText,
      },
      steps: admissions.data.steps.map((step) => ({
        name: step.name,
        title: step.title,
        text: step.text,
        icon: step.icon,
        modalText: step.modalText,
      })),
      nextSteps: {
        heading: admissions.data.nextSteps.heading,
        description: admissions.data.nextSteps.description,
        nextSteps: admissions.data.nextSteps.nextSteps.map((nextStep) => ({
          title: nextStep.title,
          linkOne: nextStep.linkOne,
          linkOneUrl: nextStep.linkOneUrl,
          linkTwo: nextStep.linkTwo,
          linkTwoUrl: nextStep.linkTwoUrl,
        })),
      },
      pdf: {
        heading: admissions.data.pdf.heading,
        description: admissions.data.pdf.description,
        pdf: {
          link: admissions.data.pdf.pdf.link,
          linkUrl: admissions.data.pdf.pdf.linkUrl,
        },
      },
      faq: {
        heading: admissions.data.faq.heading,
        faq: admissions.data.faq.faq.map((faqItem) => ({
          title: faqItem.title,
          details: faqItem.details,
        })),
      },
    },
  };
}

export async function fetchProgramData(): Promise<Program> {
  const [programData] = await getCollection(
    "pages",
    (page) => page.id === "program"
  );

  return {
    data: {
      hero: {
        heading: programData.data.hero.heading,
        text: programData.data.hero.text,
        buttonText: programData.data.hero.buttonText,
        phoneQuestionText: programData.data.hero.phoneQuestionText,
        treatmentsLabel: programData.data.hero.treatmentsLabel,
        callButtonText: programData.data.hero.callButtonText,
        navItems: programData.data.hero.navItems.map((item: any) => ({
          text: item.text,
          url: item.url,
          sublinks: item.sublinks?.map((sublink: any) => ({
            text: sublink.text,
            link: sublink.link,
          })),
          sublinks2: item.sublinks2?.map((sublink: any) => ({
            text: sublink.text,
            link: sublink.link,
          })),
        })),
      },
      about: {
        headingOne: programData.data.about.headingOne,
        headingTwo: programData.data.about.headingTwo,
        textOne: programData.data.about.textOne,
        textTwo: programData.data.about.textTwo,
        images: {
          imageOne: programData.data.about.images.imageOne,
          imageTwo: programData.data.about.images.imageTwo,
        },
      },
      video: {
        heading: programData.data.video.heading,
        headingColored: programData.data.video.headingColored,
        description: programData.data.video.description,
        image: programData.data.video.image,
        imageAlt: programData.data.video.imageAlt,
      },
      team: {
        heading: programData.data.team.heading,
        description: programData.data.team.description,
        team: programData.data.team.team.map((member: any) => ({
          name: member.name,
          designation: member.designation,
          image: member.image,
        })),
      },
      nextSteps: {
        heading: programData.data.nextSteps.heading,
        description: programData.data.nextSteps.description,
        nextSteps: programData.data.nextSteps.nextSteps.map((step: any) => ({
          title: step.title,
          linkOne: step.linkOne,
          linkOneUrl: step.linkOneUrl,
          linkTwo: step.linkTwo,
          linkTwoUrl: step.linkTwoUrl,
        })),
      },
      singleReview: {
        heading: programData.data.singleReview.heading,
        description: programData.data.singleReview.description,
        buttonText: programData.data.singleReview.buttonText,
        cardDetail: programData.data.singleReview.cardDetail,
        cardTitle: programData.data.singleReview.cardTitle,
      },
      pdf: {
        heading: programData.data.pdf.heading,
        description: programData.data.pdf.description,
        pdf: {
          link: programData.data.pdf.pdf.link,
          linkUrl: programData.data.pdf.pdf.linkUrl,
        },
      },
      howWeTreat: {
        heading: programData.data.howWeTreat.heading,
        description: programData.data.howWeTreat.description,
        process: programData.data.howWeTreat.process.map((process: any) => ({
          title: process.title,
          details: process.details,
        })),
      },
      residentialRehab: {
        img: programData.data.residentialRehab.img,
        heading: programData.data.residentialRehab.heading,
        description: programData.data.residentialRehab.description,
        cardTitle: programData.data.residentialRehab.cardTitle,
        process: programData.data.residentialRehab.process.map(
          (process: any) => ({
            title: process.title,
            details: process.details,
          })
        ),
      },
      therapies: {
        heading: programData.data.therapies.heading,
        description: programData.data.therapies.description,
        therapies: programData.data.therapies.therapies.map((therapy: any) => ({
          title: therapy.title,
          details: therapy.details,
        })),
      },
      amenities: {
        img: programData.data.amenities.img,
        heading: programData.data.amenities.heading,
        description: programData.data.amenities.description,
      },
      cta: {
        heading: programData.data.cta.heading,
        text: programData.data.cta.text,
        buttonText: programData.data.cta.buttonText,
      },
      disorders: {
        heading: programData.data.disorders.heading,
        headingTwo_Part_1: programData.data.disorders.headingTwo_Part_1,
        headingTwo_Part_2: programData.data.disorders.headingTwo_Part_2,
        headingTwo_Part_3: programData.data.disorders.headingTwo_Part_3,
        disorders: programData.data.disorders.disorders.map((disorder) => ({
          link: disorder.link,
          title: disorder.title,
          image: disorder.image,
        })),
      },
      testimonials: {
        list: programData.data.testimonials.list.map((testimonial) => ({
          name: testimonial.name,
          position: testimonial.position,
          text: testimonial.text,
          image: testimonial.image,
        })),
      },
      faq: {
        heading: programData.data.faq.heading,
        faq: programData.data.faq.faq.map((item: any) => ({
          title: item.title,
          details: item.details,
        })),
      },
      otherTreatments: {
        heading: programData.data.otherTreatments.heading,
        buttonText: programData.data.otherTreatments.buttonText,
        buttonUrl: programData.data.otherTreatments.buttonUrl,
        cards: programData.data.otherTreatments.cards.map((card: any) => ({
          title: card.title,
          buttonText: card.buttonText,
          image: card.image,
        })),
      },
      treatmentGrid: {
        heading: programData.data.treatmentGrid.heading,
        subheading: programData.data.treatmentGrid.subheading,
        description: programData.data.treatmentGrid.description,
        featuredImage: programData.data.treatmentGrid.featuredImage,
        treatments: programData.data.treatmentGrid.treatments.map((treatment: any) => ({
          icon: treatment.icon,
          title: treatment.title,
          description: treatment.description,
        })),
      },
      whyChoose: {
        title: programData.data.whyChoose.title,
        content: {
          paragraph1: programData.data.whyChoose.content.paragraph1,
          paragraph2: programData.data.whyChoose.content.paragraph2,
        },
        imageUrl: programData.data.whyChoose.imageUrl,
        imageAlt: programData.data.whyChoose.imageAlt,
      },
      secondWhyChoose: {
        title: programData.data.secondWhyChoose.title,
        content: {
          paragraph1: programData.data.secondWhyChoose.content.paragraph1,
          paragraph2: programData.data.secondWhyChoose.content.paragraph2,
        },
        imageUrl: programData.data.secondWhyChoose.imageUrl,
        imageAlt: programData.data.secondWhyChoose.imageAlt,
      },
      whoNeeds: {
        heading: programData.data.whoNeeds.heading,
        headingColored: programData.data.whoNeeds.headingColored,
        headingEnd: programData.data.whoNeeds.headingEnd,
        description: programData.data.whoNeeds.description,
        listHeading: programData.data.whoNeeds.listHeading,
        listItems: programData.data.whoNeeds.listItems,
        listDescription: programData.data.whoNeeds.listDescription,
        primaryButtonText: programData.data.whoNeeds.primaryButtonText,
        phoneQuestion: programData.data.whoNeeds.phoneQuestion,
        phoneNumber: programData.data.whoNeeds.phoneNumber,
        phoneButtonText: programData.data.whoNeeds.phoneButtonText,
      },
      program12: {
        badgeText: programData.data.program12.badgeText,
        heading: programData.data.program12.heading,
        description: programData.data.program12.description,
        mainImage: programData.data.program12.mainImage,
        mainImageAlt: programData.data.program12.mainImageAlt,
        steps: programData.data.program12.steps.map((step: any) => ({
          stepNumber: step.stepNumber,
          title: step.title,
        })),
      },
    }
  };
}

export async function fetchProgramarchiveData(): Promise<Programarchive> {
  const [programData] = await getCollection(
    "pages",
    (page) => page.id === "programarchive"
  );

  return {
    data: {
      hero: {
        heading: programData.data.hero.heading,
        text: programData.data.hero.text,
      },
      about: {
        headingOne: programData.data.about.headingOne,
        textOne: programData.data.about.textOne,
        headingTwo: programData.data.about.headingTwo,
        textTwo: programData.data.about.textTwo,
        images: {
          imageOne: programData.data.about.images.imageOne,
          imageTwo: programData.data.about.images.imageTwo,
        },
      },
      cta: {
        heading: programData.data.cta.heading,
        text: programData.data.cta.text,
        buttonText: programData.data.cta.buttonText,
      },
      footerCta: {
        heading: programData.data.footerCta.heading,
        text: programData.data.footerCta.text,
        buttonText: programData.data.footerCta.buttonText,
      },
      coreValues: {
        heading: programData.data.coreValues.heading,
        text: programData.data.coreValues.text,
        list: programData.data.coreValues.list.map((item: any) => ({
          title: item.title,
          description: item.description,
        })),
        buttonText: programData.data.coreValues.buttonText,
      },
      programs: {
        heading: programData.data.programs.heading,
        text: programData.data.programs.text,
        programs: programData.data.programs.programs.map((program: any) => ({
          title: program.title,
          description: program.description,
          image: program.image,
        })),
      },
      facility: {
        heading: programData.data.facility.heading,
        text: programData.data.facility.text,
        buttonText: programData.data.facility.buttonText,
        images: {
          imageOne: programData.data.facility.images.imageOne,
          imageTwo: programData.data.facility.images.imageTwo,
        },
      },
      approach: {
        headingOne: programData.data.approach.headingOne,
        textOne: programData.data.approach.textOne,
        headingTwo: programData.data.approach.headingTwo,
        textTwo: programData.data.approach.textTwo,
        images: {
          imageOne: programData.data.approach.images.imageOne,
          imageTwo: programData.data.approach.images.imageTwo,
        },
      },
      faq: {
        heading: programData.data.faq.heading,
        faq: programData.data.faq.faq.map((item: any) => ({
          title: item.title,
          details: item.details,
        })),
      },
    },
  };
}

export async function fetchTeamData(): Promise<Team> {
  const [team] = await getCollection(
    "pages",
    (page) => page.id === "team"
  );

  return {
    data: {
      hero: {
        heading: team.data.hero.heading,
        text: team.data.hero.text,
      },
      cta: {
        heading: team.data.cta.heading,
        text: team.data.cta.text,
        buttonText: team.data.cta.buttonText,
      },
      team: {
        heading: team.data.team.heading,
        buttonText: team.data.team.buttonText,
        description: team.data.team.description,
        team: team.data.team.team.map((member) => ({
          name: member.name,
          designation: member.designation,
          image: member.image,
        })),
      },
      faq: {
        heading: team.data.faq.heading,
        faq: team.data.faq.faq.map((item) => ({
          title: item.title,
          details: item.details,
        })),
      },
    },
  };
}

export async function fetchTreatmentarchive(): Promise<Treatmentarchive> {
  const [treatmentArchive] = await getCollection(
    "pages",
    (page) => page.id === "treatmentarchive"
  );

  return {
    data: {
      hero: {
        heading: treatmentArchive.data.hero.heading,
        text: treatmentArchive.data.hero.text,
      },
      about: {
        headingOne: treatmentArchive.data.about.headingOne,
        textOne: treatmentArchive.data.about.textOne,
        headingTwo: treatmentArchive.data.about.headingTwo,
        textTwo: treatmentArchive.data.about.textTwo,
        images: {
          imageOne: treatmentArchive.data.about.images.imageOne,
          imageTwo: treatmentArchive.data.about.images.imageTwo,
        },
      },
      cta: {
        heading: treatmentArchive.data.cta.heading,
        text: treatmentArchive.data.cta.text,
        buttonText: treatmentArchive.data.cta.buttonText,
      },
      footerCta: {
        heading: treatmentArchive.data.footerCta.heading,
        text: treatmentArchive.data.footerCta.text,
        buttonText: treatmentArchive.data.footerCta.buttonText,
      },
      coreValues: {
        heading: treatmentArchive.data.coreValues.heading,
        text: treatmentArchive.data.coreValues.text,
        list: treatmentArchive.data.coreValues.list.map((item) => ({
          title: item.title,
          description: item.description,
        })),
        buttonText: treatmentArchive.data.coreValues.buttonText,
      },
      programs: {
        heading: treatmentArchive.data.programs.heading,
        text: treatmentArchive.data.programs.text,
        programs: treatmentArchive.data.programs.programs.map((program) => ({
          title: program.title,
          description: program.description,
          image: program.image,
        })),
      },
      facility: {
        heading: treatmentArchive.data.facility.heading,
        text: treatmentArchive.data.facility.text,
        buttonText: treatmentArchive.data.facility.buttonText,
        images: {
          imageOne: treatmentArchive.data.facility.images.imageOne,
          imageTwo: treatmentArchive.data.facility.images.imageTwo,
        },
      },
      approach: {
        headingOne: treatmentArchive.data.approach.headingOne,
        textOne: treatmentArchive.data.approach.textOne,
        headingTwo: treatmentArchive.data.approach.headingTwo,
        textTwo: treatmentArchive.data.approach.textTwo,
        images: {
          imageOne: treatmentArchive.data.approach.images.imageOne,
          imageTwo: treatmentArchive.data.approach.images.imageTwo,
        },
      },
      disorders: {
        heading: treatmentArchive.data.disorders.heading,
        description: treatmentArchive.data.disorders.description,
        disorders: treatmentArchive.data.disorders.disorders.map(
          (disorder) => ({
            iconName: disorder.iconName,
            title: disorder.title,
          })
        ),
      },
      faq: {
        heading: treatmentArchive.data.faq.heading,
        faq: treatmentArchive.data.faq.faq.map((question) => ({
          title: question.title,
          details: question.details,
        })),
      },
    },
  };
}

export async function fetchBlogPageData(): Promise<BlogPage> {
  const [blogPage] = await getCollection("pages", (page) => page.id === "blog");

  return {
    data: {
      hero: {
        heading: blogPage.data.hero.heading,
        text: blogPage.data.hero.text,
        buttonText: blogPage.data.hero.buttonText,
        phoneQuestionText: blogPage.data.hero.phoneQuestionText,
        treatmentsLabel: blogPage.data.hero.treatmentsLabel,
        callButtonText: blogPage.data.hero.callButtonText,
        navItems: blogPage.data.hero.navItems.map((item) => ({
          text: item.text,
          url: item.url,
          hasDropdown: item.hasDropdown,
          sublinks: item.sublinks?.map((sublink) => ({
            text: sublink.text,
            link: sublink.link,
          })),
          sublinks2: item.sublinks2?.map((sublink) => ({
            text: sublink.text,
            link: sublink.link,
          })),
        })),
      },
       disorders: {
        heading: blogPage.data.disorders.heading,
        headingTwo_Part_1: blogPage.data.disorders.headingTwo_Part_1,
        headingTwo_Part_2: blogPage.data.disorders.headingTwo_Part_2,
        headingTwo_Part_3: blogPage.data.disorders.headingTwo_Part_3,
        disorders: blogPage.data.disorders.disorders.map((disorder) => ({
          link: disorder.link,
          title: disorder.title,
          image: disorder.image,
        })),
      },
      cta: {
        heading: blogPage.data.cta.heading,
        text: blogPage.data.cta.text,
        buttonText: blogPage.data.cta.buttonText,
        image: blogPage.data.cta.image,
        altText: blogPage.data.cta.altText,
        phoneText: blogPage.data.cta.phoneText,
        phoneNumber: blogPage.data.cta.phoneNumber,
      },
    },
  };
}

export async function fetchInsuranceData(): Promise<Insurance> {
  const [insurance] = await getCollection("pages", (page) => page.id === "insurance");

  return {
    data: {
      hero: {
        heading: insurance.data.hero.heading,
        text: insurance.data.hero.text,
        buttonText: insurance.data.hero.buttonText,
        phoneQuestionText: insurance.data.hero.phoneQuestionText,
        treatmentsLabel: insurance.data.hero.treatmentsLabel,
        callButtonText: insurance.data.hero.callButtonText,
        navItems: insurance.data.hero.navItems.map((item) => ({
          text: item.text,
          url: item.url,
          hasDropdown: item.hasDropdown,
          sublinks: item.sublinks?.map((sublink) => ({
            text: sublink.text,
            link: sublink.link,
          })),
          sublinks2: item.sublinks2?.map((sublink) => ({
            text: sublink.text,
            link: sublink.link,
          })),
        })),
      },
      contactHero: {
        title: {
          line1: insurance.data.contactHero.title.line1,
          line2: insurance.data.contactHero.title.line2,
          line3: insurance.data.contactHero.title.line3,
        },
        description: insurance.data.contactHero.description,
        bottomDescription: insurance.data.contactHero.bottomDescription,
        formTitle: insurance.data.contactHero.formTitle,
        formSubtitle: insurance.data.contactHero.formSubtitle,
        insuranceProviders: insurance.data.contactHero.insuranceProviders.map((provider) => ({
          name: provider.name,
        })),
        privacyNotice: insurance.data.contactHero.privacyNotice,
      },
      insuranceProviders: {
        heading: insurance.data.insuranceProviders.heading,
        subheading: insurance.data.insuranceProviders.subheading,
        buttonText: insurance.data.insuranceProviders.buttonText,
        callText: insurance.data.insuranceProviders.callText,
        phoneNumber: insurance.data.insuranceProviders.phoneNumber,
        footerText: insurance.data.insuranceProviders.footerText,
        verifyButtonText: insurance.data.insuranceProviders.verifyButtonText,
        providers: insurance.data.insuranceProviders.providers.map((provider) => ({
          name: provider.name,
          description: provider.description,
          logo: provider.logo,
        })),
      },
      testimonials: {
        list: insurance.data.testimonials.list.map((testimonial) => ({
          name: testimonial.name,
          position: testimonial.position,
          text: testimonial.text,
          image: testimonial.image,
        })),
      },
      cta: {
        heading: insurance.data.cta.heading,
        text: insurance.data.cta.text,
        buttonText: insurance.data.cta.buttonText,
        image: insurance.data.cta.image,
        altText: insurance.data.cta.altText,
        phoneText: insurance.data.cta.phoneText,
        phoneNumber: insurance.data.cta.phoneNumber,
      },
      insuranceVerification: {
        title: {
          line1: insurance.data.insuranceVerification.title.line1,
          line2: insurance.data.insuranceVerification.title.line2,
        },
        description: insurance.data.insuranceVerification.description,
        features: insurance.data.insuranceVerification.features.map((feature) => ({
          text: feature.text,
        })),
        cta: {
          heading: insurance.data.insuranceVerification.cta.heading,
          subheading: insurance.data.insuranceVerification.cta.subheading,
          buttonText: insurance.data.insuranceVerification.cta.buttonText,
          callText: insurance.data.insuranceVerification.cta.callText,
          phoneNumber: insurance.data.insuranceVerification.cta.phoneNumber,
        },
      },
    },
  };
}

export async function fetchLocationData(): Promise<Location> {
  const [locationData] = await getCollection(
    "pages",
    (page) => page.id === "location"
  );

  return {
    data: {
      hero: {
        heading: locationData.data.hero.heading,
        text: locationData.data.hero.text,
        buttonText: locationData.data.hero.buttonText,
        phoneQuestionText: locationData.data.hero.phoneQuestionText,
        treatmentsLabel: locationData.data.hero.treatmentsLabel,
        callButtonText: locationData.data.hero.callButtonText,
        navItems: locationData.data.hero.navItems.map((item: any) => ({
          text: item.text,
          url: item.url,
          hasDropdown: item.hasDropdown,
          sublinks: item.sublinks?.map((sublink: any) => ({
            text: sublink.text,
            link: sublink.link,
          })),
          sublinks2: item.sublinks2?.map((sublink: any) => ({
            text: sublink.text,
            link: sublink.link,
          })),
        })),
      },
      locationHero: {
        header: locationData.data.locationHero.header,
        subheaderHighlight: locationData.data.locationHero.subheaderHighlight,
        description: locationData.data.locationHero.description,
        locationInfo: {
          title: locationData.data.locationHero.locationInfo.title,
          addressLine1: locationData.data.locationHero.locationInfo.addressLine1,
          addressLine2: locationData.data.locationHero.locationInfo.addressLine2,
          email: locationData.data.locationHero.locationInfo.email,
          phone: locationData.data.locationHero.locationInfo.phone,
          hours: locationData.data.locationHero.locationInfo.hours,
          buttonText: locationData.data.locationHero.locationInfo.buttonText,
        },
      },
      disorders: {
        heading: locationData.data.disorders.heading,
        headingTwo_Part_1: locationData.data.disorders.headingTwo_Part_1,
        headingTwo_Part_2: locationData.data.disorders.headingTwo_Part_2,
        headingTwo_Part_3: locationData.data.disorders.headingTwo_Part_3,
        disorders: locationData.data.disorders.disorders.map((disorder: any) => ({
          link: disorder.link,
          title: disorder.title,
          image: disorder.image,
        })),
      },
      cta: {
        heading: locationData.data.cta.heading,
        text: locationData.data.cta.text,
        buttonText: locationData.data.cta.buttonText,
        image: locationData.data.cta.image,
        altText: locationData.data.cta.altText,
        phoneText: locationData.data.cta.phoneText,
        phoneNumber: locationData.data.cta.phoneNumber,
      },
    },
  };
}

export async function fetchTreatmentData(): Promise<Treatment> {
  const [treatment] = await getCollection(
    "pages",
    (page) => page.id === "treatment"
  );

  return {
    data: {
      hero: {
        heading: treatment.data.hero.heading,
        text: treatment.data.hero.text,
        buttonText: treatment.data.hero.buttonText,
        phoneQuestionText: treatment.data.hero.phoneQuestionText,
        treatmentsLabel: treatment.data.hero.treatmentsLabel,
        callButtonText: treatment.data.hero.callButtonText,
        navItems: treatment.data.hero.navItems.map((item: any) => ({
          text: item.text,
          url: item.url,
          hasDropdown: item.hasDropdown,
          sublinks: item.sublinks?.map((sublink: any) => ({
            text: sublink.text,
            link: sublink.link,
          })),
          sublinks2: item.sublinks2?.map((sublink: any) => ({
            text: sublink.text,
            link: sublink.link,
          })),
        })),
      },
      treatmentHero: {
        heading: treatment.data.treatmentHero.heading,
        tagline: treatment.data.treatmentHero.tagline,
        title: treatment.data.treatmentHero.title,
        subtitle: treatment.data.treatmentHero.subtitle,
        description: treatment.data.treatmentHero.description,
        approaches: treatment.data.treatmentHero.approaches.map((approach: any) => ({
          id: approach.id,
          title: approach.title,
          description: approach.description,
        })),
      },
      treatment2: {
        heading: treatment.data.treatment2.heading,
        headingHighlight: treatment.data.treatment2.headingHighlight,
        description: treatment.data.treatment2.description,
        symptoms: treatment.data.treatment2.symptoms.map((symptom: any) => ({
          icon: symptom.icon,
          text: symptom.text,
        })),
        buttonText: treatment.data.treatment2.buttonText,
        phoneText: treatment.data.treatment2.phoneText,
        phoneNumber: treatment.data.treatment2.phoneNumber,
        image: treatment.data.treatment2.image,
      },
      disorders: {
        heading: treatment.data.disorders.heading,
        headingTwo_Part_1: treatment.data.disorders.headingTwo_Part_1,
        headingTwo_Part_2: treatment.data.disorders.headingTwo_Part_2,
        headingTwo_Part_3: treatment.data.disorders.headingTwo_Part_3,
        disorders: treatment.data.disorders.disorders.map((disorder: any) => ({
          link: disorder.link,
          title: disorder.title,
          image: disorder.image,
        })),
      },
      cta: {
        heading: treatment.data.cta.heading,
        text: treatment.data.cta.text,
        buttonText: treatment.data.cta.buttonText,
        image: treatment.data.cta.image,
        altText: treatment.data.cta.altText,
        phoneText: treatment.data.cta.phoneText,
        phoneNumber: treatment.data.cta.phoneNumber,
      },
    },
  };
}

export async function fetchPricingData(): Promise<Pricing> {
  const [pricing] = await getCollection(
    "pages",
    (page) => page.id === "pricing"
  );

  return {
    data: {
      hero: {
        heading: pricing.data.hero.heading,
        text: pricing.data.hero.text,
        buttonText: pricing.data.hero.buttonText,
        phoneQuestionText: pricing.data.hero.phoneQuestionText,
        treatmentsLabel: pricing.data.hero.treatmentsLabel,
        callButtonText: pricing.data.hero.callButtonText,
        navItems: pricing.data.hero.navItems.map((item: any) => ({
          text: item.text,
          url: item.url,
          sublinks: item.sublinks?.map((sublink: any) => ({
            text: sublink.text,
            link: sublink.link,
          })),
          sublinks2: item.sublinks2?.map((sublink: any) => ({
            text: sublink.text,
            link: sublink.link,
          })),
        })),
      },
      disorders: {
        heading: pricing.data.disorders.heading,
        headingTwo_Part_1: pricing.data.disorders.headingTwo_Part_1,
        headingTwo_Part_2: pricing.data.disorders.headingTwo_Part_2,
        headingTwo_Part_3: pricing.data.disorders.headingTwo_Part_3,
        disorders: pricing.data.disorders.disorders.map((disorder: any) => ({
          link: disorder.link,
          title: disorder.title,
          image: disorder.image,
        })),
      },
     
    },
  };
}
