// CopyToClipboardButton.js
import React from 'react';

const CopyToClipboardButton = ({ textToCopy }) => {
    const handleCopyClick = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('Your score has been copied to the clipboard!');
            })
            .catch((err) => {
                console.error('Unable to copy text to clipboard', err);
            });
    };

    return (
        <button className="btn ml-2 bg-[#590d22] text-[#DAD7CD] hover:text-[#48cae4] hover:border-[#48cae4] hover:border-2" onClick={handleCopyClick}>
            Share
        </button>
    );
};

export default CopyToClipboardButton;