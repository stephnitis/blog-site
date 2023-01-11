import NestedComments from './NestedComments';
import { useContext } from "react";
import { SettingsContext } from '../context/settings'
// form to add comments
// button to delete comments


const Comments = ({ children }) => {

  const {commentData} = useContext(SettingsContext);
  // console.log('comments props ----->', commentData)

  return (
    <>
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