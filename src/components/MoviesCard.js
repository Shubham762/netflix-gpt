import {IMG_CDN} from '../utils/constants'
const MovieCard =({posterPath})=>{
    return(
        <div className='w-60 pr-6'>
            <img 
            alt=""  
            src={IMG_CDN+posterPath}
           
            />
        </div>
    )
}
export default MovieCard;