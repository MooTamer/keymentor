import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { faker } from '@faker-js/faker';

const Typewriter = () => {
    const [typed, setTyped] = useState([]);
    const [words, setWords] = useState('');
    const [buttonVisible, setButtonVisible] = useState(true);
    const [wordsCount, setWordsCount] = useState(5);
    const [start, setStart] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [wpm, setWpm] = useState(0);
    const [correctWords, setCorrectWords] = useState(0);

    useEffect(() => {
        if (start) {
            setWords(faker.random.words(wordsCount));
        }
    }, [wordsCount, start]);

    const handleKeyPress = (event) => {
        if (event.key === ' ') {
            event.preventDefault();
        }

        if (!startTime) {
            setStartTime(Date.now());
        }

        if (event.key === 'Backspace') {
            setTyped((prevTyped) => prevTyped.slice(0, -1));
        } else if (event.key !== 'Shift' && event.key !== 'Control' && event.key !== 'Meta' && event.key !== 'CapsLock') {
            setTyped((prevTyped) => {
                const newTyped = [...prevTyped, { key: event.key, correct: event.key.toLowerCase() === words[prevTyped.length]?.toLowerCase() }];
                if (newTyped[newTyped.length - 1].correct && (newTyped.length === 1 || newTyped[newTyped.length - 2].key === ' ')) {
                    setCorrectWords((prevCorrectWords) => prevCorrectWords + 1);
                }
                const minutes = (Date.now() - startTime) / 60000;
                setWpm((correctWords / 5) / minutes);
                return newTyped;
            });

        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [words, startTime]);

    const handleClick = () => {
        setButtonVisible(false);
        setStart(true);
    };

    const handleWordsCountChange = (event) => {
        setWordsCount(Number(event.target.value));
    };

    return (
        <motion.div>
            <div className='grid '>
                {buttonVisible && (
                    <div className="flex justify-center mx-4 my-6 items-center">
                        <button className="btn btn-primary rounded-full mx-4" onClick={handleClick}>
                            Start
                        </button>
                        <input type="number" placeholder="How many words?" onChange={handleWordsCountChange} className="input input-bordered w-full max-w-xs" />
                    </div>
                )}
                <div className={`relative card flex px-12 mx-32 mt-4 mb-8 float-effect shadow-11xl ${buttonVisible ? 'blur' : ''}`}>
                    <div className="card-body">
                        <h2 className="card-title text-primary text-center flex justify-center items-center">Write This</h2>
                        <p>
                            {words.split('').map((char, index) => (
                                <span
                                    key={index}
                                    className={
                                        typed[index]
                                            ? typed[index]?.key.toLowerCase() === char.toLowerCase()
                                                ? 'text-primary '
                                                : 'text-red-500 line-through'
                                            : char === ' ' ? 'text-red-500 ' : 'text-grey-500'
                                    }
                                >
                                    {char}
                                </span>
                            ))}
                        </p>
                        <p>WPM: {Math.round(wpm)}</p>
                        <div className="card-actions justify-end">
                            <button className="btn rounded-full hover:scale-101.5 transition ease-in-ease-out duration-500 btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Typewriter;