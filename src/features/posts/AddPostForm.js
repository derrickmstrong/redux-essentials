import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './postsSlice'

const AddPostForm = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = (e) => {
    setTitle(e.target.value)
  }

  const onContentChanged = (e) => {
    setContent(e.target.value)
  }

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      )
    }

    // reset local state variables
    setTitle('')
    setContent('')
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form action="">
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          placeholder="Post Title"
          onChange={onTitleChanged}
        />
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          placeholder="Post Content"
          onChange={onContentChanged}
        />
        {!title || !content ? (
          <button type="button" disabled>
            Create Post
          </button>
        ) : (
          <button type="button" onClick={onSavePostClicked}>
            Save Post
          </button>
        )}
      </form>
    </section>
  )
}

export default AddPostForm
