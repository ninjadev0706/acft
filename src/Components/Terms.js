import React from 'react';
import tosarticles from '../constants/tos';

function Terms() {

    return (
        <div className='tossection'>
            <a href='/'><button className='back_btn'>back</button></a>
            <div className='tos-title'>Terms of service</div>
            <div className='tos-content'>
                {
                    tosarticles[0].description.map(q => (
                        <div className='each-content'>
                            {q.content}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Terms;
