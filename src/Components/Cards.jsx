import React from 'react';
import AllQuiz from '../Data/AllQuiz';
import { Link } from 'react-router-dom';
// import Card from './Card';

const Cards = () => {
    // Map each quiz item from AllQuiz array to a Card component
    const quizCards = AllQuiz.map((quiz) => (
        <div key={quiz.id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-50" src={quiz.img} alt={`Quiz ${quiz.id}`} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Quiz {quiz.id} {quiz.nn} </div>
                <p className="text-gray-700 text-base">{quiz.desc}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link to={quiz.url}>
                <button>Play Quiz</button>
                </Link>
            </div>
        </div>
    ));

    return (
        <div className=' mx-auto container grid lg:grid-cols-4  sm:grid-cols-2 gap-10 my-5 sm:text-center flex justify-center'>
            {quizCards}
        </div>
    );
};

export default Cards;
