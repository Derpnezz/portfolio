
"use client";
import { useWindowSize } from "@/app/hooks/windowsize";
import HobbiesMobile from "./mobile/hobbiesmobile";
import HobbiesWeb from "./web/hobbiesweb";

export default function HobbiesPage({
  params,
}: {
  params: { title: string };
}) {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  return (
    <>
      {isMobile ? (
        <div className="block h-full">
          <HobbiesMobile params={params} />
        </div>
      ) : (
        <div className="block h-full">
          <HobbiesWeb params={params} />
        </div>
      )}
    </>
  );
}
