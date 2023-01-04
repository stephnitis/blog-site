import { connect } from 'react-redux';

// form to add comments
// button to delete comments

const Comments = (props) => {
  console.log('comments props ----->', props)

  // const nestedComments = (comment.children || []).map(comment => {
  //   return <Comment key={comment.id} comment={comment} type="child" />
  // })

  return (
    <>
    <div>

    </div>
      <div>
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
      </div>
    </>
  )
}

const mapStateToProps = ({ commentsReducer }) => {
  return {
    allComments: commentsReducer.commentData
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);