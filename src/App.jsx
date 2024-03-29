import MainCard from "./Components/MainContent";
import NavigationBar from "./Components/NavHeader";
import PageFooter from "./Components/Footer";
import TotalRunsCard from "./Components/Cards/TotalRun";
import TotalPlayerCard from "./Components/Cards/TotalPlayer";
import LatestSubmission from "./Components/LatestSubmission";
import RecordSummary from "./Components/SummaryContent";
import { inject } from "@vercel/analytics";
import { RevealLeft, RevealRight } from "./Components/Reveal";

inject();

function App() {
  return (
    <section className="h-lvh overflow-x-hidden">
      <div className="fixed bg-[#28282b] h-lvh w-full object-cover -z-10" />
      <img
        src="mainBG.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10 2xl:object-top"
      />
      <NavigationBar />

      <section>
        <div className="flex justify-center px-2 mx-auto w-[100%] pt-10 pb-5 gap-x-2 2xl:w-4/5">
          <RevealLeft>
            <TotalRunsCard />
          </RevealLeft>
          <RevealRight>
            <TotalPlayerCard />
          </RevealRight>
        </div>
      </section>
      <RecordSummary />
      <LatestSubmission />
      <MainCard />
      <PageFooter />
    </section>
  );
}
export default App;
