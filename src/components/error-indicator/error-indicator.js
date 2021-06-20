import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className='boom'>BOOM!</span>
            <div>
                something has gone terribly wrong
            </div>
            <div>
                (but we already sent droids to fix it)
            </div>
        </div>
    );
};

export default ErrorIndicator;