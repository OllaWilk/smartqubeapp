import React from "react";
import PropTypes from "prop-types";

import {
  CallToAction,
  GreenHeader,
  ImgOnTheLeftAndTextOnRight,
  ScrollBtn,
  SectionTitle,
} from "../../common";
import styles from "./Integration.module.scss";

export const Integration = ({ integration }) => {
  const {
    header,
    whatIsIntegration,
    design,
    callToaction,
    projectExecution,
    knowledge,
  } = integration;
  return (
    <>
      <ScrollBtn />
      <section className={styles.greenbackground}>
        <GreenHeader mainTitle={header} />
      </section>
      {/*INTEGRAGION */}
      <section id="integration" className={`${styles.integration} container`}>
        <ImgOnTheLeftAndTextOnRight
          alt={whatIsIntegration.title}
          src={whatIsIntegration.img}
          title={whatIsIntegration.title}
          subtitle={whatIsIntegration.subtitle}
          description={whatIsIntegration.paragraphOne}
          paragraphOne={whatIsIntegration.paragraphTwo}
          paragraphTwo={whatIsIntegration.paragraphTree}
        />
      </section>

      {/* DESIGN */}
      <section id="Design" className={`${styles.design}`}>
        <div className="container">
          <SectionTitle h3={design.subtitle} h2={design.title} />
          <div className={styles.designCarts}>
            {design.designCart.map((cart) => (
              <div key={cart.title} className={styles.cart}>
                <h3 className={styles.header}>{cart.title}</h3>
                <ul className={styles.list}>
                  {cart.elements.map((el) => (
                    <li key={el}>{el}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CALL TO ACTION */}
      <section id="callToActionHome" className={styles.callToActionBackground}>
        <CallToAction
          h4={callToaction.subtitle}
          h2={callToaction.titile}
          btnTitle={callToaction.button[0]}
          url={callToaction.button[1]}
        />
      </section>
      {/* Project Execution */}
      <section id="Execution" className={`${styles.execution} `}>
        <div className="container">
          <ImgOnTheLeftAndTextOnRight
            alt={projectExecution.title}
            src={projectExecution.img}
            title={projectExecution.title}
            subtitle={projectExecution.subtitle}
            description={projectExecution.description}
            list={projectExecution.list}
          />
        </div>
      </section>
      {/* KNOWLEDGE */}
      <section id="knowledge" className={`${styles.knowledge} container`}>
        <ImgOnTheLeftAndTextOnRight
          alt={knowledge.title}
          src={knowledge.img}
          title={knowledge.title}
          subtitle={knowledge.subtitle}
          description={knowledge.description}
          list={knowledge.list}
        />
      </section>
      <section></section>
    </>
  );
};

Integration.propTypes = {
  integration: PropTypes.object.isRequired,
};
