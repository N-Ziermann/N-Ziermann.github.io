import Router from "preact-router";
import { Section } from "../Section";
import { MainView } from "../MainView";
import { PiDeckProject } from "../PiDeckProject";
import { FishingProject } from "../FishingProject";
import { LovePotionProject } from "../LovePotionProject";
import { NikscriptProject } from "../NikscriptProject";
import { PasswordManagerProject } from "../PasswordManagerProject";
import { PaletteEditor } from "ziermann-nes-palette-editor";
import styles from "./ProjectView.module.scss"

// eslint-disable-next-line no-unused-vars
export function ProjectView(props: { path: string }) {
    return (
        <MainView>
            <Router>
                <Section title="PiDeck" path="/project/piDeck">
                    <PiDeckProject />
                </Section>
                <Section title="Password Manager" path="/project/passwordManager">
                    <PasswordManagerProject />
                </Section>
                <Section title="" path="/project/colorPicker">
                    <div className={styles.paletteEditor}>
                        <PaletteEditor />
                    </div>
                </Section>
                <Section title="Love Potion" path="/project/lovePotion">
                    <>
                        <LovePotionProject />
                    </>
                </Section>
                <Section title="Nikscript" path="/project/nikscript">
                    <>
                        <NikscriptProject />
                    </>
                </Section>
                <Section title="Gameboy Fishing" path="/project/gameboyFishing">
                    <>
                        <FishingProject />
                    </>
                </Section>
                <Section title="No Project Specified or Project doesn't exist" path="/project/:rest*" />
            </Router>
        </MainView >
    )
}