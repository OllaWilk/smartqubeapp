import { icons } from "../../images/index";

export const contact = {
  contactTitle: "Do You Have Any Project?",
  cartSubtitle: "Please Drop a Message",
  cartDescription:
    "Get in touch and let us know how we can help. Fill out the form and we'll be in touch as soon as possible.",
  contactCart: [
    {
      imgUrl: icons.location,
      companyName: "Smartqube",
      street: "ul. Rakietowa 29E",
      zip: "51-311 Wrocław, Poland",
    },
    {
      imgUrl: icons.envelop,
      mail: "info@smartqube.pl",
    },
    {
      imgUrl: icons.hours,
      hours: "Business Hours:",
      workWeek: "Mon-Fri: 8am - 4pm",
      weekend: "Sat, Sun: Closed",
    },
    {
      VAT: "VAT ID: PL 897 190 96 51",
      USDIBAN: "USD IBAN: 00 0000 0000 0000 0000 ",
      EURIBAN: "USD IBAN: 00 0000 0000 0000 0000 ",
    },
  ],
  contactCartUSA: [
    {
      imgUrl: icons.location,
      companyName: "Smartqube ",
      street: "141 Wilson Avenue ",
      zip: "Greensburg, PA 15601",
    },
    {
      imgUrl: icons.envelop,
      mail: "sales@smartqube.com",
    },
    {
      imgUrl: icons.hours,
      hours: "Business Hours:",
      workWeek: "Mon-Fri: 8am - 6pm Eastern Standard Time",
      weekend: "Sat, Sun: Closed",
    },
    {
      VAT: "VAT ID: PL 897 190 96 51",
      USDIBAN: "USD IBAN: 00 0000 0000 0000 0000 ",
      EURIBAN: "USD IBAN: 00 0000 0000 0000 0000 ",
    },
  ],
  contactForm: {
    name: "Enter Your name *",
    companyName: "Enter Your company name *",
    email: "Enter Your valid email *",
    position: "Enter Your job position",
    phoneNumber: "Enter Your phone number *",
    message: "Enter Your message *",
    requiredFields:
      "Please note: All fields marked with an asterisk (*) are required",
  },
  errorsMessages: {
    name: "Please enter your name",
    phone: "Please enter your phone number",
    companyName: "Please enter your company name",
    email: "Please enter a valid email address ",
    message: "Please enter your message",
  },
};
