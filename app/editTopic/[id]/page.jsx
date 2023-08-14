import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params; // because dynamic route we get the id from params

  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return (
    <div>
      <EditTopicForm title={title} description={description} id={id} />
    </div>
  );
}
