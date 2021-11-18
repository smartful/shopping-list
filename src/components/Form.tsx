import React, { ReactEventHandler, useState } from "react";

const Form: React.FC = () => {
  const [item, setItem] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Todo
  };

  const inputStyle: React.CSSProperties = {
    marginBottom: "2rem",
    width: "30rem",
    backgroundColor: "whitesmoke",
    padding: "0.8rem",
    fontSize: "1.5rem",
  };

  const buttonStyle: React.CSSProperties = {
    color: "white",
    backgroundColor: "#8888CC",
    borderTopRightRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
    padding: "0.8rem",
    fontSize: "1.5rem",
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        style={inputStyle}
        value={item}
        placeholder="Jus d'orange"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setItem(e.target.value)
        }
      />
      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
};

export default Form;
