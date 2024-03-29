import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    const {data: images,loading} = useFetchGifs( category );

   
    

    return (

        <>
        <h3>{category}</h3>

        {loading && <p className="animate__animated animate__fadeIn">loading</p>}

       <div className="card-grid">
            
            
            <ol>
                {
                 images.map( img => {
                    return (
        
                    //<li key= {id} > {title}</li>
                    <GifGridItem 
                        key = {img.id}
                        {...img} 
                    />
            
                    )
                 })
                }
             </ol>

             </div>
        
        </>
    )
}

export default GifGrid;