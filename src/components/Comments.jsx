


const Comments = ({comment}) => {

  const nestedComments = (comment.children || []).map(comment => {
    return <Comments key={comment.id} comment={comment} type="child" />
  })

  return (
    <>
    <div style={{"marginLeft": "25px", "marginTop": "10px"}}>
      <div>{comment.text}</div>
      {nestedComments}
    </div>
    </>
  )
}

export default Comments;