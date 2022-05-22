import { HobbyGrid } from "./components/HobbyGrid"
import { Header } from "./components/Header"
import { Section } from "./components/Section"
import styles from "./app.module.scss";
import { ProjectGrid } from "./components/ProjectGrid";
import { Footer } from "./components/Footer";
import { Router } from "preact-router"
import { MainView } from "./components/MainView"
import { ProjectView } from "./components/ProjectView"

export function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Router>
          <div path="/">
            <MainView>
              <Section title="Software Developer from Germany who likes">
                <HobbyGrid />
              </Section>
              <Section title="My Projects">
                <ProjectGrid />
              </Section>
            </MainView>
          </div>
          <ProjectView path="/project/:rest*" />
        </Router>
      </main>
      <div className={styles.footerSpacer} />
      <Footer />
    </>
  )
}
