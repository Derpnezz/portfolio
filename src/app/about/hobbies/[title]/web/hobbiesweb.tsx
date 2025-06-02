
"use client";
import CustomCodeEditor from "@/app/components/code-editor/codeeditor";
import { addLineBreaks, getLineBreakLength } from "@/app/utils/utils";
import userdata from "../../../../../../public/data/user.json";

export default function HobbiesWeb({
  params,
}: {
  params: { title: string };
}) {
  // Find the hobby object with matching title from userData
  const hobby = userdata.user.hobbies.find(
    (hobby) => hobby.title === params.title
  );

  return (
    <div className="h-full w-full custom-scrollbar">
      <CustomCodeEditor
        code={addLineBreaks(hobby.description, getLineBreakLength())}
      />
    </div>
  );
}
