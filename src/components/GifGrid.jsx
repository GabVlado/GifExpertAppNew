
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { images , isLoading } = useFetchGifs(category)
    //const [images, setImages] = useState([]);
    
    //console.log( {isLoading} );  // Los console.log disparan rerenderizaciones 


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading  && (<h2>Cargando...</h2>)
            }
            
            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem  
                            key={image.id}
                            {...image}
                        />
                    ))
                }
        
            </div>
        </>
    )
}
