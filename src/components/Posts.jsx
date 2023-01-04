import { connect } from 'react-redux';


const Posts = (props) => {

  console.log('props ----->', props);


  return (
    <>
      <div className="posts-container">
        {props.allPosts.map((post, index) => (
          <div key={`post-${index}`}>
            <h1>{post.title}</h1>
            <h2>{post.author}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </>
  )
}

const mapStateToProps = ({ postsReducer }) => {
  return {
    allPosts: postsReducer.blogPosts
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);