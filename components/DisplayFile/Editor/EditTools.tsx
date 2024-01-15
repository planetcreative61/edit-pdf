// i have all of these BtnStacks and i want to toggle active class on each when the the user clicks on them.
// but i want to have the same logic in another component, meaning that i want a way to implement this feature for all of my components globally.
// i already have redux and redux toolkit installed
import HighlightIcon from "@/components/icons/Highlighter";
import {
  CalendarDaysIcon,
  CheckIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CgProfile } from "react-icons/cg";
import {
  FaEllipsisH,
  FaEraser,
  FaFeatherAlt,
  FaRegCircle,
} from "react-icons/fa";
import { PiTextboxLight } from "react-icons/pi";
import { RiText } from "react-icons/ri";
import { RxDrawingPin } from "react-icons/rx";
import { BtnStack } from "./BtnStack";

export const EditTools = () => {
  return (
    <div className="b tool-row">
      <BtnStack id="Text">
        Text
        <RiText />
      </BtnStack>
      <BtnStack id="Sign">
        Sign
        <FaFeatherAlt />
      </BtnStack>
      <BtnStack id="Initials">
        Initials
        <CgProfile />
      </BtnStack>
      <BtnStack id="Date">
        Date
        <CalendarDaysIcon className="icon" />
      </BtnStack>
      <BtnStack id="Cross">
        Cross
        <XMarkIcon className="icon" />
      </BtnStack>
      <BtnStack id="Check">
        Check
        <CheckIcon className="icon" />
      </BtnStack>
      <BtnStack id="Circle">
        Circle
        <FaRegCircle />
      </BtnStack>
      <BtnStack id="Image">
        Image
        <PhotoIcon className="icon" />
      </BtnStack>
      <BtnStack id="TBox">
        TBox
        <PiTextboxLight />
      </BtnStack>
      <BtnStack id="Sticky">
        Sticky
        <RxDrawingPin />
      </BtnStack>
      <BtnStack id="Erase">
        Erase
        <FaEraser />
      </BtnStack>
      <BtnStack id="Highlight">
        Highlight
        <HighlightIcon className="icon" />
      </BtnStack>
      <BtnStack id="Blackout">
        Blackout
        <HighlightIcon className="icon" color="black" />
      </BtnStack>
      <BtnStack id="Tools">
        Tools
        <FaEllipsisH />
      </BtnStack>
    </div>
  );
};