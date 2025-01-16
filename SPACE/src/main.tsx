import { createRoot } from "react-dom/client";
import "./index.css";

import Header from "./Component/Shared/Header/Header.tsx";
// import LandingPage from './Component/Page/LandingPage/LandingPage.tsx';
import Process from "./Component/Page/Process/Process.tsx";
import RecruitSection from "./Component/Page/RecruitSection/RecruitSection.tsx";
import Technologies from "./Component/Page/Technologies/Technologies.tsx";
import Techovise from "./Component/Page/Techovise/Techovise.tsx";
import Services from "./Component/Page/Services/Services.tsx";
import Plans from "./Component/Shared/Plans/Plans.tsx";
import VirtualCTO from "./Component/Page/VirtualCTO/VirtualCTO.tsx";
import Achivements from "./Component/Page/Achivements/Achivements.tsx";
import ScheduleCallForm from "./Component/Shared/ExportSection/ScheduleCallForm/ScheduleCallForm.tsx";
import Footer from "./Component/Shared/Footer/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <div>
    <Header />
    <RecruitSection />
    <Technologies />
    <Process />
    <Techovise />
    <Services />
    <Plans />
    <VirtualCTO />
    <Achivements />
    <ScheduleCallForm />
    <Footer />
  </div>
);
