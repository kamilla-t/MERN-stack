import React from "react";
import "./Reader.css";

class Reader extends React.Component {
    render(): React.ReactNode {
        return (
            <div className='reader'>
                <div className='reader-title'>
                    <input type="text" placeholder="Title"/>
                </div>
                <div className='reader-content'>
                    <input className='reader-content-input' type="textarea" placeholder="Content"/>
                </div>
            </div>
        );
    }
}

export default Reader;