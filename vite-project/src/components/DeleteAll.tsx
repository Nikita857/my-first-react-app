interface Props {
    onDelete: () => void
}

export default function DeleteAll({onDelete}: Props) {
  return (
    <div className="flex flex-center justify-center items-center">
      <button
        onClick={() => onDelete()}
        className="text-red-500
             bg-white border
              border-red-500
               rounded-md p-3
               hover:bg-red-500  hover:text-white
               ">
        Clear all
      </button>
    </div>
  );
}
