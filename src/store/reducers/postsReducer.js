let initialState = {

  blogPosts: [
    {
      title: 'What are React Hooks?',
      author: 'React Docs',
      content: 'Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don\’t work inside classes — they let you use React without classes.',
    },
    {
      title: 'What is context?',
      author: 'React Docs',
      content: 'Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.',
    },
  ]
};

function postsReducer(state = initialState, action) {

  console.log('state from reducer ------>', state)

  const { type } = action;

  switch (type) {

    case 'all-posts':
      return {
        posts: state,
      }

      case 'reset':
        return initialState;

      default:
        return state;

  }
}

export const allPosts = (posts) => {
  return {
    type: 'all-posts',
    payload: posts,
  }
}

export default postsReducer;