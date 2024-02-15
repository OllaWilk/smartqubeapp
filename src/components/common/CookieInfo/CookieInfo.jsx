import React, { useState, useEffect } from "react";
import styles from "./CookieInfo.module.scss";
import { DescriptionSubtitle } from "../Titles/DescriptionSubtitle/DescriptionSubtitle";
import { Link } from "react-router-dom";

export const CookieInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    console.log(cookiesAccepted);

    if (!cookiesAccepted) {
      console.log(cookiesAccepted);
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className={styles.cookieInfo}>
        <div className={styles.modal}></div>
        <div className={styles.info}>
          <div>
            <DescriptionSubtitle text={"Polityka Cookies"} />
            <p className={styles.text}>
              Szanowni Państwo, w ramach naszego serwisu stosujemy pliki
              cookies. Korzystanie z witryny bez zmiany ustawień dotyczących
              cookies oznacza, że będą one zamieszczane w Państwa urządzeniu
              końcowym. Jeśli nie wyrażają Państwo zgody, uprzejmie prosimy o
              dokonanie stosownych zmian w ustawieniach przeglądarki
              internetowej z tym, że może to wpłynąć na dostępność niektórych
              funkcjonalności.
            </p>
          </div>

          <div className={styles.buttonsWrap}>
            <button
              className={styles.greenTransparentBckg}
              onClick={handleAccept}
            >
              Akceptuję
            </button>
            <Link to={"/cookies"} className={styles.goToCookiePolicy}>
              * więcej o naszej polityce cookies przeczytasz <span>tutaj</span>
            </Link>
          </div>
        </div>
      </div>
    )
  );
};
