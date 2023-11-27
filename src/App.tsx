import Button from "./components/Button/Button.tsx";
import React from "react";

function App() {
    const [count, setCount] = React.useState<number>(0)

    const changeCount = () => {
        setCount(state => state + 1)
        console.log(count)
    }

    return (
        <>
            <Button onClick={changeCount} children={'Кнопка'}/>
        </>
    )
}

export default App
