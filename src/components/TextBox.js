import React, { useState } from 'react';

export default function TextBox(props) {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const checkIfTextIsEmpty = (callback) => {
        if (text.length === 0) {
            props.showAlert('Text is empty!', 'warning');
            return;
        }
        callback();
    };

    const clearText = () => {
        if (text.length === 0) {
            props.showAlert('Text is empty!', 'warning');
            return;
        }
        setText('');
        props.showAlert('Text cleared!', 'success');
    };

    const copyText = () => {
        checkIfTextIsEmpty(() => {
            navigator.clipboard.writeText(text);
            props.showAlert('Copied to clipboard!', 'success');
        });
    };

    const changeToUpperCase = () => {
        checkIfTextIsEmpty(() => {
            setText(text.toUpperCase());
            props.showAlert('Changed to UPPERCASE', 'success');
        });
    };

    const changeToLowerCase = () => {
        checkIfTextIsEmpty(() => {
            setText(text.toLowerCase());
            props.showAlert('Changed to lowercase', 'success');
        });
    };

    const capitalizeWords = () => {
        checkIfTextIsEmpty(() => {
            setText(text.replace(/\b\w/g, l => l.toUpperCase()));
            props.showAlert('Changed to Title Case', 'success');
        });
    };

    const capitalizeSentences = () => {
        checkIfTextIsEmpty(() => {
            setText(text.replace(/(^\s*\w|[.!?]\s*\w)/g, l => l.toUpperCase()));
            props.showAlert('Changed to Sentence case', 'success');
        });
    };

    const removeExtraSpaces = () => {
        checkIfTextIsEmpty(() => {
            setText(text.replace(/\s+/g, ' '));
            props.showAlert('Extra spaces removed', 'success');
        });
    };

    const removeExtraLines = () => {
        checkIfTextIsEmpty(() => {
            setText(text.replace(/\n+/g, ' '));
            props.showAlert('Extra lines removed', 'success');
        });
    };

    const wordsCount = () => {
        let words = text.split(/[\s\n]+/);
        return words.filter(word => word.length > 0).length;
    };

    const charactersCount = () => {
        return text.length;
    };

    const sentencesCount = () => {
        let sentences = text.split(/[.!?]+/);
        return sentences.filter(sentence => sentence.length > 0).length;
    };

    const readingTime = () => {
        let words = text.split(/[\s\n]+/);
        let count = words.map(word => word.trim()).filter(word => word.length > 0).length;
        let Minutes = Math.floor(count / 200);
        let Seconds = Math.floor((count % 200) / (200 / 60));
        return `${Minutes} Minutes, ${Seconds} Seconds`;
    };

    const paragraphsCount = () => {
        let paragraphs = text.split(/\n+/);
        return paragraphs.filter(paragraph => paragraph.length > 0).length;
    };

    return (
        <div className="container my-4">
            <div className={`text-${props.mode === 'light' ? 'light' : 'light'}`}>
                <p ><strong>WORDS: {wordsCount()}</strong></p>
                <p ><strong>CHARACTERS: {charactersCount()}</strong></p>
                <p ><strong>Reading Time: {readingTime()}</strong></p>
                <p ><strong>SENTENCES: {sentencesCount()}</strong></p>
                <p ><strong>PARAGRAPHS: {paragraphsCount()}</strong></p>
            </div>
            <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
                value={text}
                onChange={handleChange}
                placeholder="Start typing, or copy and paste your document here..."
                autoFocus
                style={{
                    backgroundColor: props.mode === 'light' ? '#eee1ff' : '#2d2d45',
                    color: props.mode === 'light' ? 'black' : 'white', border: props.mode === 'dark' ? '' : '1px solid grey'
                }}
            />
            <div>
                <button type="button" style={{ borderRadius: '20px' }} className="btn btn-primary mx-2 my-3" onClick={copyText}>
                    Copy
                </button>
                <button type="button" style={{ borderRadius: '20px' }} className="btn btn-primary mx-2 my-3" onClick={clearText}>
                    Clear All
                </button>
            </div>
            <div>
                <button type="button" style={{ backgroundColor: '#5333ed', color: 'white', borderRadius: '20px' }} className="btn mx-2 my-2" onClick={changeToUpperCase}>
                    UPPERCASE ALL
                </button>
                <button type="button" style={{ backgroundColor: '#5333ed', color: 'white', borderRadius: '20px' }} className="btn mx-2 my-2" onClick={changeToLowerCase}>
                    lowercase all
                </button>
                <button type="button" style={{ backgroundColor: '#5333ed', color: 'white', borderRadius: '20px' }} className="btn mx-2 my-2" onClick={capitalizeWords}>
                    Capitalize Words
                </button>
                <button type="button" style={{ backgroundColor: '#5333ed', color: 'white', borderRadius: '20px' }} className="btn mx-2 my-2" onClick={capitalizeSentences}>
                    Capitalize Sentences
                </button>
                <button type="button" style={{ backgroundColor: '#5333ed', color: 'white', borderRadius: '20px' }} className="btn mx-2 my-2" onClick={removeExtraSpaces}>
                    Remove Extra Spaces
                </button>
                <button type="button" style={{ backgroundColor: '#5333ed', color: 'white', borderRadius: '20px' }} className="btn mx-2 my-2" onClick={removeExtraLines}>
                    Remove Extra Lines
                </button>
            </div>
        </div>
    );
}
