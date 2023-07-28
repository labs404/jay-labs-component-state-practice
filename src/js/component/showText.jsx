import React, { useState }from "react";
import Text from "./text";


const ShowText = () => {
    const [showText, setShowText] = useState(false);
    return (
            <>
                <div>
                    <button onClick={() => setShowText(!showText)}>Toggle Text</button>
                    <div>
                        {console.log(showText)}
                        {showText && <Text /> ? <Text /> : <h1>Nothing to Display</h1>}
                    </div>
                </div>
            </>
    );
};

export default ShowText;