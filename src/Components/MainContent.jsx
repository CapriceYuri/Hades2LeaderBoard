import {
  Card,
  CardFooter,
  Typography,
  List,
  ListItem,
  Avatar,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { allData, BreakList, addRankProperty } from "../Data/DataProcess";
import { getAvatarRing, useAvatarBorder } from "../ProcessLogic/FunctionLogic";
import RunTypeBtn from "./Btns/RunTypes";

function haveComment(comment) {
  if (comment !== undefined) {
    return (
      <div className="transform -translate-y-[90%] translate-x-[1%]">
        <Typography
          color="orange"
          className="font-customFont text-[12px]"
        >{`"${comment}"`}</Typography>
      </div>
    );
  }
}

export default function MainCard() {
  const [category, setCategory] = useState(0);
  const [active, setActive] = useState(1);
  const [pageInfo, setPageInfo] = useState(0);

  const handleDataChange = (num) => ({
    variant: category === num ? "filled" : "outlined",
    onClick: () => {
      addRankProperty(allData[num]);
      setCategory(num);
      setPageInfo(0);
      setActive(1);
    },
  });
  function handleChangePage(arr) {
    setPageInfo(arr);
  }

  let dataDisplay = allData[category];
  const { eachPages, totalPages } = BreakList(dataDisplay);

  let sortDisplay = eachPages[pageInfo];

  const getList = (index) => ({
    variant: active === index ? "gradient" : "text",
    color: "white",
    onClick: () => {
      setActive(index);
      handleChangePage(index - 1);
    },
  });

  return (
    <section className="w-full flex justify-center py-10">
      <Card className="w-[100%] bg-transparent 2xl:w-5/6 border-4 border-black rounded-2xl shadow-[0_0_30px_white]">
        <div className="absolute h-full w-full bg-[#28282b] rounded-xl opacity-90" />
        <List className="z-10">
          <div>
            <Typography
              variant="h2"
              color="white"
              className="p-2 text-center font-customFont"
            >
              {"Heat Leaderboard"}
            </Typography>
          </div>
          <RunTypeBtn onButtonClick={handleDataChange} />
          {/* <CategoryWeapBtns onButtonClick={handleDataChange} />
          <CategoryButtons onButtonClick={handleDataChange} />
          <FindPlayerBtn onButtonClick={handleDataChange} /> */}
          {sortDisplay.map((player, index) => (
            <div key={index}>
              <ListItem className="hover:bg-black focus:bg-black hover:rounded-2xl focus:rounded-2xl relative py-5 cursor-default">
                <div className="absolute w-full h-full bg-white opacity-5 rounded-2xl top-0 left-0" />
                <div>
                  <Typography
                    variant="h6"
                    color="white"
                    className="font-customFont"
                  >
                    {`#${player.rank}.`}
                  </Typography>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col items-center">
                    <Avatar
                      variant="circular"
                      color="indigo"
                      src={player.ava}
                      size="sm"
                    />
                    <Typography
                      variant="small"
                      color="white"
                      className="font-customFont"
                    >
                      {player.name}
                    </Typography>
                  </div>
                </div>

                <div className="flex-1 text-center">
                  <div className="relative mx-auto">
                    <Avatar
                      src={`arms/${player.weapon}-${player.aspect}.png`}
                    />
                    {/* <Avatar
                      src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      withBorder={true}
                      color={useAvatarBorder(player.aspect)}
                      variant="rounded"
                      className="rotate-45 absolute top-0 start-50 transform -translate-x-full"
                    /> */}
                    <Avatar
                      src={getAvatarRing(player.aspect)}
                      className="absolute top-0 start-50 transform -translate-x-full"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center">
                  <Typography
                    variant="h6"
                    color="amber"
                    className="font-customFont"
                  >
                    {`${player.aspect}`}
                  </Typography>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-customFont"
                  >
                    {`${player.weapon}`}
                  </Typography>
                </div>

                {/* <div className="flex-1">
                  <div className="relative mx-auto text-center">
                    <Avatar
                      src={
                        player.special !== undefined
                          ? `special/${player.special}.png`
                          : `gods/${player.aspect}.png`
                      }
                      withBorder={true}
                      className="p-0.5"
                    />
                    <Avatar
                      src={getAvatarRing(player.aspect)}
                      className="absolute top-0 start-50 transform -translate-x-full"
                    />
                  </div>
                </div> */}

                {/* {addBoons(player.playerBoon, player.boonlevel)} */}

                <div className="flex-1 text-center">
                  <Typography
                    variant="h6"
                    color={
                      player.category === "Seeded"
                        ? "blue"
                        : player.category === "Modded"
                        ? "green"
                        : "orange"
                    }
                  >
                    {`${player.heat}`}
                  </Typography>
                  <Typography
                    variant="h6"
                    color={player.modded === true ? "green" : "yellow"}
                    className="font-customFont"
                  >
                    {player.modded === true ? "M" : "U"}
                  </Typography>
                </div>
                <div className=" mx-2 text-center hidden md:block">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-semibold font-customFont"
                  >
                    {`v${player.version}`}
                  </Typography>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-customFont"
                  >
                    {player.platform}
                  </Typography>
                </div>
                <div className="flex-1 text-center hidden sm:block">
                  <Typography
                    variant="h6"
                    color={
                      player.category === "Seeded"
                        ? "blue"
                        : player.category === "Modded"
                        ? "green"
                        : "orange"
                    }
                    className="font-semibold font-customFont"
                  >
                    {player.category}
                  </Typography>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-customFont"
                  >
                    {player.date}
                  </Typography>
                </div>
                <div className="flex justify-center">
                  <a href={player.src} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      color="lightgreen"
                      className="w-6 h-6 z-10 animate-bounce"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </ListItem>
              {haveComment(player.comment)}
            </div>
          ))}
        </List>
        <CardFooter>
          <div>
            <div className="grid grid-cols-10">
              {totalPages.map((page, index) => (
                <IconButton {...getList(page)} key={index}>
                  {page}
                </IconButton>
              ))}
            </div>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
