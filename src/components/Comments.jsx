import NestedComments from './NestedComments';
import { useContext } from "react";
import { SettingsContext } from '../context/settings'
// form to add comments
// button to delete comments


const Comments = ({ children }) => {

  const { commentData, getNestedComments, showComments, nestedComments } = useContext(SettingsContext);
  // console.log('comments props ----->', commentData)

  return (
    <>
    <div>
      {commentData.map((comment, index) => (
        <div key={`comment-${index}`}>
          <h1>{comment.text}</h1>
          <button onClick={() => getNestedComments(comment.children)}>show more comments</button>
          {showComments ? <div>{ nestedComments.map((nestedComment, index) => (
            <div key={`nested-${index}`}>
              <p>{nestedComment.text}</p>
            </div>
            
          ))} </div> : 'No Additional Comments'}
        </div>
      ))}
    </div>
    <div>
          {
            commentData.map((comment) => {
              return (
                <NestedComments key={comment.id} comment={comment} />
              )
            })
          }

    </div>
      {/* <div>
        {props.allComments.map((comment, index) => (
          <div key={`comment-${index}`} className="comment-container">
            <p>{comment.text}</p>
            {comment.children.map((childComment, index) => (
              <div key={`child-${index}`} className="nested-comment-container">
                <p>{childComment.text}</p>
                {console.log('comment children ----->', comment.children)}
              </div>
            ))}
          </div>
        ))}
      </div> */}
    </>
  )
}

export default Comments;