import { useEffect, useRef, useState, memo } from 'react';
import './HeaderDropdown.scss';
import clsx from 'clsx';

function HeaderDropdown({ alignRight, top, className, children }) {
    const [dropdownToggle, setDropdownToggle] = useState(false);

    const dropdownSection = useRef(null);
    
    const deactivateDropdownSection = (e) => {
        if (!dropdownSection.current.contains(e.target)) {
            setDropdownToggle(false);
        }
    }

    useEffect(() => {
        window.addEventListener('click', deactivateDropdownSection);

        return () => {
            window.removeEventListener('click', deactivateDropdownSection);
        }
    }, [])

    return (
        <div 
            ref={dropdownSection}
            className={clsx('dropdown-toggle', className)}
            onClick={() => {setDropdownToggle(!dropdownToggle)}}
        >
            {children[0]}
            <div
                className={clsx('dropdown-section', dropdownToggle && 'scale-1')}
                style={{
                    right: alignRight && '0',
                    top: top && top
                }}
                onClick={(e) => {e.stopPropagation()}}
            >
                {children[1]}
            </div>
        </div>
    )
}

export default memo(HeaderDropdown);