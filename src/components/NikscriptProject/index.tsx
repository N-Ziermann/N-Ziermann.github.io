import interpret from "../../js/nikscript";
import { useState, useRef, useEffect } from "preact/hooks";
import styles from "./NikscriptProject.module.scss";

export function NikscriptProject() {
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const resultObject = useRef("");

    useEffect(setFizzBuzz, []);

    function run() {
        interpret(code, resultObject);
        setOutput(resultObject.current);
        resultObject.current = "";
    }

    function setFizzBuzz() {
        setCode(`for(i=0<31){
    tmp = "";
    if (i%3 == 0) {
        tmp = tmp + "Fizz";
    }
    if (i%5 == 0) {
        tmp = tmp + "Buzz";
    }
    if (tmp == "") {
        tmp = i;
    }
    print(tmp);
}`);
    }

    function setRecursion() {
        setCode(`func fibonacci(n){
    if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
print(fibonacci(5));`);
    }

    function setMath() {
        setCode('print ("-1 * 2 -- 1 = " + (-1*2--1));');
    }

    return (
        <div>
            <div className={styles.textareas}>
                <textarea value={code} onChange={e => setCode((e?.target as HTMLTextAreaElement)?.value)} />
                <textarea readOnly value={output} />
            </div>
            <div className={styles.buttons}>
                <button onClick={run}>Run</button>
                <button onClick={setFizzBuzz}>FizzBuzz</button>
                <button onClick={setRecursion}>Recursion</button>
                <button onClick={setMath}>Math operations</button>
            </div>
            <div>
                <p>
                    Nikscript is an interpretted programming language written in JavaScript.<br />
                    It's inspired by JavaScript (variables) and Python (# for comments) but also has some language specific syntax like its for loops: for (i = lowerLimit {"<"} upperLimit).<br />
                    Its featureset includes:
                    <ul>
                        <li>Variables (floats and strings)</li>
                        <li>for and while loops</li>
                        <li>Buildin functions (print and len)</li>
                        <li>Function definitions</li>
                        <li>Recursion</li>
                    </ul>
                </p>
            </div>
        </div>
    );
}