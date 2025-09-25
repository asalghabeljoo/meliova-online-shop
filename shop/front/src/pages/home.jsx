import React from "react";
import s from "./Home.module.css";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={s.page}>

      {/* Hero */}
      <section className={s.hero} aria-label="Highlight">
        <div className={s.heroBg} />
        <div className={s.heroInner}>
          <div className={s.brandChip}>Neutrogena</div>
          <div className={s.heroLeft}>
            <div className={s.heroCircle}>
              Geschenk
              <br />für Dich
            </div>
          </div>
          <div className={s.heroRight}>
            <div className={s.heroCard}>
              <p>
                hey hey hey hey
                <br />
                hey hey
              </p>
              <p className={s.mt16}>
                hey hey heyy&nbsp;&nbsp;hey
                <br />
                hey hey hey hey
                <br />
                hey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aktion circles */}
      <section className={s.actionSection} aria-label="Aktion">
        <div className={s.actionHeader}>
          <h2>Aktion</h2>
          <a href="#" className={s.moreLink} aria-label="More">
            More <span className={s.arrow}>&rarr;</span>
          </a>
        </div>
        <div className={s.circleGrid}>
          <div className={s.circleCard}>
            <div className={`${s.circle} ${s.c1}`} />
            <div className={s.circleLabel}>lorem ipsum</div>
          </div>
          <div className={s.circleCard}>
            <div className={`${s.circle} ${s.c2}`} />
            <div className={s.circleLabel}>lorem ipsum</div>
          </div>
          <div className={s.circleCard}>
            <div className={`${s.circle} ${s.c3}`} />
            <div className={s.circleLabel}>lorem ipsum</div>
          </div>
          <div className={s.circleCard}>
            <div className={`${s.circle} ${s.c4}`} />
            <div className={s.circleLabel}>lorem ipsum</div>
          </div>
        </div>
      </section>
    </div>
  );
}