import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ '' ]);

    const onAddCategory = (newCategory) => {
        
        if (categories.includes(newCategory) ) return;
        setCategories([ ...categories, newCategory ])
    }

    return (
        <>
            <h1>Gif Search</h1>
            <AddCategory 
            onNewCategory={ event => onAddCategory(event) }
            />
                { 
                    categories.map( (category) => (
                        <GifGrid key={ category } category={ category } />
                    )) 
                }
        </>
    )
}
