"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (res.ok) {
        router.refresh();
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
          value={newTitle}
          className="border-slate-500 border "
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          value={newDescription}
          className="border-slate-500 border-2 w-full"
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </div>
      <button className="flex flex-end px-2 border-slate-500 border rounded-xl my-2 w-fit">
        finalize
      </button>
    </form>
  );
}
