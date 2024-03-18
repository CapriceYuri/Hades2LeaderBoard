import { Card, Typography } from "@material-tailwind/react";
import { uniquePlayers } from "../../Data/DataProcess";

export default function TotalPlayerCard() {
  return (
    <Card
      className="w-[100%] h-56 flex bg-transparent border-4 border-black rounded-2xl relative max-w-[600px]"
      shadow={false}
    >
      <img
        src="cardbg1.jpeg"
        className="h-full w-full object-cover rounded-xl absolute object-top"
      />
      <div className="absolute h-full w-full bg-[#28282b] opacity-80 rounded-xl" />

      <div className="z-50 flex flex-col h-full justify-center items-center mx-auto">
        <Typography variant="h4" color="white" className="font-customFont">
          {`Unique Players`}
        </Typography>
        <Typography
          variant="h1"
          color="amber"
          className="font-bold font-customFont"
          children={uniquePlayers}
        ></Typography>
      </div>
    </Card>
  );
}
