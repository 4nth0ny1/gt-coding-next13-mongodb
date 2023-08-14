"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Topic Title"
          className="border-slate-500 border "
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Topic Description"
          className="border-slate-500 border-2 w-full"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button className="flex flex-end px-2 border-slate-500 border rounded-xl my-2 w-fit">
        create
      </button>
    </form>
  );
}
