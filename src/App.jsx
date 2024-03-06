import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import ServerSelect from "./pages/ServerSelect"
import StoryProvider from "./pages/handler/StoryProvider"

export default function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="*"/>
                <Route path="/" element={<Landing/>}/>
                <Route path="/servers" element={<ServerSelect/>}/>
                <Route path="/auth"/>
                <Route path="/rewind" element={<StoryProvider/>}/>
            </Routes>
        </BrowserRouter>
    )
}