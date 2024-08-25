const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[27%] md:pt-[20%] px-3 md:px-12 absolute text-white bg-gradient-to-r from-black">
    {/* //  {console.log("this is title",title)} */}
      <h1 className="text-xl md:text-2xl font-semibold md:font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-base w-1/4">{overview}</p>
      <div className="py-4 md:py-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-lg  rounded-lg hover:bg-opacity-80">
             ▶️ Play {/* Play  emogi selection Ctrl+cmd+space  and then select*/}
          </button>
        <button className="hidden md:inline-block bg-white text-black py-4 px-12 mx-2 text-lg  rounded-lg hover:bg-opacity-80">
          ℹ More Info
          </button>
      </div>
    </div>
  )
}

export default VideoTitle;