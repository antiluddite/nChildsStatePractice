import { useState } from "react";

function PracticeComponent() {
  // TODO: Create a piece of state called amount
  // Give it an initial value of 0

  // TODO: Delete the line below
  const amount = "ERROR";

  const onButtonClick = () => {
    // TODO: Add one to the amount
    // Make sure you are accounting for asynchronous updates
    
    // One way to check that you are accounting for
    // asynchronous updates is to set the state two times
    // (you can just copy and paste to get the same line twice).
    // It should add 2. If it only adds 1, then it's
    // working off of stale data when it runs the second time
  };

  /***** DON'T CHANGE ANYTHING BELOW *****/

  return (
    <div>
      <p>The amount is {amount}.</p>
      <button className="btn btn-primary" onClick={onButtonClick}>
        Increment Amount
      </button>
    </div>
  );
}

export default function Challenge4() {
  return (
    <div className="col">
      <h2 className="mb-4">Challenge 4</h2>
      <div className="bg-light p-3 mb-3">
        <PracticeComponent />
      </div>
      <p>Update a piece of state based on the previous state.</p>
      <p>
        Before you click the button the amount should be zero, each time you
        click the button it should add one to the amount.
      </p>
      <p>Make sure you are accounting for asynchronous updates.</p>
    </div>
  );
}
