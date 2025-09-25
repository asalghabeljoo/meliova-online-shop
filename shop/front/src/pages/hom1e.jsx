import React from "react";

import s from "./Home.module.css";
import { Link } from "react-router-dom"; // <-- add this

import s from "./Home.module.css";

function IconSearch() {

  return (function IconSearch() {

    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">  return (

      <path    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">

        d="M21 21l-4.35-4.35m1.6-5.3a6.95 6.95 0 11-13.9 0 6.95 6.95 0 0113.9 0z"      <path

        fill="none"        d="M21 21l-4.35-4.35m1.6-5.3a6.95 6.95 0 11-13.9 0 6.95 6.95 0 0113.9 0z"

        stroke="currentColor"        fill="none"

        strokeWidth="2"        stroke="currentColor"

        strokeLinecap="round"        strokeWidth="2"

      />        strokeLinecap="round"

    </svg>      />

  );    </svg>

}  );

function IconHeart() {}

  return (function IconHeart() {

    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">  return (

      <path    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">

        d="M12 21s-7.5-4.35-9.5-8.9C1 7.9 4.2 5 7.3 5c1.9 0 3.2.9 4.7 2.6C13.5 5.9 14.8 5 16.7 5 19.8 5 23 7.9 21.5 12.1 19.5 16.65 12 21 12 21z"      <path

        fill="none"        d="M12 21s-7.5-4.35-9.5-8.9C1 7.9 4.2 5 7.3 5c1.9 0 3.2.9 4.7 2.6C13.5 5.9 14.8 5 16.7 5 19.8 5 23 7.9 21.5 12.1 19.5 16.65 12 21 12 21z"

        stroke="currentColor"        fill="none"

        strokeWidth="1.8"        stroke="currentColor"

      />        strokeWidth="1.8"

    </svg>      />

  );    </svg>

}  );

function IconUser() {}

  return (function IconUser() {

    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">  return (

      <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">

      <path      <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />

        d="M4.8 19.6a7.2 7.2 0 0114.4 0"      <path

        fill="none"        d="M4.8 19.6a7.2 7.2 0 0114.4 0"

        stroke="currentColor"        fill="none"

        strokeWidth="1.8"        stroke="currentColor"

        strokeLinecap="round"        strokeWidth="1.8"

      />        strokeLinecap="round"

    </svg>      />

  );    </svg>

}  );

function IconCart() {}

  return (function IconCart() {

    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">  return (

      <circle cx="9" cy="20" r="1.6" />    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">

      <circle cx="18" cy="20" r="1.6" />      <circle cx="9" cy="20" r="1.6" />

      <path      <circle cx="18" cy="20" r="1.6" />

        d="M2.5 3.5h2.3l2.1 11.3a1.8 1.8 0 001.7 1.4h8.2a1.8 1.8 0 001.7-1.3l1.7-6.4H7.1"      <path

        fill="none"        d="M2.5 3.5h2.3l2.1 11.3a1.8 1.8 0 001.7 1.4h8.2a1.8 1.8 0 001.7-1.3l1.7-6.4H7.1"

        stroke="currentColor"        fill="none"

        strokeWidth="1.8"        stroke="currentColor"

        strokeLinecap="round"        strokeWidth="1.8"

      />        strokeLinecap="round"

    </svg>      />

  );    </svg>

}  );

}

/** Logo component with just text */

function Logo() {/** Logo component with just text */

  return (function Logo() {

    <div className={s.logoWrap} aria-label="MELIOVA">  return (

      <div className={s.logoText}>    <div className={s.logoWrap} aria-label="MELIOVA">

        <div className={s.brand}>MELIOVA</div>      <div className={s.logoText}>

        <div className={s.tag}>Beautiful, just as you are.</div>        <div className={s.brand}>MELIOVA</div>

      </div>        <div className={s.tag}>Beautiful, just as you are.</div>

    </div>      </div>

  );    </div>

}  );

}

export default function Home() {

  return (/** very light “pump bottle” as inline SVG so no external images needed */

    <div className={s.page}>function Bottle() {

      {/* Header */}  return (

      <header className={s.header}>    <svg viewBox="0 0 140 380" className={s.bottle} aria-hidden="true">

        <Logo />      <defs>

        <linearGradient id="b" x1="0" x2="0" y1="0" y2="1">

        <label className={s.searchWrap} aria-label="Site search">          <stop offset="0" stopColor="#59c5f8" />

          <input          <stop offset="1" stopColor="#14a7e5" />

            className={s.searchInput}        </linearGradient>

            placeholder="Wonach suchen Sie?"      </defs>

            aria-label="Wonach suchen Sie?"      <rect x="40" y="20" width="60" height="22" rx="6" fill="#e7f3ff" />

          />      <rect x="54" y="0" width="32" height="16" rx="3" fill="#e7f3ff" />

          <button className={s.searchBtn} aria-label="Suchen">      <rect x="44" y="40" width="52" height="300" rx="14" fill="url(#b)" />

            <IconSearch />      <rect x="44" y="340" width="52" height="16" rx="8" fill="#0e5aa5" opacity="0.35" />

          </button>    </svg>

        </label>  );

}

        <nav className={s.headerActions} aria-label="User actions">

          <a href="#" className={s.iconBtn} aria-label="Favoriten">export default function Home() {

            <IconHeart />  return (

          </a>    <div className={s.page}>

          <a href="/login" className={s.iconBtn} aria-label="Konto">      {/* Header */}

            <IconUser />      <header className={s.header}>

          </a>        <Logo />

          <a href="#" className={s.iconBtn} aria-label="Warenkorb">

            <IconCart />        <label className={s.searchWrap} aria-label="Site search">

          </a>          <input

        </nav>            className={s.searchInput}

      </header>            placeholder="Wonach suchen Sie?"

            aria-label="Wonach suchen Sie?"

      {/* Primary navigation */}          />

      <nav className={s.categoryBar} aria-label="Kategorien">          <button className={s.searchBtn} aria-label="Suchen">

        <a href="#" className={s.catItem}>Neu</a>            <IconSearch />

        <a href="#" className={s.catItem}>Marken</a>          </button>

        <a href="#" className={s.catItem}>Make-up</a>        </label>

        <a href="#" className={s.catItem}>Pflege &amp; Parfum</a>

        <a href="#" className={s.catItem}>Haare</a>        <nav className={s.headerActions} aria-label="User actions">

        <a href="#" className={s.catItem}>Sale</a>          <a href="#" className={s.iconBtn} aria-label="Favoriten">

      </nav>            <IconHeart />

          </a>

      {/* Hero */}

      <section className={s.hero} aria-label="Highlight">          {/* user icon -> /login */}

        <div className={s.heroBg} />          <Link to="/login" className={s.iconBtn} aria-label="Konto">

        <div className={s.heroInner}>            <IconUser />

          <div className={s.brandChip}>Neutrogena</div>          </Link>

          <div className={s.heroLeft}>

            <div className={s.heroCircle}>          <a href="#" className={s.iconBtn} aria-label="Warenkorb">

              Geschenk            <IconCart />

              <br />für Dich          </a>

            </div>        </nav>

          </div>      </header>

          <div className={s.heroRight}>

            <div className={s.heroCard}>      {/* Primary navigation */}

              <p>      <nav className={s.categoryBar} aria-label="Kategorien">

                hey hey hey hey        <a href="#" className={s.catItem}>Neu</a>

                <br />        <a href="#" className={s.catItem}>Marken</a>

                hey hey        <a href="#" className={s.catItem}>Make-up</a>

              </p>        <a href="#" className={s.catItem}>Pflege &amp; Parfum</a>

              <p className={s.mt16}>        <a href="#" className={s.catItem}>Haare</a>

                hey hey heyy&nbsp;&nbsp;hey        <a href="#" className={s.catItem}>Sale</a>

                <br />      </nav>

                hey hey hey hey

                <br />      {/* Hero */}

                hey      <section className={s.hero} aria-label="Highlight">

              </p>        <div className={s.heroBg} />

            </div>        <div className={s.heroInner}>

          </div>          <div className={s.brandChip}>Neutrogena</div>

        </div>          <div className={s.heroLeft}>

      </section>            <div className={s.heroCircle}>

              Geschenk

      {/* Aktion circles */}              <br />für Dich

      <section className={s.actionSection} aria-label="Aktion">            </div>

        <div className={s.actionHeader}>          </div>

          <h2>Aktion</h2>          <div className={s.heroRight}>

          <a href="#" className={s.moreLink} aria-label="More">            <div className={s.heroCard}>

            More <span className={s.arrow}>&rarr;</span>              <p>

          </a>                hey hey hey hey

        </div>                <br />

        <div className={s.circleGrid}>                hey hey

          <div className={s.circleCard}>              </p>

            <div className={`${s.circle} ${s.c1}`} />              <p className={s.mt16}>

            <div className={s.circleLabel}>lorem ipsum</div>                hey hey heyy&nbsp;&nbsp;hey

          </div>                <br />

          <div className={s.circleCard}>                hey hey hey hey

            <div className={`${s.circle} ${s.c2}`} />                <br />

            <div className={s.circleLabel}>lorem ipsum</div>                hey

          </div>              </p>

          <div className={s.circleCard}>            </div>

            <div className={`${s.circle} ${s.c3}`} />          </div>

            <div className={s.circleLabel}>lorem ipsum</div>        </div>

          </div>      </section>

          <div className={s.circleCard}>

            <div className={`${s.circle} ${s.c4}`} />      {/* Aktion circles */}

            <div className={s.circleLabel}>lorem ipsum</div>      <section className={s.actionSection} aria-label="Aktion">

          </div>        <div className={s.actionHeader}>

        </div>          <h2>Aktion</h2>

      </section>          <a href="#" className={s.moreLink} aria-label="More">

    </div>            More <span className={s.arrow}>&rarr;</span>

  );          </a>

}        </div>
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
