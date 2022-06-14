import Router from "preact-router";
import { Section } from "../Section";
import { MainView } from "../MainView"
import { PiDeckProject } from "../PiDeckProject"
import { FishingProject } from "../FishingProject"
import { LovePotionProject } from "../LovePotionProject";
import { NikscriptProject } from "../NikscriptProject"

// eslint-disable-next-line no-unused-vars
export function ProjectView(props: { path: string }) {
    return (
        <MainView>
            <Router>
                <Section title="PiDeck" path="/project/piDeck">
                    <PiDeckProject />
                </Section>
                <Section title="Password Manager" path="/project/passwordManager">
                    <>
                        <p>A self written passsword manager website that implements encryption algorithms similarly to how LastPass does it.</p>
                        <p>There no longer is an online example version running due to data protection reasons...</p>
                    </>
                </Section>
                <Section title="NES Color Picker" path="/project/colorPicker">
                    <>
                        <p>The NES Color Picker is a tool developed for NES Developers. It offers a graphical user interface for creating the binary files needed to add colors to NES Games...</p>
                    </>
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