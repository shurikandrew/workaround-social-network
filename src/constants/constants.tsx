import { FaGoogle } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import {LinkType} from "../types/types.ts";

export const linksArray: Array<LinkType> = [
    {
        icon: <FaGoogle/>,
        text: "Google"
    },
    {
        icon: <FaApple/>,
        text: "Apple"
    },
    {
        icon: <FaLinkedinIn/>,
        text: "LinkedIn"
    }
];
