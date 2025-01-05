import { useState } from 'react'


export const AddCategory = ({ onNewCategory }) => {

const [inputValue, setInputValue] = useState('')

const onInputchange = ({target}) => {
    setInputValue( target.value );
}


const onsubmit = ( event ) => {
    event.preventDefault();
    if( inputValue.trim() <= 1 ) return;

    //setCategories( categories => [inputValue, ...categories] );
    setInputValue('');
    onNewCategory( inputValue.trim() );
}




    return (
        <form onSubmit={ onsubmit }>    
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputchange }
            />
        </form>
    )
}
