import React from "react";

const TopicList = () => {
  return (
    <>
      <div>
        <h2>Topic Title</h2>
        <div>Topic Description</div>
      </div>
      <div>
        <RemoveButton />
        <Link href="/editTopic/123">edit</Link>
      </div>
    </>
  );
};

export default TopicList;
