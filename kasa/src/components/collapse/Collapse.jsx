import './collapse.scss';
import { useState } from 'react';

export default function Collapse({ title, content }) {
    const [toggle, setToggle] = useState(false);
    
    return (
        <>
            <div className="collapse">
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)}>
                    {title}
                    <svg 
                        className={toggle ? 'arrow arrow_down' : 'arrow arrow_up'} 
                        width="24" 
                        height="15" 
                        viewBox="0 0 24 15" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10.7897 1.43151C11.4591 0.762088 12.5462 0.762088 13.2157 1.43151L23.4979 11.7138C24.1674 12.3832 24.1674 13.4703 23.4979 14.1398C22.8285 14.8092 21.7414 14.8092 21.072 14.1398L12 5.06779L2.92804 14.1344C2.25862 14.8038 1.17148 14.8038 0.502065 14.1344C-0.167354 13.465 -0.167354 12.3778 0.502065 11.7084L10.7843 1.42615L10.7897 1.43151Z" fill="white"/>
                    </svg>
                </h3>
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => (
                        <p key={index}>{item}</p>
                    )) : content}
                </div>
            </div>
        </>
    );
}
