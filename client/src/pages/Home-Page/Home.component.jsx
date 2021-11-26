import { Dialog } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './home.css';

export default function Home(props) {
    const [logSign, setLogSign] = useState(false);
    return (
        <section className="main-section">
            <img src="pictures/JustLaw.jpg" alt=""/>
            <button onClick={() => setLogSign(true)}>הרשם\התחבר</button>
            <Dialog
                fullWidth
                maxWidth="md"
                open={logSign}
                onClose={() => setLogSign(false)}
            >
                <article>
                    <h1><center>ברוכות וברוכים הבאים</center></h1>
                    <h1><center>אני</center></h1>
                </article>
                <section className="options">
                    <Link to='/register/1'>
                        <article >
                            <img src="https://media.istockphoto.com/photos/hand-sign-approved-business-contract-closeup-picture-id1190179906?b=1&k=20&m=1190179906&s=170667a&w=0&h=ydlVuygt4VcI6MJiv_Zf5vq-IG5cIXBWwZetXRR3JZY=" alt="" />
                            <h3>מייצג נפגע</h3>
                        </article>
                    </Link>
                    <Link to='/register/2'>
                        <article>
                            <img src="https://cdn.pixabay.com/photo/2020/03/08/23/45/businessman-4914044__340.jpg" alt="" />
                            <h3>עורך דין</h3>
                        </article>
                    </Link>
                </section>
            </Dialog>
        </section>
    );
}
