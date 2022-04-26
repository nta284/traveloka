import clsx from 'clsx';
import { useState, memo } from 'react';
import './ContainerBanners.scss';
import BannersData from './data/BannersData'

function ContainerBanners() {
    const [bannersPosition, setBannersPosition] = useState(0);
    console.log(bannersPosition);

    return (
        <div className="container_banners">
            <div
                className="container_banners_slider"
                style={{transform: `translateX(${-488 * bannersPosition}px)`}}
            >
                {BannersData.map((ele, index) => (
                    <a key={index} href="#">
                        <img className="container_banner_img" src={ele} alt="" />
                    </a>
                ))}
            </div>
            <div className="container_banners_footer">
                <div
                    className={clsx('container_banners_btn', bannersPosition === 0 && 'disabled-btn')}
                    onClick={() => {
                        bannersPosition !== 0 && setBannersPosition(bannersPosition - 1);
                    }}
                >
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97200c969038f8d49afc3efee8c467ce.svg" alt="" />
                </div>
                <a href="#">See more deals</a>
                <div
                    className={clsx('container_banners_btn', bannersPosition === 5 && 'disabled-btn')}
                    onClick={() => {
                        bannersPosition !== 5 && setBannersPosition(bannersPosition + 1);
                    }}
                >
                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/ac8bd5eb944eb9b8790cc07dfd70bb37.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default memo(ContainerBanners);