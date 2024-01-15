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
    const [accuracy, setAccuracy] = useState(0);
    const color = "shadow-[0_0_220px_-22px_rgba(184,80,66,1)]";
    const [cursorVisible, setCursorVisible] = useState(true);
    const [cursorPosition, setCursorPosition] = useState(0);
    const [timer, setTimer] = useState(5);

    useEffect(() => {
        if (start && timer > 0) {
            const timerId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            return () => {
                clearInterval(timerId);
            };
        } else if (timer === 0) {
            setStart(false);
        }
    }, [start, timer]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible((prevCursorVisible) => !prevCursorVisible);
        }, 500);

        return () => {
            clearInterval(cursorInterval);
        };
    }, []);
    useEffect(() => {
        if (typed.length > 0 && typed.length <= words.length) {
            setCursorPosition(typed.length);
        }
    }, [typed, words]);
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible(prevCursorVisible => !prevCursorVisible);
        }, 500);

        return () => {
            clearInterval(cursorInterval);
        };
    }, []);

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
            // setStart(true); // Start the timer when you start typing
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
        if (start && timer > 0) {
            const timerId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            return () => {
                clearInterval(timerId);
            };
        } else if (timer === 0) {
            setStart(false);
        }
    }, [start, timer]);

    useEffect(() => {
        if (typed.length > 0) {
            const correctTyped = typed.filter(t => t.correct).length;
            setAccuracy((correctTyped / typed.length) * 100);
        }
    }, [typed]);


    const resetState = () => {
        setTyped([]);
        setWords(faker.random.words(wordsCount));
        setWordsCount(wordsCount);
        setStart(false);
        setStartTime(null);
        setWpm(0);
        setAccuracy(0);
        setCorrectWords(0);
    };
    useEffect(() => {
        resetState();
    }, []);

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
        <motion.div className="flex justify-center items-center mb-20 px-14 my-8 md:px-2 mx-14 md:mx-18 md:my-2 mt-4">
            <div className='grid my-4'>

                {buttonVisible && (
                    <div className="flex justify-center mx-4 my-2 items-center">
                        <button className="btn btn-primary rounded-full mx-4" onClick={(e) => { handleClick(); resetState(); }}>
                            Start
                        </button>
                        <input type="number" placeholder="How many words?" onChange={handleWordsCountChange} className="input shadow-xl input-bordered w-full max-w-xs" />
                    </div>
                )}
                {!buttonVisible && (
                    <div className={`relative card flex justify-center mb-8 float-effect ${color} responsive-card`}>
                        <div className="card-body">
                            <h2 className="card-title text-primary font-bold text-4xl text-center mb-8 flex justify-center items-center">Write This</h2>
                            <p className='text-3xl my-4 mx-4 md-my-8 md:mx-4 overflow-auto max-h-64'>
                                {words.split('').map((char, index) => (
                                    <React.Fragment key={index}>
                                        <span
                                            className={
                                                typed[index]
                                                    ? typed[index]?.key.toLowerCase() === char.toLowerCase()
                                                        ? 'text-primary font-bold'
                                                        : 'text-black line-through'
                                                    : char === ' ' ? 'text-red-500 ' : 'text-grey-500'
                                            }
                                        >
                                            {char}
                                        </span>
                                        {index === typed.length - 1 && <span className={cursorVisible ? 'cursor' : ''}><text className='text-primary'>|</text></span>}
                                    </React.Fragment>
                                ))}
                                {typed.length === words.length && <span className={cursorVisible ? 'cursor' : ''}></span>}
                            </p>
                            <p className='text-primary justify-center font-bold text-xl mt-4 flex'>WPM: {Math.round(wpm)}</p>
                            <p className='text-primary justify-center font-bold text-xl mb-4 flex'>Accuracy: {Math.round(accuracy)}%</p>
                            {/* {!buttonVisible && (
                                <p className='text-primary justify-center font-bold text-xl mt-4 flex'>Timer: {timer}</p>
                            )} */}
                            <div className="card-actions justify-end">
                                <button
                                    className="btn rounded-full flex hover:scale-101.5 transition ease-in-ease-out duration-500 btn-primary"
                                    onClick={resetState}
                                >
                                    Reset
                                </button>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div >
    );
}

export default Typewriter;