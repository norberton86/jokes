import React from 'react';
import './style.scss';

const Header = ({operation}) => {

    return  <div className='Header'> 
                <button onClick={()=>{operation()}} className='green'>Get A New Random Joke</button>
                <a href='https://github.com/15Dkatz/official_joke_api' target="_blank">View API Docs</a>
            </div>
};

export default React.memo(Header);