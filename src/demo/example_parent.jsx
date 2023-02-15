import React from "react";
import Book from "./example_children";


function Library(props){
    return(
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300}></Book>
        </div>
    );
}

export default Library;