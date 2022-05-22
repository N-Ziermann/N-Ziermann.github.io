import { useEffect } from "preact/hooks";

export function MainView(props: any) {
    useEffect(() => window.scrollTo(0, 0), [])
    return <>{props.children}</>
}