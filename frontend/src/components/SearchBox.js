import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'

const SearchBox = () => {
    const history = useNavigate();
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history(`/search/${keyword}`)
        } else {
            history('/')
        }
    }

    return (
        <div>
            <Form onSubmit={submitHandler} inline="true">
                <div className='d-flex flex-row align-items-center justify-center'>
                    <div className='m-2'>
                        <Form.Control
                            type='text'
                            name='q'
                            onChange={(e) => setKeyword(e.target.value)}
                            placeholder='Search Products...'
                            className='mr-sm-2 ml-sm-5'
                        ></Form.Control>
                    </div>
                    <div>
                        <Button type='submit' variant='outline-success' className='p-2'>
                            Search
                        </Button>
                    </div>
                </div>
            </Form>
        </div>

    )
}

export default SearchBox