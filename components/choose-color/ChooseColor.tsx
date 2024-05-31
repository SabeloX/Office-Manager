import { colors } from "@/data/colors";

import './choose-color.css';
import { Colors } from "@/interfaces";
import { Dispatch, SetStateAction } from "react";

interface Props {
    selectedColor: Colors | undefined;
    setColor: Dispatch<SetStateAction<Colors | undefined>>;
}

export const ChooseColor = ({ selectedColor, setColor }: Props) => (
    <div className="choose-color">
        {
            colors.map(color => (
                <span
                    key={color}
                    style={{
                        backgroundColor: color,
                        border: selectedColor === color ? '4px solid #475569' : 'unset'
                    }}
                    onClick={() => setColor(color)}
                ></span>
            ))
        }
    </div>
);