import { LiaDiceSolid } from "react-icons/lia";
import { Button } from "./ui/button";

function RandomButton({ onClick }) {
  return (
    <div className="flex justify-center items-center h-36">
      <Button onClick={onClick} className="flex" variant="random">
        <div className="pr-2">
          <LiaDiceSolid />
        </div>
        I'm feeling lucky
      </Button>
    </div>
  );
}

export default RandomButton;
