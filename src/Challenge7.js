import { useState } from "react";
import { v4 as uuid } from 'uuid';

export function ParentComponent() {
  // TODO: Create a piece of state called messageList
  // Give it an initial value of an empty array

  // TODO: Delete the line below
  const messageList = [];

  const addMessage = (newMessage) => {
    // TODO: Give the new message an id with uuid
    // Do not edit the newMessage parameter directly

    // TODO: Add the new message to the message list
    // Make sure you follow all the rules of state
    
  }

  return (
    <div>
      <DisplayComponent messageList={messageList}/>
      <hr/>
      <FormComponent onSubmit={addMessage} />
    </div>
  )
}

function FormComponent({ onSubmit }) {
  // TODO: Set up this form so it allows a message to be created
  // and clears after submitting

  const onSubmitClicked = (event) => {
    event.preventDefault();
  }

  return (
    <form>
      <h4 className="mt-3">Create Message</h4>
      <div className="mb-3">
        <label htmlFor="state-input" className="form-label">Author</label>
        <input type="text" 
          id="state-input" 
          className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="zip-input" className="form-label">Text</label>
        <textarea 
          className="form-control"
          id="text-input" />
        <button 
          type="submit" 
          className="btn btn-primary mt-3"
          onClick={onSubmitClicked}
        >
          Submit
        </button>
      </div>
    </form>
  )
}

/***** DON'T CHANGE ANYTHING BELOW *****/

function DisplayComponent({ messageList }) {
  if(!messageList || !Array.isArray(messageList)) return <p>ERROR</p>

  return (
    <>
      <h4>Messages</h4>
      <ul className="list-unstyled mt-3">
        { messageList.map(message => (
          <li key={message.id} className="mb-2">
            <strong>{message.author}:</strong> {message.text}
          </li>
        ))}
      </ul>
    </>
  )
}

export default function Challenge7() {
  return (
    <div className="col">
      <h2 className="mb-4">Challenge 7</h2>
      <div className="bg-light p-3 mb-3">
        <ParentComponent/>
      </div>
      <p>
        Set up a form that creates a message and adds it to a list.
      </p>
      <p>
        When it is working correctly you should be able to fill out
        the Create Message form and submit it to get a new message
        in the list. The form should clear after it submits.
      </p>
      <p>
        Make sure you never set state directly and account for the
        asynchronous updating of state.
      </p>
    </div>
  )
}