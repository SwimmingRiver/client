import React, { useState } from "react";

const Inputer = () => {
  const [inputData, setInputData] = useState("");
  const [submitData, setSubmitData] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitData(inputData);
    setSubmitData("");
    setInputData("");
    console.log(submitData);
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value);
        }}
        placeholder="text..."
      />
      <div>
        <button
          type="button"
          onClick={() => {
            setInputData("");
          }}
        >
          reset
        </button>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default Inputer;
