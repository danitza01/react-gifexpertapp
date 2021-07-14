
import { useEffect, useState } from "react";

import { getGIfs } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {
    const [state, setstate] = useState({
        data: [],
        loading: true

    });

    
    useEffect( () => {
       
        getGIfs( category )
        .then( img => {
            
            setTimeout( () => {
                setstate({
                    data: img,
                    loading: false
                });
            },3000)
            
        })
        
    }, [ category ])
    return state;
}