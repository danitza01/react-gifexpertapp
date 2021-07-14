import React, { useState } from 'react'
import PropTypes from 'prop-types';
                             //props desustructurar
export const AddCategory = ({setcategories}) => {
    const [inputValue, setInputValue] = useState('Hola mundo')

    const inputValueCHange = (e) => {
        setInputValue(e.target.value);

    }

    const handleSumit = (e) => {
        e.preventDefault();
        setcategories(cate => [ inputValue,...cate ]);


    }
    return (
       <form onSubmit={handleSumit}>
            <input
                type="text"
                value={ inputValue }
                onChange = { inputValueCHange}
            />
        </form>

    )
}
AddCategory.propTypes = {

    setcategories: PropTypes.func.isRequired
}

