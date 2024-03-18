import { Card, Typography } from "@material-tailwind/react";
import { totalRuns } from "../../Data/DataProcess";

export default function TotalRunsCard() {
  return (
    <Card
      className="w-[100%] h-56 bg-transparent border-4 border-black rounded-2xl relative"
      shadow={false}
    >
      <img
        src="cardbg2.jpeg"
        className="h-full w-full object-cover object-top rounded-xl absolute"
      />
      <div className="absolute h-full w-full bg-[#28282b] opacity-80 rounded-xl" />

      <div className="z-50 flex flex-col h-full justify-center items-center mx-auto">
        <Typography variant="h4" color="white" className="font-customFont">
          {`Total Runs`}
        </Typography>
        <Typography
          variant="h1"
          color="amber"
          className="font-bold font-customFont"
          children={totalRuns}
        ></Typography>
      </div>
    </Card>
  );
}
