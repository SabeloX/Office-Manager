import { colors } from "@/data/colors";

import './choose-color.css';

export const ChooseColor = () => (
    <div className="choose-color">
        {
            colors.map(color => (
                <span
                    key={color}
                    style={{
                        backgroundColor: color
                    }}
                ></span>
            ))
        }
    </div>
);