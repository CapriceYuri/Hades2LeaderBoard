import {
  List,
  ListItem,
  Card,
  Typography,
  Spinner,
  Avatar,
} from "@material-tailwind/react";
import { rawData } from "../Data/DataProcess";
const recent5 = rawData.slice(0, 5);

export default function LatestSubmission() {
  return (
    <Card
      className="w-[100%] bg-transparent 2xl:w-5/6 border-4 border-black rounded-2xl shadow-[0_0_40px_black] mx-auto my-5 relative max-w-[1700px]"
      shadow={false}
    >
      <div className="absolute h-full w-full bg-[#28282b] -z-10 rounded-xl opacity-95" />
      <List className="p-0">
        <div>
          <Typography
            variant="h3"
            color="white"
            className="font-customFont text-center pt-5"
          >
            Beta Submissions
          </Typography>
        </div>
        {recent5.map((run, index) => (
          <ListItem
            className="text-center hover:bg-transparent focus:bg-[#28282B]"
            key={index}
          >
            <div>
              <Spinner color="blue" />
            </div>
            <div className="mx-2">
              <Avatar
                variant="circular"
                color="indigo"
                src={run.ava}
                size="sm"
              />
            </div>
            <div className="flex-1 text-start">
              <Typography
                variant="h6"
                color={`white`}
                className="font-customFont"
              >
                {run.name}
              </Typography>
            </div>
            <div className="flex-1 text-center">
              <Typography
                variant="h6"
                color={`amber`}
                className="font-customFont"
              >
                {run.aspect}
              </Typography>
              <Typography
                variant="small"
                color={`white`}
                className="font-customFont"
              >
                {run.weapon}
              </Typography>
            </div>
            <div className="flex-1 text-center">
              <Typography
                variant="h6"
                color={
                  run.category === "Seeded"
                    ? "blue"
                    : run.category === "Modded"
                    ? "green"
                    : "orange"
                }
              >
                {`${run.heat}`}
              </Typography>
              <Typography
                variant="h6"
                color={run.modded === true ? "green" : "yellow"}
                className="font-customFont"
              >
                {run.modded === true ? "M" : "U"}
              </Typography>
            </div>
            <div className="text-center hidden md:block">
              <Typography
                variant="small"
                color="white"
                className="font-semibold font-customFont"
              >
                {`v${run.version}`}
              </Typography>
              <Typography
                variant="small"
                color="white"
                className="font-customFont"
              >
                {run.platform}
              </Typography>
            </div>
            <div className="flex-1 text-center hidden sm:block">
              <Typography
                variant="h6"
                color={
                  run.category === "Seeded"
                    ? "blue"
                    : run.category === "Modded"
                    ? "green"
                    : "orange"
                }
                className="font-semibold font-customFont"
              >
                {run.category}
              </Typography>
              <Typography
                variant="small"
                color="white"
                className="font-customFont"
              >
                {run.date}
              </Typography>
            </div>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
