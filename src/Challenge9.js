import { useEffect, useState } from "react";

function ParentComponent() {
  // TODO: Create a piece of state called address
  // Give it an initial value of an object with two properties:
  // - state set to the string "NV"
  // - zipCode set to the string "12345"

  const clearAddress = () => {
    // TODO: Set the state property of the address to "none"
    // and set the zipCode property of the address to ""
  }

  // TODO: Give display component and form component the props they need
  return (
    <div>
      <DisplayComponent/>
      <button onClick={clearAddress} className="btn btn-warning mb-3">
        Clear Address
      </button>
      <FormComponent/>
    </div>
  )
}

function FormComponent() {
  // TODO: Set up this form so it allows the address to be updated
  // and it stays synced with the address data if it is updated elsewhere

  const onSubmitClicked = (event) => {
    event.preventDefault();
  }

  return (
    <form>
      <h4 className="mt-3">Update Address</h4>
      <div className="mb-3">
        <label htmlFor="state-input" className="form-label">State</label>
        <select id="state-input" 
          className="form-control">
          <option value="none">None</option>
          <option value="AZ">AZ</option>
          <option value="WI">WI</option>
          <option value="NV">NV</option>
          <option value="KS">KS</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="zip-input" className="form-label">Zip Code</label>
        <input type="text" 
          className="form-control"
          id="zip-input" />
        <button 
          type="submit" 
          className="btn btn-primary mt-3"
          onClick={onSubmitClicked}
        >
          Save
        </button>
      </div>
    </form>
  )
}

/***** DON'T CHANGE ANYTHING BELOW *****/

function DisplayComponent({ address }) {
  if(!address) return <p>ERROR</p>

  return (
    <p>
      The address is: <strong>{ address.state } {address.zipCode}</strong>
    </p>
  )
}

export default function Challenge9() {
  return (
    <div className="col">
      <h2 className="mb-4">Challenge 9</h2>
      <div className="bg-light p-3 mb-3">
        <ParentComponent/>
      </div>
      <p>
        Make an update form that stays synced with the
        address data.
      </p>
      <p>
        When it is working correctly:<br/>
        The address should start as NV 12345 in both
        the display component and the form.<br/>
        When you click the Clear Address button the
        address should be "none" in both the display
        component and the form.<br/>
        When you make changes in the form and save it
        the changes should be reflected in both
        the display component and the form.
      </p>
      <p>
        You may want to Google "react setting state based on props" and
        make sure you find an up-to-date example with functional components.
      </p>
    </div>
  )
}