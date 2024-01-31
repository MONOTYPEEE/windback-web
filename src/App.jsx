import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import ServerSelect from "./pages/stories/serverSelect"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*"/>
                <Route path="/" element={<Landing/>}/>
                <Route path="/servers" element={<ServerSelect/>}/>
                <Route path="/auth"/>
                <Route path="/rewind/*"/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
