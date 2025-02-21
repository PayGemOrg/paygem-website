import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
import { Subscriptions } from "./pages/Subscriptions";
import {Services} from "./pages/Services";
import { Plan } from "./pages/Plan";
import { ViewService } from "./pages/ViewService";
import { ViewPlan } from "./pages/ViewPlan";

function App() {
    return (
        <div
            className="flex flex-col min-h-screen bg-light-primary dark:bg-dark-primary
                      text-light-text dark:text-dark-text max-w-[1540px] mx-auto"
        >
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/subscriptions" element={<Subscriptions />} />
                <Route path="/services" element={<Services />} />
                <Route path="/viewservice" element={<ViewService />} />
                <Route path="/plans" element={<Plan />} />
                <Route path="/viewplans" element={<ViewPlan />} />
            </Routes>
        </div>
    );
}

export default App;
