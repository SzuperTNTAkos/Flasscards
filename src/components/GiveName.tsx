import React, { useRef, useState } from "react"

type Props = {
  onDone: Function
  currenName: string
  updateCurrentName: Function
}

export default function GiveName({onDone, currenName, updateCurrentName}: Props) {
  const [textboxVal, updateTextboxVal] = useState(currenName)
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
      alert('Invalid name for your set')
      nameTextboxRef.current?.focus()
    }
  }
  const handleKeyDown = (keyboardEvent: React.KeyboardEvent<HTMLInputElement>) => {
    if(keyboardEvent.key === 'Enter'){
      buttonClicked()
    }
  }
  return (
    <div className="flex h-50 mx-[20%]">
      <input ref={nameTextboxRef} type="text" placeholder="Enter a name for this set..." defaultValue={currenName} onChange={(textbox) => updateTextboxVal(textbox.target.value)} onKeyDown={(key) => handleKeyDown(key)} className="not-dark:bg-element-light dark:bg-element-dark border-3 rounded-xl not-dark:border-element-border-light dark:border-element-border-dark items-center w-full h-fill pl-10 border-solid outline-none not-dark:text-text-light dark:text-text-dark focus:not-dark:border-element-border-active-light focus:dark:border-element-border-active-dark"/>
      <button onClick={buttonClicked} className="ml-5 h-fill w-fit flex items-center px-10 rounded-xl not-dark:bg-element-light dark:bg-element-dark not-dark:border-element-border-light dark:border-element-border-dark border-3 hover:not-dark:border-element-border-active-light hover:dark:border-element-border-active-dark active:not-dark:bg-element-active-light active:dark:bg-element-active-dark not-dark:text-text-light dark:text-text-dark">Done</button>
    </div>
  )
}
