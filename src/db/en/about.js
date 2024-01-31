import { photos, logos, icequbeProducts } from "../../images/index";

export const about = {
  imgBg: photos.splash,
  header: {
    companyName: "WE WILL DESIGN THE FUTURE",
    slogan: "SMARTqube",
    description: "Our team is our greatest asset.",
    greenBtn: "contact",
    transparentBtn: "solutions",
    transparentBtnLinkTo: "coolingsolutions",
    greenBtnLinkTo: "contact",
  },
  companyDescription: [
    {
      header: "OUR ROOTS",
      section1:
        "SMARTqube is a Polish company closely linked with ICEqube in Pennsylvania, USA. We bring together the best assets from both origins, blending the reliability of our solutions with a flexible and innovative approach. Our synergy creates a unique foundation, ensuring top-notch quality and cutting-edge innovation in everything we do.",
      section2:
        "Welcome to a seamless ingenuity of precision and entrepreneurship.",
      img: photos.iceCube,
    },
    {
      header: "OUR PEOPLE",
      section1:
        "At SMARTqube, we each contribute years of experience from diverse international organizations, culminating in a united vision and boundless passion for creativity. Our collective journey transcends mere expertise, encompassing a wealth of ideas and unwavering commitment.",
      section2:
        "Our efforts and proficiency have left an impact on various fronts, including power plants in the Middle East, steel mills in Eastern Europe, and platforms in the North Sea. The core of our shared experience revolves around process analysis and measurements (instrumentation).",
      img: logos.logo,
    },
  ],
  team: {
    slogan: "DISCOVER OUR CREW",
    title: "OUR PEOPLE ARE OUR GREATEST ASSET",
    text: "In SMARTqube, we believe that the success of our company lies in the individuals who drive it. Our crew is composed not only of professionals in their fields but, more importantly, of people brimming with passion, creativity, and dedication",
    galery:
      "https://images.pexels.com/photos/5676679/pexels-photo-5676679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  offers: {
    title: "Explore Our  Services",
    carts: [
      {
        id: 1,
        title: "EXCLUSIVE ICEQUBE PRODUCT DISTRIBUTOR",
        content:
          "We are the sole distributors of ICEqube products in Europe. Our local warehousing, coupled with a dedicated logistics office, collaborates to enhance the accessibility of ICEqube products. Experience quicker delivery times and reduced shipping costs for your convenience!",
        img: icequbeProducts.evSeries,
      },
      {
        id: 2,
        title: "TENDER SUPPORT, SITE APPRAISALS AND FEASIBILITY STUDIES",
        content:
          "Our customer support team, along with a network of channel partners across Europe, is ready to assist you with their best knowledge for selecting the right solutions to meet even the most demanding applications. At SMARTqube, we prioritize your satisfaction and success!",
        img: photos.support,
      },
      {
        id: 3,
        title: "DESIGN AND INTEGRATION",
        content:
          "At the heart of our reputation lies our Integrated Solutions sector. Our well-equipped workshop and dedicated project engineering team bring your visions to life, handling complete turn-key projects. It's more than just a construction site - from the initial spark of an idea to the final commissioning and startup of your system, your project is in safe hands.",
        img: photos.tenderSupport,
      },

      {
        id: 4,
        title: "EXPERIENCED SERVICE & ENGINEERING TEAM",
        content:
          "Whenever site commissioning, maintenance, repairs, or modifications are needed, you can count on our friendly service group to tackle even the trickiest technical issues with a smile! There's nothing impossible for us!",
        img: photos.fieldServices,
      },

      {
        id: 5,
        title: "PACKING AND LOGISTICS",
        content:
          "With a central location in Wrocław, Poland, our effective operations span across the entire European territory, but it's not limited to it!",
        img: photos.logistic,
      },
    ],
    cartsUSA: [
      {
        id: 1,
        title: "EXCLUSIVE ICEQUBE PRODUCT DISTRIBUTOR",
        content:
          "We are the sole distributors of ICEqube products in Europe. Our local warehousing, coupled with a dedicated logistics office, collaborates to enhance the accessibility of ICEqube products. Experience quicker delivery times and reduced shipping costs for your convenience!",
        img: icequbeProducts.evSeries,
      },
      {
        id: 2,
        title: "TENDER SUPPORT, SITE APPRAISALS AND FEASIBILITY STUDIES",
        content:
          "Our customer support team, along with a network of channel partners across Europe, is ready to assist you with their best knowledge for selecting the right solutions to meet even the most demanding applications. At SMARTqube, we prioritize your satisfaction and success!",
        img: photos.support,
      },
      {
        id: 3,
        title: "DESIGN AND INTEGRATION",
        content:
          "At the heart of our reputation lies our Integrated Solutions sector. Our well-equipped workshop and dedicated project engineering team bring your visions to life, handling complete turn-key projects. It's more than just a construction site - from the initial spark of an idea to the final commissioning and startup of your system, your project is in safe hands.",
        img: photos.tenderSupport,
      },

      {
        id: 4,
        title: "EXPERIENCED SERVICE & ENGINEERING TEAM",
        content:
          "Whenever site commissioning, maintenance, repairs, or modifications are needed, you can count on our friendly service group to tackle even the trickiest technical issues with a smile! There's nothing impossible for us!",
        img: photos.fieldServices,
      },

      {
        id: 5,
        title: "PACKING AND LOGISTICS",
        content:
          "With a central location in Greensburg, PA, our effective operations span across the entire American continent, but they're not limited to it!",
        img: photos.logistic,
      },
    ],
  },
  callToaction: {
    titile: "Don't Hesitate to Contact Us Any Time.",
    subtitle: "Have Any Questions ?",
    button: ["Contact us", "contact"],
  },

  location: {
    src: photos.headquarters,
    title: "Wrocław Headquarters",
    subtitle: "VISIT OUR SMARTqube TEAM",
    description: `Our Smartqube facility is strategically located in Wrocław, Poland, right next to the A8 highway, ensuring easy access for all types of freight, including oversize transport. Guests can conveniently reach Wrocław International Airport, just 5 minutes away. Our headquarters encompass a warehouse, a duty-free zone for incoming equipment from the United States, a workshop, and offices`,
  },
  locationUSA: {
    src: photos.sartQubeHeadquarters,
    title: "Greensburg, PA Headquarters",
    subtitle: "VISIT OUR SMARTqube TEAM",
    description:
      "Our Smartqube facility in Greensburg, PA, is ideally located at 141 Wilson Avenue, close to major roads, ensuring efficient logistics and transport. Situated in a dynamically developing region, we guarantee access to a team of professionals and an extensive infrastructure. Our warehouse along with the offices offers a safe and effective environment for our operations, allowing us to meet the growing business demands.",
  },
};
