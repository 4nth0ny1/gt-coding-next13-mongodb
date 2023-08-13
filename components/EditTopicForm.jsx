export default function EditTopicForm() {
  return (
    <form>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Topic Title"
          classname="border-slate-500 border "
        />
        <input
          type="text"
          placeholder="Topic Description"
          classname="border-slate-500 border-2 w-full"
        />
      </div>
      <button className="flex flex-end px-2 border-slate-500 border rounded-xl my-2 w-fit">
        finalize
      </button>
    </form>
  );
}
