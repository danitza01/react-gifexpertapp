import React, {Fragment} from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setcategories] = useState(['hola'])

    /*const handleAdd = () => {
        setcategories(cate => [...cate, 'k']);
        
    }*/
    
    return(
        <Fragment>
        <h2>GifExpertApp</h2>
        <AddCategory setcategories={setcategories}/>
        <hr/>
        
        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                    key= { category }
                    category = {category}
                    
                    
                    />
                )  )
            }
        </ol>
        </Fragment>
        
    );
}

export default GifExpertApp;
