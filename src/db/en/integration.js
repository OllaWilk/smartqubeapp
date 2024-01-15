import { photos, icons } from "../../images/index";

export const integration = {
  header: "Comprehensive Industrial Integration Solutions",
  whatIsIntegration: {
    title: "THE ESSENCE OF INTEGRATION",
    subtitle: "STREAMLINING COMPLEX SYSTEMS",
    paragraphOne:
      "Integration is a term that describes a range of activities to be undertaken during execution of any project that results in complex industrial system for example an analyzer shelter or VFD enclosure.",
    paragraphTwo: " How is the Integration different from Assembly ?",
    paragraphTree:
      "Assembly is just one stage of the entire project execution process. Integration contains Assembly along with Engineering, Procurement, Testing, Packing, Loading, Shipment and Site Commissioning.",
    img: photos.integrator,
  },
  design: {
    title: "ENGINEERING DESIGN",
    subtitle: "OUR COMPETENCIES",
    designCart: [
      {
        title: "Mechanical",
        elements: [
          "enclosures",
          "cable trays",
          "support structures",
          "fixing technology",
          "heat load analysis",
        ],
        designIcon: icons.mechanical,
      },
      {
        title: "Electrical",
        elements: [
          "LV Power Distribution",
          "PLC based Control System",
          "Serial Communication",
          "Fiber Optic & Ethernet",
        ],
        designIcon: icons.electrical,
      },
      {
        title: "Ex Design",
        elements: [
          "flameproof enclosures",
          "purged systems",
          "intrinsically safe loops",
          "area classification",
        ],
        designIcon: icons.explose,
      },
    ],
  },
  callToaction: {
    titile: "Don't Hesitate to Contact Us Any Time.",
    subtitle: "Have Any Questions ?",
    button: ["Contact us", "contact"],
  },
  projectExecution: {
    title: "PROJECT EXECUTION",
    subtitle: "OUR COMPETENCIES",
    description:
      "In our line of expertise, project execution is at the core of what we do. We specialize in meticulously planning, proficiently procuring, efficiently managing warehouse and assembly floors, and seamlessly handling logistics and export operations. With a focus on precision and attention to detail, we ensure that every project is executed with excellence, delivering results that meet and exceed expectations. Our commitment to project execution is the foundation of our success and the key to delivering high-quality solutions to our clients.",
    img: photos.logistic,
    list: [
      "Scheduling",
      "Procurement",
      "Warehouse & Assembly Floor management",
      "Logistics and Export",
    ],
  },
  knowledge: {
    title: "SPECIALIZED KNOWLEDGE",
    subtitle: "OUR COMPETENCIES",
    description:
      "We specialize in the commissioning and servicing of OEM devices, ensuring they operate at peak performance. With our expert knowledge and experience, we adhere to international standards to guarantee quality and reliability. Our expertise extends to specialized design, such as Analytical Systems Design, where we excel in creating tailored solutions for specific needs.",
    img: photos.designer,
    list: [
      "Commissioning and Service of OEM devices",
      "International Standards",
      "Specialized Design (e.g: Analytical Systems Design)",
    ],
  },
};
