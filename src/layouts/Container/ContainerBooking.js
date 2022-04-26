import { memo, useEffect, useRef, useState } from 'react';
import './ContainerBooking.scss';
import BookingData from './data/BookingData';
import clsx from 'clsx';
import Input from '../../components/Input';

function ContainerBooking() {
    const [selectingCategory, setSelectingCategory] = useState('Hotels');
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [isShrink, setIsShrink] = useState(false);

    const [bookingFocus, setBookingFocus] = useState(false);
    const [bookingFocusDelay, setBookingFocusDelay] = useState(false);

    const booking = useRef(null);

    function blurBooking(e) {
        if (!booking.current.contains(e.target)) {
            setBookingFocus(false);

            setTimeout(() => {
                setBookingFocusDelay(false);
            }, 300);
        }
    }

    useEffect(() => {
        window.addEventListener('click', blurBooking);
    
        return () => {
            window.removeEventListener('click', blurBooking);
        }
    }, [])

    return (
        <div className='container_booking'>
            <div className={clsx('container_booking_mask', bookingFocusDelay && 'z-index-5', bookingFocus && 'visible opa-1')}></div>
            <div
                ref={booking}
                className={clsx('container_booking_wrapper', bookingFocusDelay && 'z-index-5')}
                onClick={() => {
                    setBookingFocus(true);
                    setBookingFocusDelay(true);
                }}
            >
                <div className={clsx('container_booking_categories', isShrink && 'container_booking_categories--shrink')}>
                    {BookingData.categories.map((cat, index) => (
                        <div key={index} className={clsx('container_booking_categories_item', selectingCategory === cat.title && 'container_booking_categories_item--active')}>
                            <img src={cat.img} alt='' />
                            <span
                                className={clsx('container_booking_categories_item-name', isShrink && 'opa-0')}
                            >{cat.title}</span>
                        </div>
                    ))}
                </div>
                <div
                    className='container_booking_expand-toggle'
                    onClick={() => setIsShrink(!isShrink)}
                >
                    <svg className={clsx(isShrink && 'rotate-180')} width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' data-id='IcSystemChevronLeft'><path d='M15 6L9 12L15 18' stroke='#687176' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path></svg>
                </div>
                <div className='container_booking_body'>
                    <div className='container_booking_body_recently-viewed'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' data-id='IcSystemToolRecentSearch'><path d='M16.5 15L22 20.5M4.78988 12C4.60128 11.3663 4.5 10.695 4.5 10C4.5 6.13401 7.63401 3 11.5 3C15.366 3 18.5 6.13401 18.5 10C18.5 13.866 15.366 17 11.5 17C10.0128 17 8.63383 16.5362 7.5 15.7453M2.5 9.75L4.75 12L7 9.75' stroke='#0194f3' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path><path d='M11 6.5V10H14' stroke='#0194F3' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path></svg>
                        <span>Recently Viewed Hotels</span>
                    </div>
                    <div className='container_booking_body_main'>
                        <div className='container_booking_body_item container_booking_body_destination'>
                            <Input
                                type='booking'
                                label='City, destination, or hotel name'
                                icon='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/06c6fdcf3e33d2950e2743ea8c3d2208.svg'
                                value='Ho Chi Minh City, Viet Nam'
                                proportion={null}
                                focusEmpty={true}
                                hasArrow={false}
                            />
                        </div>
                        <div className='container_booking_body_item container_booking_body_schedule'>
                            <Input
                                type='booking'
                                label='Check-in'
                                icon={<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' data-id='IcSystemCalendar'><path d='M7 2V5M17 2V5M3 8H21M11.5 11.5H12.5V12.5H11.5V11.5ZM11.5 16.5H12.5V17.5H11.5V16.5ZM16.5 11.5H17.5V12.5H16.5V11.5ZM6.5 16.5H7.5V17.5H6.5V16.5ZM5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21Z' stroke='#687176' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path><path fillRule='evenodd' clipRule='evenodd' d='M7.5 11.5V12.5H6.5V11.5H7.5Z' stroke='#0194F3' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path></svg>}
                                value='Thu, 17 Mar 2022'
                                proportion='one-third'
                                focusEmpty={false}
                                hasArrow={false}
                            />
                            <Input
                                type='booking'
                                label='Duration'
                                icon='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b0ee9b0e2caa9d0b970177b0c2ee77d0.svg'
                                value='1 night'
                                proportion='one-third'
                                focusEmpty={false}
                                hasArrow={true}
                            />
                            <div className='container_booking_body_schedule_item container_booking_body_item_input input'>
                                <div className='input-label'>Check-out</div>
                                <span>Fri, 18 Mar 2022</span>
                            </div>
                        </div>
                        <div className='container_booking_body_item container_booking_body_guests-and-search'>
                            <Input
                                type='booking'
                                label='Guests and Rooms'
                                icon='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/98a7579ccebe5a779c32bc1da67853a8.svg'
                                value='2 Adult(s), 0 Child, 1 Room'
                                proportion='two-thirds'
                                focusEmpty={false}
                                hasArrow={true}
                            />
                            <div className='container_booking_body_search container_booking_body_item_input input'>
                                <div className='input-label'></div>
                                <div className='input-wrapper container_booking_body_search-btn'>
                                    <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6109dccccb4bbae97f5ded035b3853d9.svg' alt='' />
                                    <span>Search Hotels</span>
                                </div>
                            </div>
                        </div>
                        <div className='container_booking_body_item container_booking_body_select'>
                            <div className='container_booking_body_select-box' onClick={() => setCheckboxChecked(!checkboxChecked)}>
                                <div className={clsx('container_booking_body_select_tick', checkboxChecked && 'checked')}></div>
                            </div>
                            <span className='container_booking_body_select_text'>Going on a business trip</span>
                            <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/93d682fb169004ee2a60c098735dd3da.svg' alt='' />
                        </div>
                        <div className='container_booking_body_item container_booking_body_pay-upon'>
                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' data-id='IcHotelPayUponCheckIn'><path d='M19.5 14H21V10.9C21 8.1938 18.8062 6 16.1 6H13.5M6 11V10.9C6 8.1938 8.1938 6 10.9 6H13.5M19.5 17H21.5M13.5 6V3.5M15.5 9H16C17.1046 9 18 9.89543 18 11V11.5M3.75 8C3.75 8 4 6.5 5.25 5.25C6.5 4 8 3.75 8 3.75M2.25 5C2.25 5 2.5 4 3.25 3.25C4 2.5 5 2.25 5 2.25' stroke='#0194f3' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path><path d='M15 13.75L17 13.5V16M15 13.75V13.75C13.6703 13.9162 12.3269 13.9439 10.9914 13.8326L9.0086 13.6674C7.67314 13.5561 6.32974 13.5838 5 13.75V13.75M15 13.75V14C15 15.1046 15.8954 16 17 16V16M17 16V19M17 19V21L15 21.25M17 19V19C15.8954 19 15 19.8954 15 21V21.25M15 21.25V21.25C13.6703 21.4162 12.3269 21.4439 10.9914 21.3326L9.0086 21.1674C7.67314 21.0561 6.32974 21.0838 5 21.25V21.25M3 19V21.5L5 21.25M3 19V19C4.10457 19 5 19.8954 5 21V21.25M3 19V16M5 13.75L3 14V16M5 13.75V14C5 15.1046 4.10457 16 3 16V16M12 17.5C12 18.6046 11.1046 19.5 10 19.5C8.89543 19.5 8 18.6046 8 17.5C8 16.3954 8.89543 15.5 10 15.5C11.1046 15.5 12 16.3954 12 17.5Z' stroke='#0194F3' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path></svg>
                            <span>Pay upon Check-in</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ContainerBooking);