import { useRef, useState } from 'react';
import './Input.scss';
import clsx from 'clsx';

function Input({
    label,
    type,
    icon,
    value,
    proportion,
    focusEmpty,
    hasArrow
}) {
    const styles = {
        'login_email': {
            section: 'header_navbar_login_input-section',
            label: 'header_navbar_login_label',
            wrapper: 'header_navbar_login_input-wrapper',
            input: 'header_navbar_login_input'
        },
        'login_password': {
            section: 'header_navbar_login_input-section',
            label: 'header_navbar_login_label',
            wrapper: 'header_navbar_login_input-wrapper',
            input: 'header_navbar_login_input header_navbar_login_password-input'
        },
        'booking': {
            section: 'container_booking_body_item_input',
            label: null,
            wrapper: null,
            input: null
        }
    }
    
    const [inputValue, setInputValue] = useState(value);

    const [focus, setFocus] = useState(false);
    const [hover, setHover] = useState(false);

    const [passwordRevealToggle, setPasswordRevealToggle] = useState(false);

    const input = useRef(null);

    return (
        <div className={clsx('input', styles[type].section, proportion)}>
            <div className={clsx('input-label', styles[type].label)}>
                <span>{label}</span>
                {type === 'login_password' && <a href='#'>Forgot Password?</a>}
            </div>
            <div
                className={clsx('input-wrapper', styles[type].wrapper)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => {
                    setFocus(true);
                    input.current.focus();
                }}
            >
                <div
                    className={clsx({
                        'input-wrapper_mask': true,
                        'input-focus': focus,
                        'input-hover': hover
                    })}
                >
                </div>
                {type === 'booking' && <div className='input-wrapper_img-wrapper' >
                    {typeof icon === 'string' && <img src={icon} alt='' />}
                    {typeof icon !== 'string' && icon}
                </div>}
                <input
                    ref={input}
                    className={clsx('input-wrapper_input', styles[type].input, focusEmpty && 'focus-empty')}
                    value={inputValue}
                    type={passwordRevealToggle ? 'text' : type === 'login_password' ? 'password' : 'text'}
                    style={passwordRevealToggle ? {fontFamily: 'inherit', fontWeight: 'inherit', paddingTop: '0'} : {}}
                    spellCheck='false'
                    onChange={e => setInputValue(e.target.value)}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
                {hasArrow && <img className="input-wrapper_down-arrow" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/96f78c74ef882223cecd102ba1e47812.svg" alt="" />}
                {type === 'login_password' && <div className='input-wrapper_img-wrapper' onMouseDown={() => setPasswordRevealToggle(true)} onMouseUp={() => setPasswordRevealToggle(false)}>
                    <img
                        id='password-reveal-toggle'
                        src={passwordRevealToggle ? 'https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/ecb4692cdc36f3f1e4fbc98921959202.svg' : icon}
                        style={passwordRevealToggle ? {opacity: '0.25'} : {}}
                        alt=''
                    />
                </div>}
            </div>
        </div>
    )
}

export default Input