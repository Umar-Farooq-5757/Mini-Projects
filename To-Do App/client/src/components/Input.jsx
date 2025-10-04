import { Plus } from "lucide-react";

const Input = () => {
  return (
    <div className="my-5 flex justify-center items-center gap-5 pt-8">
      <input className="outline outline-gray-400 md:w-[30rem] pl-2 py-1 rounded-md" type="text" placeholder="Add a todo ..." name="" id="" />
      <button className="border border-gray-200 transition-all active:scale-95 shadow2 flex justify-center items-center rounded-md px-3 py-1 cursor-pointer">
        <Plus /> Add
      </button>
    </div>
  );
};

export default Input;
