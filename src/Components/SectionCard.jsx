import { Card } from "@material-tailwind/react";

export default function SectionCard({ children }) {
  return (
    <Card
      className="w-[100%] bg-transparent 2xl:w-5/6 border-4 border-black rounded-2xl shadow-[0_0_40px_black] mx-auto my-5 relative max-w-[1700px]"
      shadow={false}
    >
      <div className="absolute h-full w-full bg-[#28282b] -z-10 rounded-xl opacity-95" />
      {children}
    </Card>
  );
}
