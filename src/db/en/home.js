import { photos, icons } from "../../images/index";
import videoBg from "../../images/videoBg.mp4";

export const home = {
  imgBg: photos.splash,
  videoBg: videoBg,
  header: {
    companyName: "WE ARE SMARTQUBE ENGINEERS",
    slogan: "WE WILL DESIGN THE FUTURE",
    description:
      "SMARTqube sp z.o.o is a team of engineers who passionately design the future using the latest technological solutions.",
    greenBtn: "contact",
    transparentBtn: "about",
  },
  about: {
    subtitle: "welcome to",
    title: "SMARTqube",
    abstract: `SMARTqube was born from the parent company ICEqube in the USA. SMARTqube is nestled in Wrocław, Poland in the middle of the EU allowing for quick access to the EU and the Middle East. Acting as a distributor and servicer of ICEqube products, we leverage access to excellent products and experience in integration to deliver components, engineering, services, and integrated solutions.`,
    section1: `The most obvious challenge of modern world is not only to provide a possibility of solving the single
      issue - it is to assure a global comprehensive support, accessibility and a technical approach that
      allows for effective improvement of industrial production processes. This can only be achieved
      through a detailed analysis, design, selection of a proper equipment and elimination of the impact of
      negative factors.`,
    section2: `This is the role that SMARTqube intends to take - a logistic and service center for ICEqube's climate control and enclosures portfolio in the EU and the added value provider as the system integration facility. With our own warehouse, modern workshop, and highly experienced team, our activities lead to simplifying the access for the US-originating solutions and extending customer care by local technical support, service, logistics handling, and turn-key engineering.`,
    button: ["about", "see more"],
  },
  offers: {
    title: "WORLD OF POSSIBILITIES",
    subtitle: "OUR OFFER",
    carts: [
      {
        image: photos.iceCube,
        title: "Cooling solutions",
        description: `Ice Qube supplies a wide variety of high
       quality climate control products. Smart
       Qube utilizes their solutions and also
       acts as a distributor for Europe.`,
        button: ["Read more", "https://www.iceqube.com"],
      },
      {
        image: photos.integration,
        title: "Integration",
        description: `We specialize in integration of industrial
          automation systems & process analytics.
          Turn-key concept is our domain. Starting
          from design, through assembly, finished
          with successful FAT.`,
        button: ["Read more", "integration"],
      },
      {
        image: photos.fieldServices,
        title: "Field Services",
        description: `Our experienced team is supporting
        our partners on-site as well. SMARTqube
        provides field assembly, mechanical &
        electrical works, SAT, comsissioning &
        start up services.`,
        button: ["Read more", "services"],
      },
    ],
  },
  callToaction: {
    titile: "Don't Hesitate to Contact Us Any Time.",
    subtitle: "Have Any Questions ?",
    button: ["Contact us", "contact"],
  },

  mission: {
    src: icons.world,
    title: "QUALITY COMES FIRST",
    subtitle: "OUR MISSION",
    description: `Our team is our greatest asset, which is why we invest in their
        continuous development to provide them not only with the knowledge
        and tools needed to do their job, but also with job satisfaction
        and a sense of belonging to our company. As a result, our
        customers receive the most advanced solutions in the field of
        refrigeration and air conditioning, which meet their requirements
        and are tailored to their needs. Our high quality services also
        have a positive impact on the environment, thanks to the use of
        eco-friendly technologies and our focus on energy efficiency.`,
  },
};
