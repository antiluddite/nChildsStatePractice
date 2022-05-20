import { useState } from "react";

// A little helper function to get a random name
const getRandomName = () => {
  const randomNames = ["Eleanor", "Chidi", "Janet", "Michael", "Jason", "Tahani"];
  return randomNames[Math.floor(Math.random() * randomNames.length)];
}

function PracticeComponent() {

  // TODO: Create a piece of state called user
  // Give it an initial value of an object with two properties:
  // - A name property set to the string "No Name"
  // - A role property set to the string "Admin"

  // TODO: Delete the line below
  const user = { name: "ERROR", role: "ERROR" };

  const onButtonClick = () => {
    // TODO: Set the user's name to a random name
    // You can call the getRandomName function to get a random name
    // Make sure you do not set state directly
    // Make sure you take into account that setting the state is asynchronous
    
  }

  /***** DON'T CHANGE ANYTHING BELOW *****/

  return (
    <>
      <p>
        Name: <strong>{user.name}</strong><br/>
        Role: <strong>{user.role}</strong><br/>
      </p>
      <button className="btn btn-primary" onClick={onButtonClick}>
        Change Name to a Random Name
      </button>
    </>
  )
}

export default function Challenge6() {
  return (
    <div className="col">
      <h2 className="mb-4">Challenge 6</h2>
      <div className="bg-light p-3 mb-3">
        <PracticeComponent/>
      </div>
      <p>
        Store an object in state and update it.
      </p>
      <p>
        When it is working correctly you should see that 
        the name is "No Name" and the role is "Admin"
        before you click the button.<br/>
        After you click the button you should see that
        the name changes to a random name and the
        role should stay "Admin".
      </p>
      <p>
        Make sure you don't update state directly and that
        you account for asynchronous updates.
      </p>
    </div>
  )
}