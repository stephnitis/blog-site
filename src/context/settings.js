import { createUnarySpacing } from '@mui/system';
import { chainPropTypes } from '@mui/utils';
import React from 'react';
import { useState, useEffect } from 'react';

export const SettingsContext = React.createContext();

const commentData = [
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

const blogPosts = [
  {
    title: 'What are React Hooks?',
    author: 'React Docs',
    content: 'Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don\’t work inside classes — they let you use React without classes.',
    comments: [],
  },
  {
    title: 'What is context?',
    author: 'React Docs',
    content: 'Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.',
    comments: [],
  },
]

const SettingsProvider = ({ children }) => {

  // const [nestedComments, setNestedComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const handleShowComments = () => {
    setShowComments(true);
  }


  // accesses first layer of nested comments
  commentData.map((comment) => {
    const childComments = [];
    if (comment.children){
      console.log('comment.children', comment.children)
      childComments.push(comment.children)
    }
    console.log('comment from map', comment)
    console.log('childComments array', childComments)
    return {...comment}
  })

  const values = {
    commentData,
    blogPosts,
    // nestedComments,
    handleShowComments,
    showComments,
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;