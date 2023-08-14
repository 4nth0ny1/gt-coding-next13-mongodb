import React from "react";
import RemoveButton from "./RemoveButton";
import Link from "next/link";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const TopicList = async () => {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((topic) => {
        return (
          <div className="flex justify-between border-slate-300 border-2 p-4 rounded-xl bg-slate-100 shadow-lg mb-4">
            <div>
              <h2 className="text-2xl">{topic.title}</h2>
              <div>{topic.description}</div>
            </div>
            <div className="flex gap-2">
              <RemoveButton id={topic._id} />
              <Link href={`/editTopic/${topic._id}`}>edit</Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TopicList;
