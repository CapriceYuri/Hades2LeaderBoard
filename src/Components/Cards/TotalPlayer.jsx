import { Card, Typography } from "@material-tailwind/react";
import { uniquePlayers } from "../../Data/DataProcess";

export default function TotalPlayerCard() {
  return (
    <Card
      className="w-[100%] h-56 flex bg-transparent border-4 border-black rounded-2xl relative"
      shadow={false}
    >
      {/* <img
        src=""
        className="h-full w-full object-cover rounded-xl absolute object-top"
      />
      <div className="absolute h-full w-full bg-gradient-to-r to-black from-black opacity-50 rounded-xl" /> */}

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
