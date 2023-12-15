import { photos, icons, logos, icequbeProducts } from "../../images/index";

export const solutions = {
  carousel: {
    header: "Calculate Your Air Conditioner with ",
    span: "IceQube",
    text: "enclosures fan systems, thermoelectric air conditioners , heat exchangers, hazardous location air conditioners, hazardous location heat exchangers, server rack/shelter container coolers",
    button: "VISIT THE WEBSITE AND CALCULATE YOUR PROJECT TODAY",
    linkTo: "https://www.iceqube.com/technical/calculator/",
    images: [icequbeProducts.GroupPicture, icequbeProducts.evSeries],
  },
  manualsSection: {
    title:
      "Find the manual you need today and ensure your systems are running smoothly and safely",
    subtitle: "Manuals",
    description:
      "Find the manual you need today and ensure your systems are running smoothly and safely",
    btnNames: ["EV Series", "EVZ2 Series", "EX Series"],

    downloads: {
      EV: [
        {
          series: "Evolution Series",
          imgLogo: logos.evLogo,
          text: "EV Series by Ice Qube redefines industry standards with cutting-edge technology, offering UL-certified air conditioning solutions with enhanced efficiency, durability, and a high operating temperature of 140°F/60°C.",
          name: "Safe area Air Conditioners",
          url: "https://www.iceqube.com/manuals/QD-ENG-69%20Operation%20and%20Installation%20Manual%20-%20Evolution%20Series%20Rev%203.pdf",
        },
        {
          name: "Enclosure Air Conditioners Quick Programming Guide",
          url: "https://www.iceqube.com/manuals/Quick%20Programming%20Guide%20-%20May%202019.pdf",
        },
        {
          name: "Ethernet LCD Controller",
          url: "https://www.iceqube.com/manuals/QD-ENG-16%20Operation%20and%20Installation%20Manual%20-%20Ethernet.REV2.pdf",
        },
      ],
      EVZ2: [
        {
          series: "Evolution Series Zone 2",
          imgLogo: logos.evz2Logo,

          text: "The Evolution Series by Ice Qube introduces advanced cooling solutions for hazardous locations with features like Subpanel Airflow Technology, solid-state tech, and high operating temperatures, revolutionizing efficiency and durability in the industry.",
          name: "Zone 2 Air Conditioners",
          url: "https://www.iceqube.com/manuals/QD-ENG-71%20Operation%20and%20Installation%20Manual%20-%20Zone%202%20Evolution%20series%20ATEX%20IECEx%20REV7.pdf",
        },
        {
          name: "Troubleshooting",
          url: "https://www.iceqube.com/manuals/troubleshooting.pdf",
        },
        {
          name: "Enclosure Air Conditioners Quick Programming Guide",
          url: "https://www.iceqube.com/manuals/Quick%20Programming%20Guide%20-%20May%202019.pdf",
        },
      ],
      EX: [
        {
          series: "Evolution Series Zone 2",
          imgLogo: logos.evz2Logo,
          text: "The Evolution Series by Ice Qube introduces advanced cooling solutions for hazardous locations with features like Subpanel Airflow Technology, solid-state tech, and high operating temperatures, revolutionizing efficiency and durability in the industry.",

          name: "Zone 1 Air Conditioners",
          url: "https://www.iceqube.com/manuals/QD-ENG-74%20Operation%20and%20Installation%20Manual%20-%20Zone%201%20EX%20series%20ATEX%20IECEx%20Rev%201.pdf",
        },
        {
          name: "Troubleshooting",
          url: "https://www.iceqube.com/manuals/troubleshooting.pdf",
        },
      ],
    },
  },
};
