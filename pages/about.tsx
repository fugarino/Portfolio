import type { NextPage } from "next";
import Head from "next/head";
import ITombBtns from "../components/ui/buttons/IndustrialTombBtn/ITombBtns";
import ArrowLink from "../components/ui/links/ArrowLink";
import styles from "../styles/IndustrialTomb.module.css";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <style>{"html { background-color: #34383B;"}</style>
      </Head>
      <div className="font-[Poppins] max-w-[1620px] mx-auto px-10 pt-4">
        <ArrowLink linkURL="/" />
        <header className="mt-4">
          <h1 title="Industiral Tomb" className="mt-4">
            <picture>
              <img src="/Heading3.svg" alt="heading" />
            </picture>
          </h1>
          <div className="flex justify-between mt-1">
            <div></div>
            <h2 className={styles.sub}>A JavaScript Game</h2>
          </div>
        </header>
        <section className="relative -left-[6.5rem] flex items-center justify-between w-[calc(100%+6.5rem)]">
          <div className="w-[60%]">
            <picture>
              <img src="/Group14.svg" alt="game preview image 1" />
            </picture>
          </div>
          <ITombBtns />
        </section>
        <section>
          <article className="sm:flex justify-between">
            <div className="sm:w-[45%]">
              <h2 className={styles.sectionHeader}>About</h2>
              <div className="relative -top-3">
                <p className={styles.p}>
                  Industrial Tumb is a 2D Puzzle-Platformer game, kind of like
                  Terraria but alot worse.
                </p>
                <p className={styles.p}>
                  The game’s objective, is to use the interactable game objects
                  to reach the “glowy thing”.
                </p>
                <p className={styles.p}>
                  Opon completion, a card will show the time in which the level
                  was finished, and a star rating depending on the time.
                </p>
              </div>
            </div>
            <div className="bg-[#1F2123] sm:w-[45%] h-[13rem] sm:h-auto mt-1 sm:mt-0 rounded-xl"></div>
          </article>
          <article className="flex flex-col-reverse sm:flex-row justify-between mt-4">
            <div className="bg-[#1F2123] sm:w-[45%] h-[13rem] sm:h-auto mt-1 sm:mt-0 rounded-xl"></div>
            <div className="sm:w-[45%]">
              <h2 className={styles.sectionHeader}>Process</h2>
              <div className="relative -top-3">
                <p className={styles.p}>
                  This was made possible with a 16x16 tileset in combination
                  with HTML canvas.
                </p>
                <p className={styles.p}>
                  The game runs on one main “animation” loop, which updates the
                  position of all assets on every iteration.
                </p>
                <p className={styles.p}>
                  There is also a collision system in place, which takes the
                  affected objects positioning on the canvas into account and
                  changes the apropriate objects velocities accordingly, opon
                  contact.
                </p>
              </div>
            </div>
          </article>
          <article className="sm:flex justify-between mt-4">
            <div className="sm:w-[45%]">
              <h2 className={styles.sectionHeader}>Learned</h2>
              <div className="relative -top-3">
                <p className={styles.p}>Game development is hard.</p>
                <p className={styles.p}>
                  This was one of my earlier projects and really helped with
                  getting comfortable with OOP and vanilla JavaScript in
                  general.
                </p>
                <p className={styles.p}>
                  Useing just JavaScript without any shiny framework or library
                  was very fun and refreshing.
                </p>
              </div>
            </div>
            <div className="bg-[#1F2123] sm:w-[45%] h-[13rem] sm:h-auto mt-1 sm:mt-0 rounded-xl"></div>
          </article>
        </section>
        <footer className="flex items-center justify-between w-[calc(100%+6.5rem)] mt-10">
          <div className="w-[35%] mb-4">
            <h3 className={`text-sm font-[500] text-white ${styles.tech}`}>
              Technologies:
            </h3>
            <div className="flex items-center mt-2">
              <div className={`rounded-md overflow-hidden ${styles.icon}`}>
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#F0DB4F"
                    d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"
                  ></path>
                </svg>
              </div>
              <span className={`mx-4 text-[#dedede] font-sm ${styles.text}`}>
                +
              </span>
              <div className="flex flex-col items-center">
                <span
                  className={`text-white font-[500] relative top-1 ${styles.text}`}
                >
                  HTML 5
                </span>
                <span
                  className={`relative bottom-1 text-[#D6573A] ${styles.text}`}
                >{`<canvas>`}</span>
              </div>
            </div>
          </div>
          <div className="w-[60%]">
            <picture>
              <img src="/Group15.svg" alt="" />
            </picture>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;
