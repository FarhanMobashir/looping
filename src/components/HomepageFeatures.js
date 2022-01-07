import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Problem Solving",
    Svg: require("../../static/img/abacus.svg").default,
    description: (
      <>
        Learn about solving problems while building prjects or while solving
        coding problems.
      </>
    ),
  },
  {
    title: "Code",
    Svg: require("../../static/img/computer.svg").default,
    description: (
      <>
        Code everyday and always try to push your limits while solving any kind
        of problem , then only go for help.
      </>
    ),
  },
  {
    title: "Coffee",
    Svg: require("../../static/img/coffee.svg").default,
    description: (
      <>And ofcourse make coffee your best-friend 😂.Just kidding.</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
