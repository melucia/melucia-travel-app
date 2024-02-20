import { LiaDiceSolid } from "react-icons/lia";

function RandomButton({ onClick }) {
  return (
    <div className="flex justify-center items-center h-36">
      <button onClick={onClick} className="flex gap-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
        <LiaDiceSolid />I'm gonna get lucky</button>
    </div>
  )
}

export default RandomButton


