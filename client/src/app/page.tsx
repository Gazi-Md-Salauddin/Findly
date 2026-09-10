import Image from "next/image";
import Banner from "./components/homepage/Banner";
import ReportSection from "./components/shared/ReportSection";

export default function Home() {
  return (
    <div>
      <Banner/>
      <ReportSection/>
    </div>
  );
}
