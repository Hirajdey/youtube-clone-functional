import React, { useState, useEffect } from 'react';
import Styles from './CategoriesBar.module.scss';

const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh',
]


const CategoriesBar = () => {
    
    const [activeElm, setActiveElm] = useState('All')

    const handleclickActive = (value) => {
        setActiveElm(value)
    }

    return (
        <div className={Styles.categoriesBar}>
            {keywords.map((value, i) => (
                <span 
                    onClick={() => handleclickActive(value)} 
                    key={i} 
                    className={activeElm === value ? Styles.active :""}
                >
                    {value}
                </span>
            ))}
        </div>
    )
}

export default CategoriesBar
