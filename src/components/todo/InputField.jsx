import './todo-form.scss'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../../slices/todoSlice'
import Input from './Input'

export const InputField = () => {
    const dispatch = useDispatch()
    const [todoValue, setTodoValue] = useState('')

    const addTodoHandler = () => {
        if (todoValue.length) {
            dispatch(addNewTodo(todoValue))
            setTodoValue('')
        }
    }

    return (
        <form
            className="form-todo"
            onSubmit={(e) => {
                e.preventDefault()
                addTodoHandler()
            }}
        >
            <Input
                placeholer={'New todo....'}
                todoValue={todoValue}
                setTodoValue={setTodoValue}
            />
        </form>
    )
}
