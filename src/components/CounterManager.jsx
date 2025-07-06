import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

const CounterManager = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <CounterDisplay value={count} />
            <button onClick={() => setCount(count + 1)}>Збільшити Значення</button>
            <button onClick={() => setCount(count -1)}>Зменшити Значення</button>
            <button onClick={() => setCount(0)}>Скинути Значення</button>
        </div>
    );
}

export default CounterManager;