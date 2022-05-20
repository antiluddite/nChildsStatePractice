import { useState } from "react";

function PracticeComponent() {

  // TODO: Create a piece of state called flavor
  // Give it an initial value of "vanilla"
  const [flavor, setFlavor] = useState("vanilla");

  /***** DON'T CHANGE ANYTHING BELOW *****/

  return (
    <div>
      The flavor is <strong>{ flavor }</strong>.
    </div>
  )
}

export default function Challenge1() {
  return (
    <div className="col">
      <h2 className="mb-4">Challenge 1</h2>
      <div className="bg-light p-3 mb-3">
        <PracticeComponent />
      </div>
      <p>
        Create a piece of state and give it an inital value.
      </p>
      <p>
        When it is working correctly you should see:<br/>
        The flavor is vanilla.
      </p>
      <p>
        Make sure you use the expected name for the piece of state.
      </p>
    </div>
  )
}