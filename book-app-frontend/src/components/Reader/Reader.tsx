import React from "react";
import "./Reader.css";

class Reader extends React.Component<{selectedBook: any, updateSelectedBook: Function}> {
    constructor(props: any) {
        super(props);
        this.onSetTitle = this.onSetTitle.bind(this);
        this.onSetContent = this.onSetContent.bind(this);
    }

    onSetTitle(e: any) {
        this.props.updateSelectedBook(e.target.value, this.props.selectedBook.content);
    }

    onSetContent(e: any) {
        this.props.updateSelectedBook(this.props.selectedBook.title, e.target.value);
    }
    
    render(): React.ReactNode {
        return (
            <div className='reader'>
                <div className='reader-title'>
                    <input type="text" placeholder="Title" onChange={this.onSetTitle} value={this.props.selectedBook.title}/>
                </div>
                <div className='reader-content'>
                    <input className='reader-content-input' onChange={this.onSetContent} type="textarea" placeholder="Content" value={this.props.selectedBook.content}/>
                </div>
            </div>
        );
    }
}

export default Reader;