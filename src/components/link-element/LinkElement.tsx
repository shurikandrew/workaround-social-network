import "./LinkElement.scss";
import {LinkType} from "../../types/types.ts";

const LinkElement = ({icon,text}: LinkType) => {
    return (
        <button className={"link-container"}>
            <div>
                {icon}
            </div>

            <p>
                {text}
            </p>
        </button>
    );
};

export default LinkElement;