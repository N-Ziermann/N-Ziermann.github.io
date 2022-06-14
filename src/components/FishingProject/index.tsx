import { MutableRef, useRef, useState } from "preact/hooks"
import styles from "./FishingProject.module.scss";
import { WasmBoy } from 'wasmboy';
import game from "../../media/gb/fishing.gb";
import classNames from "classnames";

export function FishingProject() {
    const canvasRef = useRef<HTMLCanvasElement>() as MutableRef<HTMLCanvasElement>;
    const [running, setRunning] = useState(false)

    async function loadEmulator() {
        await WasmBoy.config({}, canvasRef.current);
        await WasmBoy.loadROM(game)
        await WasmBoy.play()
        setRunning(true)
    }

    return <div className={styles.fishingView}>
        <p>Gameboy Fishing is a Gameboy Game written in C++ using the Gameboy Development Kit.</p>
        <p>Try catching fish and bring them to the top to store them by pressing A while avoiding trash.</p>
        <p>An emulated version of the game is running below. The controls are as follows:</p>
        <ul>
            <li>Arrow keys (up/down): Move the Fishing Rod</li>
            <li>Enter: Start (starts the game when on the home screen)</li>
            <li>X: A Button (releases fish when above the water)</li>
            <li>Left Click: Start/Restart Game</li>
        </ul>
        <div className={classNames(styles.emulator, { [styles.stopped]: !running })} onClick={loadEmulator}>
            <canvas ref={canvasRef}></canvas>
        </div>
    </div>
}