"use client";
import React from "react";
import { useRouter } from "next/navigation";

const RemoveButton = ({ id }) => {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return <div onClick={removeTopic}>delete</div>;
};

export default RemoveButton;
