import { useState } from "react";

export default function Events() {
  const [canSee, setCanSee] = useState(false);
  const [text, setText] = useState("false");

  function handleCheckboxChanged() {
    setCanSee(!canSee);
  }

  function handleKeyUp(e) {
    console.log(e.currentTarget.value);
    setText(e.currentTarget.vslue);
  }
  return (
    <>
      <h1>Events Example</h1>
      <div name="checkbox-event">
        <input type="checkbox" onChange={handleCheckboxChanged} />
      </div>

      <div>
        <button
          name="button-event"
          onClick={() => {
            alert("I have been clicked");
          }}
        >
          Click /me
        </button>
      </div>

      <div>
        <input type="text" onKeyUp={(e) => handleKeyUp(e)} />
      </div>
      {canSee ? (
        <div>You are seeing the secret</div>
      ) : (
        <div>You are not allowed to see</div>
      )}

      <div>{text}</div>
    </>
  );
}
