import { useState } from "react";
import Simple from "./Simple";

export default function ConditionalsIf() {
    const [selectRate, setSelectedRate] = useState(1);
    
    function displayResult(){
        if (selectRate === 1){
            return <span>Nooo!</span>
        } else if (selectRate === 2){
            return (
                <>
                <span>Please tell us how to get better: </span>
                <input type="text" />
                </>
            );
        } else if (selectRate === 3){
            <>
                <Simple />
            </>
        } else {
            <span>Thanks!</span>
        }
    }
  return (
    <>
      <h1>Conditionals If example</h1>
      <div>Rate this website</div>
      <select onChange={(e) => {
        console.log(e.currentTarget.value, 10)
      }}>
        <option>{1}</option>
        <option>{2}</option>
        <option>{3}</option>
        <option>{4}</option>
        <option>{5}</option>
      </select>

      <div>
        {}
      </div>
    </>
  );
}
