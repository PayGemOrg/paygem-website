import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { Landing } from "./pages/Landing";

function App() {
    return (
        <div
            className="flex flex-col px-8 min-h-screen bg-light-primary dark:bg-dark-primary
                      text-light-text dark:text-dark-text"
        >
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </div>
    );
}

export default App;
