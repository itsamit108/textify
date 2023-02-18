import React from 'react';

export default function ErrorPage(props) {
    return (
        <div className="container">
            <h1 className='text-center' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Error 404</h1>
        </div>
    );
}
