import React, { useState } from 'react'
import './form-postlist.scss'
import { useDispatch } from 'react-redux'
import { addNewPost } from '../../slices/postSlice'

const TextField = () => {
    const dispatch = useDispatch()
    const [postValue, setPostValue] = useState('')

    return (
        <form>
            <textarea
                type="text"
                value={postValue}
                onChange={(e) => setPostValue(e.target.value)}
                placeholder="Input posts"
                className="textarea-input"
            />
            <button
                className="textarea-btn"
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(addNewPost(postValue))
                    setPostValue('')
                }}
            >
                Add post
            </button>
        </form>
    )
}

export default TextField
