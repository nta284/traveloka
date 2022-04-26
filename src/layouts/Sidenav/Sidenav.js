import { Fragment, memo, useEffect, useRef } from 'react';
import './Sidenav.scss';
import clsx from 'clsx';
import SidenavData from './SidenavData';

function Sidenav({ sidenavToggle, setSidenavToggle }) {
    const SidenavItem = {
        Link({ data }) {
            const { img, title } = data;

            return (
                <a className='sidenav_item sidenav_link-item' href='#'>
                    <img className='sidenav_item_img' src={img} alt='' />
                    <span>{title}</span>
                </a>
            )
        },
        Select({ data }) {
            const { img, title, abbr, options } = data;

            return (
                <div className='sidenav_item sidenav_select-item'>
                    <div className='sidenav_select-item-wrapper'>
                        {img === null && <div className='sidenav_select-item_flag'>
                            <div className='country-flag vietnam-flag'></div>
                        </div>}
                        {img !== null && <img className='sidenav_item_img' src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7dfbc5d44548175e9151279ba541913.svg' alt='' />}
                        <span>{title}</span>
                        <abbr>{abbr}</abbr>
                    </div>
                    <select className='sidenav_select-item_select' name='' id=''>
                        {options.map((opt, index) => (
                            <option key={index} value=''>{opt}</option>
                        ))}
                    </select>
                </div>
            )
        }
    }

    console.log('Sidenav re-render');

    const sidenav = useRef(null);

    function closeSidenav(e) {
        if (!sidenav.current.contains(e.target)) {
            setSidenavToggle(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener('click', closeSidenav);
        
        return () => {
            window.removeEventListener('click', closeSidenav);
        }
    }, [])

    return (
        <div className={clsx('sidenav', sidenavToggle && 'visible')}>
            <div className={clsx('sidenav_mask', sidenavToggle && 'opa-1')}></div>
            <div ref={sidenav} className={clsx('sidenav_list', sidenavToggle && 'translateX-show')}>
                <div className='sidenav_list-wrapper'>
                    {SidenavData.map((item, index) => {
                        const { type, has_hr, ...data } = item;
                        const Component = SidenavItem[type];

                        return (
                            <Fragment key={index}>
                                <Component data={data} />
                                {has_hr && <hr />}
                            </Fragment>
                        )
                    })}
                </div>
                <img
                    className='header_sidenav-close-btn'
                    src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/d/d87ef15ec3a57e7e2572c0ce92261228.svg'
                    alt=''
                    onClick={() => setSidenavToggle(false)}
                />
            </div>
        </div>
    )
}

export default memo(Sidenav);