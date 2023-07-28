import React, { useEffect, useState } from "react";

const Text = () => {
    const [text, setText] = useState("Please input some text");

    useEffect(() => {console.log("COMPONENT MOUNTED"); return () => console.log("COMPONENT UNMOUNTED")},[]) //Without [] brackets, the component mounts and re-renders on every keypress in the text box.
    // useEffect(() => {console.log("COMPONENT MOUNTED")},[text]) //This tells the useEffect() to re-render whenever the variable 'text' is altered.

    return (
        <>
            <input type="text" onChange={event => {setText(event.target.value)}} value={text}></input>
            <p>{text}</p>
        </>
    );
};

export default Text;