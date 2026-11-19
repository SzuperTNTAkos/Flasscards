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
    <div className="mb-20">
      {nameGiven ? <GiveName onDone={onNext} currenName={currentName} updateCurrentName={updateCurrentName} doFocus={false}/> : <Title onEdit={onNext} currentName={currentName} />}
    </div>
  )
}