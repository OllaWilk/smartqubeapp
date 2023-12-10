import { useState } from "react";

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue((prevState) => !prevState);
  return [value, toggleValue];
}
