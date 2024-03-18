import { Button } from "@material-tailwind/react";

const RunTypes = ["All", "Unmodded", "Modded", "Unseeded", "Seeded"];
const RunTypesColor = ["white", "yellow", "green", "orange", "blue"];

export default function RunTypeBtn({ onButtonClick }) {
  return (
    <div className="flex justify-center gap-2 p-4">
      {RunTypes.map((num, index) => (
        <Button
          key={index}
          variant={onButtonClick(index).variant}
          onClick={onButtonClick(index).onClick}
          color={RunTypesColor[index]}
          className="p-3"
        >
          {num}
        </Button>
      ))}
    </div>
  );
}
