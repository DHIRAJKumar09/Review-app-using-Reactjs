import React from 'react';
import People from './data.js';
import { useState } from 'react';
import {FaChevronLeft ,FaChevronRight , FaQuoteRight } from 'react-icons/fa';
const Review=()=>{
    const [index ,setIndex] = useState(0);
    const {name , job , image , text} = People[index];
    const checkNumber = (number)=>{
        if(number >People.length-1){
            return 0;
        }
        if(number < 0 ){
            return People.length-1;
        }
        return number;

    }
    const nextperson=()=>{
        setIndex((index)=>{
            let newIndex = index+1;
            return checkNumber(newIndex);
        })
    }
    const RandomPerson=()=>{
        let randomnumber = Math.floor(Math.random()*People.length);
        console.log(randomnumber); 
        if(randomnumber == index){
            randomnumber = index+1;
        }
        setIndex(checkNumber(randomnumber));
    }
    const prevperson=()=>{
        setIndex((index)=>{
            let newIndex = index-1;
            return checkNumber(newIndex);
        })
    }
    return <article className='review'>
        <div className='img-container'>
            <img src={image} alt={name} className='person-img'/>
            <span className='quote-icon'>
                <FaQuoteRight/>
            </span>
        </div>

        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
            <button className='prev-btn' onClick={prevperson}>
                <FaChevronLeft/>

            </button>

            <button className='next-btn' onClick={nextperson}>
                <FaChevronRight/>
            </button>

        </div>
        <button className='random-btn' onClick={RandomPerson}> Suprise me</button>
    </article>
}
export default Review;