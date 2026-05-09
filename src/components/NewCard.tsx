import Dropdown from "./Dropdown"

export default function NewCard() {
  const inputStyle = 'not-dark:bg-element-light dark:bg-element-dark border-3 border-solid rounded-xl not-dark:border-element-border-light dark:border-element-border-dark flex items-center w-full h-full pl-10 focus:not-dark:border-element-border-active-light focus:dark:border-element-border-active-dark'
  return (
    <div>
      <input type="text" className={inputStyle} />
      <Dropdown>
        <p>asdf</p>
        <p>fghj</p>
      </Dropdown>
      <button></button>
      <button></button>
      <input type="text" className={inputStyle} />
    </div>
  )
}
