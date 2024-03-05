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
    submit: "submit",
    isOver18: "I declare that I am over 18 years old; *",
    dataProcessingConsent:
      "I consent to the processing of my personal data in accordance with the laws applicable in my place of residence and the place of operation by SmartQube, based in Wrocław, ul. Rakietowa 29E, 54-615 Wrocław KRS: 0000984616, NIP: 8971909651; REGON: 522685620, regulations concerning the provision of services electronically and regulations concerning the protection of personal data for the purpose of transmitting and sending commercial information in the future. The provision of personal data is voluntary but necessary for the proper provision of ordered services. I have been informed that I have the right to access my data, the possibility of correcting it, and the request to cease processing it – noting that ceasing the processing of personal data will result in the cessation of services. The data administrator is SmartQube with its registered office in Wrocław, ul. Rakietowa 29E, 54-615 Wrocław KRS: 0000984616, NIP: 8971909651; REGON: 522685620 *",
    GDPR: "I consent to the processing of my personal data in accordance with the regulations on the protection of personal data (including in particular Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC, and the Act of 10 May 2018 on the protection of personal data) in connection with sending an inquiry via the contact form. Providing personal data is voluntary but necessary for processing the query. I have been informed that I have the right to access my data, the possibility of correcting it, and the request to cease its processing. The data administrator is SmartQube with its registered office in Wrocław, ul. Rakietowa 29E, 54-615 Wrocław KRS: 0000984616, NIP: 8971909651; REGON: 522685620",
    gdrLink: [
      " Full information on personal data processing is here.",
      "http://localhost:3000/privacy",
    ],
  },
  errorsMessages: {
    name: "Please enter your name",
    phone: "Please enter your phone number",
    companyName: "Please enter your company name",
    email: "Please enter a valid email address ",
    message: "Please enter your message",
  },
};
