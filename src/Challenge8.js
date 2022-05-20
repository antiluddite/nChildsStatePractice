import { useState } from "react";

function PracticeComponent() {
  const [user, setUser] = useState({
    name: {
      firstName: "Emma",
      lastName: "none"
    },
    cart: ["pasta", "cheese"]
  });

  const handleAddBanana = () => {
    // TODO: Add the string "banana" to the user's cart
    // Make sure you do not set state directly
    // Make sure you take into account that setting the state is asynchronous
    
  }

  const handleSetNameToWatson = () => {
    // TODO: Set the user's last name to "Watson"
    // Make sure you do not set state directly
    // Make sure you take into account that setting the state is asynchronous
    
  }

  const handleSetNameToStone = () => {
    // TODO: Set the user's last name to "Stone"
    // Make sure you do not set state directly
    // Make sure you take into account that setting the state is asynchronous
    
  }

  /***** DON'T CHANGE ANYTHING BELOW *****/

  return (
    <>
      <p>
        First Name: <strong>{user.name.firstName}</strong><br/>
        Last Name: <strong>{user.name.lastName}</strong><br/>
        Cart: <strong>{user.cart.join(", ")}</strong>
      </p>
      <button className="btn btn-primary mb-3" onClick={handleAddBanana}>
        Add Banana to the Cart
      </button><br/>
      <button className="btn btn-primary mb-3" onClick={handleSetNameToWatson}>
        Set Last Name to Watson
      </button><br/>
      <button className="btn btn-primary" onClick={handleSetNameToStone}>
        Set Last Name to Stone
      </button>
    </>
  )
}

export default function Challenge8() {
  return (
    <div className="col">
      <h2 className="mb-4">Challenge 8</h2>
      <div className="bg-light p-3 mb-3">
        <PracticeComponent/>
      </div>
      <p>
        Update state on a complex piece of state.
      </p>
      <p>
        When it is working correctly:
      </p>
      <ul>
        <li>
          When the page first loads in you should see that the
          first name is Emma, the last name is none, and the cart
          has past and cheese in it
        </li>
        <li>
          When you click the Add Banana to the Cart button it
          should add one more banana to the cart. The first
          and last name should not be altered.
        </li>
        <li>
          When you click the Set Last Name to Watson button,
          it should set the last name to Watson. The first name
          and the cart should not be altered. The Set Last Name
          to Stone button should work similarly.
        </li>
      </ul>
      <p>
        Make sure you make copies at every level!
      </p>
      <p>
        <strong>Note:</strong> This exercise is a good example of why it's usually 
        best to break the state out into multiple pieces of state,
        rather than all in one complex object. But there are times when
        it does make sense to have a more complex piece of state.
      </p>
    </div>
  )
}