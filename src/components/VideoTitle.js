const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
    {/* //  {console.log("this is title",title)} */}
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-3 px-12 text-xl  rounded-lg hover:bg-opacity-80">
             ▶️ Play {/* Play  emogi selection Ctrl+cmd+space  and then select*/}
          </button>
        <button className="bg-white text-black p-3 px-12 mx-2 text-lg  rounded-lg hover:bg-opacity-80">
          ℹ More Info
          </button>
      </div>
    </div>
  )
}

export default VideoTitle;