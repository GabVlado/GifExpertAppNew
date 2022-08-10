import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ( {target}) => {
        console.log(target.value);
        setInputValue(target.value)
    }

    const onSubmit = ( event ) => {

        event.preventDefault();

        if(inputValue.trim().length <= 1) return;
        //console.log(inputValue)
        //setCategories( (categories) => [ inputValue, ...categories] )
        onNewCategory(inputValue.trim())
        setInputValue('')
    }


    return (
        // <form onSubmit={ (event )  => onSubmit(event)}>            
        <form onSubmit={onSubmit }>            
           <input
                type="text"
                placeholder="Buscar gifts"
                value={inputValue}
                onChange={  onInputChange }
            />
        </form>
    )
}
