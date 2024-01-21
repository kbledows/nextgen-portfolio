// HardModeTimer.js
import React, { useEffect, useState } from 'react';

const HardModeTimer = ({ showTimer, time_left, updateTime, started, hideTimer }) => {
    const [counter, setCounter] = useState(time_left);

    useEffect(() => {
        let interval;

        if (showTimer) {
            interval = setInterval(() => {
                setCounter(prevCounter => {
                    if (prevCounter > 0) {
                        hideTimer();
                        return prevCounter - 1;
                    } else {
                        updateTime(prevCounter);
                        return prevCounter = time_left;
                    }
                });
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [showTimer]);

    return (
        <div>
            {showTimer && (
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span id="counterElement" style={{ "--value": counter }}></span>
                    </span>
                    <span className="font-mono text-2xl">s</span>
                </div>

            )}
        </div>
    );
};

export default HardModeTimer;