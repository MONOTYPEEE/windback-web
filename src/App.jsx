import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/main"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*"/>
                <Route path="/" element={<Main/>}/>
                <Route path="/servers"/>
                <Route path="/auth"/>
                <Route path="/rewind/*"/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
