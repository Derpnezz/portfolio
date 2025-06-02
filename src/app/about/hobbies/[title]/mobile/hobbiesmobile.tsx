
import userdata from "../../../../../../public/data/user.json";

export default function HobbiesMobile({
  params,
}: {
  params: { title: string };
}) {
  // Find the hobby object with matching title from userData
  const hobby = userdata.user.hobbies.find(
    (hobby) => hobby.title === params.title
  );

  return (
    <div className="h-full p-4">
      {hobby.description.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}
