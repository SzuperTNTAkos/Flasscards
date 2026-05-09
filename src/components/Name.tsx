import GiveName from "./GiveName";
import Title from "./Title";

type Props = {
  nameGiven: boolean
  onNext: Function
  currentName: string
  updateCurrentName: Function
}

export default function Name({nameGiven, onNext, currentName, updateCurrentName}: Props) {
  return (
    <>
      {nameGiven ? <GiveName onDone={onNext} currenName={currentName} updateCurrentName={updateCurrentName}/> : <Title onEdit={onNext} currentName={currentName} />}
    </>
  )
}