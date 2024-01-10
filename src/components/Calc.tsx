import { useState } from "react";

export default function Calc() {
    const [text, setText] = useState<number>(1)

    return (
        <div className="helloWorld" style={{zIndex: 100000}}>
            <h1>Hello World</h1>
            <h1>{ String(text * 10) }</h1>
            <div className="java">
                <input type="text" name="text" className="text" onChange={(e) => setText(e.target.value)} />
            </div>
        </div>
    );
}