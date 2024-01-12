import React, { useState, useEffect } from 'react';

const Typewriter = () => {
    const [sentence, setSentence] = useState('In the vast expanse of the digital realm, where pixels dance and words flow, skilled typists embark on a journey to master the art of keyboard finesse, aiming to strike each key with precision and grace, weaving a symphony of characters that resonate with the rhythmic cadence of their thoughts, creating a tapestry of text that tells stories, shares knowledge, and connects people across the boundless landscape of the internet.');
    const [typed, setTyped] = useState([]);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Backspace') { // check if the pressed key is a backspace
                setTyped((prevTyped) => prevTyped.slice(0, -1)); // remove the last character
            } else if (event.key !== 'Shift' && event.key !== 'Control' && event.key !== 'Meta' && event.key !== 'CapsLock') {
                setTyped((prevTyped) => [...prevTyped, { key: event.key, correct: event.key.toLowerCase() === sentence[prevTyped.length]?.toLowerCase() }]);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [sentence]);

    return (
        <div className="card flex glass mx-16 my-8">
            <div className="card-body">
                <h2 className="card-title text-primary text-center flex justify-center items-center">Write This</h2>
                <p>
                    {sentence.split('').map((char, index) => (
                        <span key={index} className={typed[index]?.correct ? 'text-green-500' : 'text-gray-500'}>
                            {char}
                        </span>
                    ))}
                </p>
                <div className="card-actions justify-end">
                    <button className="btn rounded-full hover:scale-101.5 transition ease-in-ease-out duration-500 btn-primary">Learn now!</button>
                </div>
                <div>
                    <p>
                        {typed.map((char, index) => (
                            <span key={index} className={char.correct ? '' : 'line-through'}>{char.key}</span>
                        ))}
                        <span className="cursor">|</span>
                    </p>
                    <p>{typed.map((char) => char.key).join('')}</p>
                </div>
            </div>
        </div>
    );
};

export default Typewriter;