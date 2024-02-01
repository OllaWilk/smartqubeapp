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
      USDIBAN: "USD IBAN: 17 1050 1575 1000 0090 3282 4709",
      EURIBAN: "EUR IBAN: 40 1050 1575 1000 0090 3282 4683",
      PLNIBAN: "PLN IBAN: 62 1050 1575 1000 0090 3282 4675",
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
