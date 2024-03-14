import { useState } from "react";

export default function UserInput({
  type,
//   className,
  inputValue,
  onKeyChange,
  value,
}) {
  // const[change,setChange] = useState(0)
  // function handleChange(e){
  //     setChange(e.target.value)
  //     console.log(change)
  // }
  // console.log(change)
  return (
    <>
      <div>
        <label htmlFor="name">{inputValue}</label>
        <input
          type={type}
          value={value}
          onChange={(e) => onKeyChange(e)}
          required
        //   className={className}
        />
      </div>
    </>
  );
}
