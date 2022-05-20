import { useState } from "react";

function PracticeComponent() {

  // TODO: Create a piece of state called show
  // Give it an initial value of false

  // TODO: Delete the line below
  const show = true;

  const onButtonClick = () => {
    // TODO: Set the show piece of state to true
    // Do not modify the state directly!
  }

  /***** DON'T CHANGE ANYTHING BELOW *****/

  return (
    <div>
      <p>It { (show) ? "IS" : "IS NOT" } showing.</p>
      <button className="btn btn-primary" onClick={onButtonClick}>Show</button>
    </div>
  )
}

export default function Challenge3() {
  return (
    <div className="col">
      <h2 className="mb-4">Challenge 3</h2>
      <div className="bg-light p-3 mb-3">
        <PracticeComponent/>
      </div>
      <p>
        Create a piece of state and update the state when a button is clicked.
      </p>
      <p>
        When it is working correctly, 
        before you hit the button you should see:<br/>
        It IS NOT showing<br/><br/>
        After you hit the button you should see:<br/>
        It IS showing<br/>
      </p>
      <p>
        Make sure you follow the rules of updating state
        and do not modify the state directly!
      </p>
    </div>
  )
}