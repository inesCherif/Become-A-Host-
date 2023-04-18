import { useState } from "react";

function useTextInput(maxLength) {
  const [value, setValue] = useState("");
  const remainingChars = maxLength - value.length;

  function handleChange(event) {
    const newValue = event.target.value;
    if (newValue.length <= maxLength) {
      setValue(newValue);
    }
  }

  return {
    value,
    handleChange,
    remainingChars,
  };
}

export default useTextInput;



// **********************************counting words***************************************
// function handleChange(event) {
//   const newValue = event.target.value;
//   if (newValue.split(" ").filter(Boolean).length <= maxLength) {
//     setValue(newValue);
//   }
// }
// ****************************************************************************************