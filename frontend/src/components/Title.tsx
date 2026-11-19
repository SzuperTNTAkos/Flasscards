import Pencil from "../../public/icons/pencil_1.svg?react";

type Props = {
  onEdit: Function
  currentName: string
}

export default function Title({onEdit, currentName}: Props) {
  return (
    <div className="h-fit items-center flex justify-center my-10">
      <h2 className="mr-10 text-text text-2xl font-bold">{currentName}</h2>
      <button onClick={() => onEdit()} className="h-full w-auto cursor-pointer">
        <Pencil className="h-20 w-auto fill-text"/>
      </button>
    </div>
  )
}
