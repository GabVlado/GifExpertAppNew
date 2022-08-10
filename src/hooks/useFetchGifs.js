import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [ isLoading, setIsloading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages);
        setIsloading(false)

    }

    useEffect(() => {
        //getGifs(category)
        //.then(newImages => setImages(newImages)) //Opcion con then
        getImages();


    }, []);



    return {
        images,
        isLoading
    }
}
