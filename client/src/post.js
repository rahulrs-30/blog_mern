import React from 'react';

const Post=()=>{
    return (
        <div className='post'>
            <div className='image'>
                <img
                    src="https://helios-i.mashable.com/imagery/articles/07bbbVMOuthy4RtLmDUrMjN/hero-image.fill.size_1248x702.v1614274899.png"
                    alt=""
                />
            </div>
            <div className='texts'>
                <h2>PS5 Just Did Something No Console Ever Has</h2>
                <p className='info'>
                    <a className='author'>RRS</a>
                    <time>12-07-2023 18:20</time>
                </p>
                <p>
                    Sony's latest earnings report has arrived, and in it are new sales
                    numbers for the PlayStation 5. In short, the console is performing
                    exceptionally well. The system shipped another 6.3 million units
                    during the January-March period to push the PS5's total to 38.4
                    million to date.
                </p>
            </div>
        </div>
    );
}
export default Post;
