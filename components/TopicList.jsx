import React from "react";
import RemoveButton from "./RemoveButton";
import Link from "next/link";

const TopicList = () => {
  return (
    <>
      <div className="flex justify-between border-slate-300 border-2 p-4 rounded-xl bg-slate-100 shadow-lg mb-4">
        <div>
          <h2 className="text-2xl">Topic Title</h2>
          <div>Topic Description</div>
        </div>
        <div className="flex gap-2">
          <RemoveButton />
          <Link href="/editTopic/123">edit</Link>
        </div>
      </div>
    </>
  );
};

export default TopicList;
