import { useState } from "react";

// A little helper function to get a random name
const getRandomName = () => {
  const randomNames = ["Eleanor", "Chidi", "Janet", "Michael", "Jason", "Tahani"];
  return randomNames[Math.floor(Math.random() * randomNames.length)];
}

function PracticeComponent() {

  // TODO: Create a piece of state called nameList
  // Give it an initial value of an empty array

  // TODO: Delete the line below
  const nameList = ["ERROR"];

  const onButtonClick = () => {
    // TODO: Add a random name to the list of names
    // You can call the getRandomName function to get a random name
    // Make sure you do not set state directly
    // Make sure you take into account that setting the state is asynchronous
    

    // One way to check that you are accounting for
    // asynchronous updates is to set the state two times
    // (you can just copy and paste to get the same line twice).
    // It should add two random names. If it only adds one name 
    // then it's working off of stale data when it runs the second time
  }

  /***** DON'T CHANGE ANYTHING BELOW *****/

  return (
    <div>
      <p>
        { (nameList.length !== 0) ? nameList.join(", ") : "The list is empty" }
      </p>
      <button className="btn btn-primary" onClick={onButtonClick}>Add a Random Name</button>
    </div>
  )
}

export default function Challenge5() {
  return (
    <div className="col">
      <h2 className="mb-4">Challenge 5</h2>
      <div className="bg-light p-3 mb-3">
        <PracticeComponent/>
      </div>
      <p>
        Store an array in state and update it.
      </p>
      <p>
        When it is working correctly you should see that the list is empty before
        you click the button. Each time you click the button it should add a
        random name to the list.
      </p>
      <p>
        Make sure you do not set state directly and that you take into account
        that setting the state is asynchronous.
      </p>
    </div>
  )
}