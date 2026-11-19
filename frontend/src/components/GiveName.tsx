import React, { useRef, useState } from "react"

type Props = {
  onDone: Function
  currenName: string
  updateCurrentName: Function
  doFocus: boolean
}

export default function GiveName({onDone, currenName, updateCurrentName}: Props) {
  const [textboxVal, updateTextboxVal] = useState(currenName)
  const [InvalidNameError, showErrorInvalidName] = useState(false)
  const nameTextboxRef = useRef<HTMLInputElement>(null)
  const isValidName = (value: string) => {
    return !/^\s+$|^$/.test(value)
  }
  const buttonClicked = () => {
    if(isValidName(textboxVal)) {
      onDone()
      updateCurrentName(textboxVal)
    }
    else {
      showErrorInvalidName(true)
      nameTextboxRef.current?.focus()
    }
  }
  const handleKeyDown = (keyboardEvent: React.KeyboardEvent<HTMLInputElement>) => {
    if(keyboardEvent.key === 'Enter'){
      buttonClicked()
    }
  }
  return (
    <div className="mx-[20%]">
      <div className="flex h-50">
        <input ref={nameTextboxRef} type="text" placeholder="Enter a name for this set..." defaultValue={currenName} onChange={(textbox) => updateTextboxVal(textbox.target.value)} onKeyDown={(key) => handleKeyDown(key)} className="bg-element border-3 rounded-xl border-element-border items-center w-full h-fill pl-10 border-solid outline-none text-text focus:border-element-border-active"/>
        <button onClick={buttonClicked} className="ml-5 h-fill w-fit flex items-center px-10 rounded-xl bg-element border-element-border border-3 hover:border-element-border-active active:bg-element-active text-text">Done</button>
      </div>
      <div className={`text-error ${InvalidNameError ? '' : 'hidden' }`}>Invalid name for your set!</div>
    </div>
  )
}
