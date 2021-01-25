import { dbService, storageService } from 'fbase';
import React, { useState } from "react";

const Tweet = ({ tweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(tweetObj.text);

  const onDeleteClick = async () => {
    const OK = window.confirm("are you sure?");
    if (OK) {
      //delete tweet.
      await dbService.doc(`tweets/${tweetObj.id}`).delete();
      await storageService.refFromURL(tweetObj.attachmentUrl).delete();
    }
  };
  const onChange = (event) => {
    const { target: { value } } = event;
    setNewTweet(value);
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`tweets/${tweetObj.id}`).update({
      text: newTweet
    })
    setEditing(false);
  }

  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };

  return (
    <div>
      {
        editing ? (
          <>
            { isOwner && (
              <>
                <form onSubmit={onSubmit}>
                  <input onChange={onChange} type="text" placeholder="edit" value={newTweet} required />
                  <input type="submit" value="edit tweet" />
                </form>
                <button onClick={toggleEditing}>cancel</button>
              </>)}
          </>
        ) : (
            <>
              <h4>{tweetObj.text}</h4>
              {
                tweetObj.attachmentUrl && <img src={tweetObj.attachmentUrl} width="50px" height="50px" />
              }
              {
                isOwner && ( // if말고 &&으로 표현가능. 근데 if도 가능할까?
                  <>
                    <button onClick={onDeleteClick}>delete</button>
                    <button onClick={toggleEditing}>edit</button>
                  </>
                )
              }
            </>
          )
      }
    </div>
  );
};

export default Tweet;