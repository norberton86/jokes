import { useState } from 'react';
import './style.scss';

const Content = ({data}) => {

    const [punchLine, setPunchLine] = useState(false);

    return  <div className='Content'> 
                <div className='quote'>
                   {data?.setup}
                </div>
                <div className='toggle'>
                    <button onClick={()=>setPunchLine(!punchLine)} className='blue'>
                        {`${punchLine ? 'Hide' : 'Show'} Punchline`}
                    </button>
                </div>
                {punchLine && <div className='quote right'>
                    {data?.punchline}
                </div>}
            </div>
};

export default Content;