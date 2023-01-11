
import { useContext } from "react";
import { SettingsContext } from '../context/settings'

// form to add comments
// button to delete comments


const Comments = ({ children }) => {

  const { commentData, getNestedComments, showComments, nestedComments, handleShowComments } = useContext(SettingsContext);
  // console.log('comments props ----->', commentData)

  return (
    <>
    <div>
      {commentData.map((comment, index) => (
        <div key={`comment-${index}`}>
          <h1>{comment.text}</h1>
          
          {showComments ? <div>{ nestedComments.map((nestedComment, index) => (
            <div key={`nested-${index}`}>
              <p>{nestedComment.text}</p>
              <button onClick={() => handleShowComments()}>hide comments</button>
            </div>
            
          ))} </div> : <button onClick={() => getNestedComments(comment.children)}>show more comments</button>}
        </div>
      ))}
    </div>
    </>
  )
}

export default Comments;