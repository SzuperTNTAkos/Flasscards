import { useState } from "react";
import Name from "../components/Name";
import NewCard from "../components/NewCard";


export default function Create() {
  const [nameGiven, updateNameComponent] = useState(true)
  const [currentName, updateCurrentName] = useState('')
  return (
    <div>
      <Name nameGiven={nameGiven} onNext={() => updateNameComponent(nameGiven => !nameGiven)} currentName={currentName} updateCurrentName={(val: string) => updateCurrentName(val)}/>
      <NewCard />
    </div>
  )
}
