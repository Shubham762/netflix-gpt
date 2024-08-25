import {IMG_CDN} from '../utils/constants'
const MovieCard =({posterPath})=>{
    if(!posterPath) return
    return(
        <div className='w-40 md:w-60 pr-6'>
            <img 
            alt=""  
            src={IMG_CDN+posterPath}
           
            />
        </div>
    )
}
export default MovieCard;