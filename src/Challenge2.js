import { useState } from "react";

function ParentComponent() {

  // TODO: Create a piece of state called total
  // Give it an initial value of 3

  // TODO: Pass the total down to the child component
  return (
    <ChildComponent />
  )
}

// TODO: Accept and destructure the prop in child component
function ChildComponent() {

  // TODO: Delete the line below
  const total = "ERROR";

  /***** DON'T CHANGE ANYTHING BELOW *****/

  return (
    <div>
      The total is { total }.
    </div>
  )
}

export default function Challenge2() {
  return (
    <div className="col">
      <h2 className="mb-4">Challenge 2</h2>
      <div className="bg-light p-3 mb-3">
        <ParentComponent />
      </div>
      <p>
        Store a piece of state in ParentComponent and pass the
        state data down to ChildComponent.
      </p>
      <p>
        When it is working correctly you should see:<br/>
        The total is 3.
      </p>
      <p>
        Make sure you use the expected prop name.
      </p>
    </div>
  )
}