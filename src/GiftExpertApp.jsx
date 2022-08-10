import { useState } from 'react'
import { AddCategory, GifGrid  } from './components'
 

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        //console.log(newCategory)
        setCategories([newCategory, ...categories])
        //setCategories( cat => [ ...cat, 'Valorant'])
    }


    return (
        <>
            <h1>GifExpert APp</h1>
            <AddCategory
                //setCategories={setCategories} 
                onNewCategory={value => onAddCategory(value)}
            // currentCategories = {categories}
            />
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )
                )
            }
        </>
    )
}
