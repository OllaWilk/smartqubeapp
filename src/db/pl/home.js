import { icons, photos } from "../../images";
import videoBg from "../../images/videoBg.mp4";

export const home = {
  imgBg: photos.splash,
  videoBg: videoBg,
  header: {
    companyName: "JESTEŚMY INŻYNIERAMI SMARTqube",
    slogan: "BUDUJEMY PRZYSZŁOŚĆ",
    description:
      "SMARTqube sp z o.o. to zespół inżynierów, którzy z pasją projektują przyszłość, korzystając z najnowszych rozwiązań technologicznych.",
    greenBtn: "kontakt",
    greenBtnLinkTo: "contact",
    transparentBtn: "o nas",
    transparentBtnLinkTo: "about",
  },
  about: {
    subtitle: "witaj w",
    title: "SMARTqube",
    abstract: `SMARTqube powstało jako filia firmy macierzystej ICEqube w USA. SMARTqube mieści się we Wrocławiu, Polska, w sercu UE, co umożliwia szybki dostęp do rynków UE i Bliskiego Wschodu. Jako dystrybutor i serwisant produktów ICEqube wykorzystujemy dostęp do doskonałych produktów oraz doświadczenie w integracji, aby dostarczać komponenty, inżynierię, usługi i rozwiązania zintegrowane.`,
    section1: `Najbardziej oczywistym wyzwaniem współczesnego świata nie jest tylko rozwiązywanie pojedynczych problemów, ale zapewnienie globalnego wsparcia, dostępności i podejścia technicznego, które pozwoli na efektywne poprawienie procesów produkcji przemysłowej. Można to osiągnąć tylko poprzez szczegółową analizę, projektowanie, wybór odpowiedniego sprzętu i eliminację negatywnych czynników.`,
    section2: `To właśnie rolę zamierza pełnić SMARTqube - centrum logistyczne i serwisowe portfolio kontroli klimatu i obudów ICEqube w UE oraz dostawca dodanej wartości jako obiekt integracji systemowej. Dzięki naszemu własnemu magazynowi, nowoczesnemu warsztatowi i doświadczonemu zespołowi nasze działania prowadzą do uproszczenia dostępu do rozwiązań pochodzących z USA i rozszerzenia obsługi klienta o lokalne wsparcie techniczne, obsługę logistyczną i inżynierię "pod klucz".`,
    button: ["about", "zobacz więcej"],
  },
  offers: {
    title: "ŚWIAT MOŻLIWOŚCI",
    subtitle: "NASZA OFERTA",
    carts: [
      {
        image: photos.iceCube,
        title: "Rozwiązania chłodzenia",
        description: `Ice Qube dostarcza różnorodne produkty kontroli klimatu najwyższej jakości. Smart Qube wykorzystuje ich rozwiązania i pełni rolę dystrybutora w Europie.`,
        button: ["Czytaj więcej", "https://www.iceqube.com"],
      },
      {
        image: photos.integration,
        title: "Integracja",
        description: `Specjalizujemy się w integracji systemów automatyzacji przemysłowej i analizy procesów. Naszą domeną jest koncepcja "pod klucz". Rozpoczynając od projektu, poprzez montaż, kończąc na udanym FAT.`,
        button: ["Czytaj więcej", "integration"],
      },
      {
        image: photos.fieldServices,
        title: "Usługi terenowe",
        description: `Nasz doświadczony zespół wspiera naszych partnerów na miejscu. SMARTqube oferuje montaż na miejscu, prace mechaniczne i elektryczne, SAT, obsługę logistyczną oraz uruchamianie i rozruch usług.`,
        button: ["Czytaj więcej", "services"],
      },
    ],
  },
  callToaction: {
    titile: "Nie wahaj się kontaktować z nami o dowolnej porze.",
    subtitle: "Masz jakieś pytania?",
    button: ["Skontaktuj się z nami", "contact"],
  },

  mission: {
    src: icons.world,
    title: "JAKOŚĆ NA PIERWSZYM MIEJSCU",
    subtitle: "NASZA MISJA",
    description: `Nasz zespół to naszy największy atut, dlatego inwestujemy w ich ciągły rozwój, zapewniając im nie tylko wiedzę i narzędzia potrzebne do wykonywania pracy, ale także satysfakcję zawodową i poczucie przynależności do naszej firmy. Dzięki temu nasi klienci otrzymują najbardziej zaawansowane rozwiązania w dziedzinie chłodnictwa i klimatyzacji, które spełniają ich wymagania i są dostosowane do ich potrzeb. Nasze usługi wysokiej jakości mają również pozytywny wpływ na środowisko, dzięki zastosowaniu ekologicznych technologii i naszej koncentracji na efektywności energetycznej.`,
  },
};
