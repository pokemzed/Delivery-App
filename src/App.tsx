import {routes} from "./shared/routes.tsx";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <Routes>
            {routes.map(route => (
                <Route key={route.path} path={route.path} element={route.element}/>
            ))}
        </Routes>
    )
}

export default App
