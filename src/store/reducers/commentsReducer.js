// functionality to add and delete comments as well as display

let initialState = {

  commentData: [
    {
      id: 1,
      text: "I have something to say",
      author: "user1",
      children: [
        {
          id: 2,
          text: "I have a response to the thing you said",
          author: "user2",
          children: [
            {
              id: 3,
              text: "I have a response to the other thing that was said",
              author: "user3",
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "I think this article is fantastic.",
      author: "user4",
      children: []
    }
  ]
};

function commentsReducer(state = initialState, action) {

  // console.log('state from comments reducer ----->', state);

  const { type } = action;

  switch (type){

    case 'all-comments':
      return {
        comments: state,
      }

    case 'access-children':
      return {
        
      }

    case 'reset':
      return initialState;


    default:
      return state;
  }

}

export const allComments = (comments) => {
  return {
    type: 'all-comments',
    payload: comments,
  }
}

export default commentsReducer;