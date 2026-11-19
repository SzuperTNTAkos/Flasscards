import Dropdown from './Dropdown'

export default function LanguageTextbox() {
  return (
    <div className='flex my-10'>
      <input type="text" className="focus:outline-none bg-element border-3 border-solid rounded-xl border-element-border flex items-center h-full pl-10 focus:border-element-border-active text-text py-4 w-[80%]" />
      <Dropdown title="Select Language" className="w-[20%] h-[inherit] ml-15">
        <p>asdf</p>
        <p>fghj</p>
      </Dropdown>
    </div>
  )
}
