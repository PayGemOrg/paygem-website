import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
import { Subscriptions } from "./pages/Subscriptions";

function App() {
    return (
        <div
            className="flex flex-col px-8 min-h-screen bg-light-primary dark:bg-dark-primary
                      text-light-text dark:text-dark-text"
        >
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/subscriptions" element={<Subscriptions />} />
            </Routes>
        </div>
    );
}

export default App;
