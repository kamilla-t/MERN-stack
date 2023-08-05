import React from "react";
import "./Reader.css";

class Reader extends React.Component<{selectedBook: any}> {
    render(): React.ReactNode {
        return (
            <div className='reader'>
                <div className='reader-title'>
                    <input type="text" placeholder="Title" value={this.props.selectedBook.title}/>
                </div>
                <div className='reader-content'>
                    <input className='reader-content-input' type="textarea" placeholder="Content" value={this.props.selectedBook.content}/>
                </div>
            </div>
        );
    }
}

export default Reader;