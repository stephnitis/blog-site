import { useContext } from "react";
import { SettingsContext } from '../context/settings'

const NestedComments = ({ children }) => {

  const {commentData} = useContext(SettingsContext);

  console.log('nested commentData ----->', commentData);
  console.log('children ------>', commentData.children);

  const nestedComments = (commentData.children || []).map(comment => {
    return <NestedComments key={comment.id} comment={comment} type="child" />
  })

  console.log('nested comments ----->', nestedComments);

  return (
    <div style={{"marginLeft": "25px", "marginTop": "10px"}}>
      <div>{commentData.text}</div>
      {nestedComments}
    </div>
  )

}

export default NestedComments;