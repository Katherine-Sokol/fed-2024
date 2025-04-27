import React from "react";
import { useRef, useState, useEffect } from "react";

function Range(props) {
  const rangeRef = useRef(null);
  let [count, setCount] = useState(null);
  let prevValue = useRef(null);

  useEffect(() => {
    prevValue.current = count;
  }, [count]);

  function changeValue() {
    if (rangeRef.current) {
      setCount((count) => (count = rangeRef.current.value));
    }
  }

  return (
    <>
      <div>
        <h3>Previous value: {prevValue.current}</h3>
        <input
          type="range"
          className="form-range"
          min="0"
          max="10"
          id="customRange3"
          ref={rangeRef}
          onChange={changeValue}
        ></input>
        <h3>Current value: {count}</h3>
      </div>
    </>
  );
}

export default Range;
