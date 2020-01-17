import React from 'react';
import Link from 'next/link';
import Router from 'next/router';


const indexPage = () => (

    <div>
        <h1>Oops, something went wrong.</h1>
        <p>Try <Link href="/"><a>going back</a></Link></p>
        <style jsx>{`
            div {
                width:50%;
                border: 2px solid #f00;
                box-shadow: 0 2p 3px #f33;
                padding: 20px;
                text-align:center;
            }
        `}
        </style>
    </div>
);

export default indexPage;