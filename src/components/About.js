import React from 'react';

export default function About(props) {
    return (
        <div className="container my-4">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#2d2d45' : '#e8e5f2', color: props.mode === 'dark' ? 'white' : '#343541', border: props.mode === 'dark' ? '' : '1px solid grey' }}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.mode === 'dark' ? '#2d2d45' : '#e8e5f2', color: props.mode === 'dark' ? 'white' : '#343541' }}>
                            Formatting Options
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textify offers a range of formatting options to help you style your text in any way you need. With Textify, you can easily:
                            <ul>
                                <li>Convert text to uppercase or lowercase</li>
                                <li>Capitalize individual words or sentences</li>
                                <li>Remove extra spaces and lines</li>
                            </ul>
                            And best of all, these formatting options are all free to use and easy to access. Simply type or paste your text into the input field, choose the formatting options you want, and click "Format". It's that simple!
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#2d2d45' : '#e8e5f2', color: props.mode === 'dark' ? 'white' : '#343541', border: props.mode === 'dark' ? '' : '1px solid grey' }}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'dark' ? '#2d2d45' : '#e8e5f2', color: props.mode === 'dark' ? 'white' : '#343541' }}>
                            User-Friendly Interface
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            At Textify, we prioritize user experience. That's why we've designed our website to be as intuitive and easy to use as possible. With a clean, modern interface and clear instructions, you'll be able to format your text with ease.
                            <br></br>
                            Whether you're a seasoned pro or new to text formatting, you'll find Textify to be a breeze to use. Plus, our responsive design means that you can access Textify from any device, whether you're on your desktop computer or on the go with your phone.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#2d2d45' : '#e8e5f2', color: props.mode === 'dark' ? 'white' : '#343541', border: props.mode === 'dark' ? '' : '1px solid grey' }}>
                    <h2 className="accordion-header" id="headingThree" >
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: props.mode === 'dark' ? '#2d2d45' : '#e8e5f2', color: props.mode === 'dark' ? 'white' : '#343541' }}>
                            Open Source
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textify is an open source project, which means that our code is freely available for anyone to use, modify, and distribute. This not only makes Textify a great resource for developers, but also ensures that our software is transparent and trustworthy.
                            <br></br>
                            If you're a developer, we encourage you to check out our code and contribute to the project. And if you're just a regular user, you can rest assured that Textify is a reliable and honest tool for all your text formatting needs.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
