import React, { useState, useEffect } from 'react';

const Kbd = () => {
    const [pressedKey, setPressedKey] = useState('');

    useEffect(() => {
        const handleKeyPress = (event) => {
            setPressedKey(event.key.toLowerCase());
        };

        const handleKeyRelease = () => {
            setPressedKey('');
        };

        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('keyup', handleKeyRelease);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('keyup', handleKeyRelease);
        };
    }, []);

    const keys = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm', '/'],
        ['⌘', '⌥', '⇧', ' ', '⌘', 'fn']
    ];

    return (
        <div className="justify-center mt-2 mb-2 mx-8">
            <div className="flex-col  justify-center w-full  ">
                {keys.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex  justify-center gap-1 my-1 w-full ">
                        {row.map((key, index) => (
                            <kbd key={index} className={`kbd hover:scale-110 transition ease-in-ease-out duration-500  ${key === pressedKey ? 'bg-primary scale-125 transition ease-in-ease-out duration-300 ' : ''} ${key === ' ' ? 'flex w-52 ' : ''} transition ease-in-out duration-500`}>{key === ' ' ? '' : key}</kbd>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Kbd;