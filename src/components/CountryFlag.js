import React from 'react';
import './CountryFlag.scss';

function CountryFlag({ country }) {
    const flagUrl = {
        indonesia: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/90071d4fd97ce245feacad8b0e396d75.svg",
        global: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f91815c8c137b036fed756dd718bf0ba.svg",
        malaysia: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/cdc1d233453152774a786dff6af47d62.svg",
        philippines: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6ff101d8eb042f1764ca2a50cc67fb26.svg",
        singapore: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8e7c1fc6149e4013bd63f1bb370c548d.svg",
        thailand: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/cda34076a3d718348cb6cc861e5dacf2.svg",
        vietnam: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/96f8c046147fb32a009ba122f35312aa.svg",
        australia: "https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/9024166426a800c9298c54a68f527f13.svg"
    }

    return (
        <div
            className='country-flag'
            style={{backgroundImage: `url(${flagUrl[country]})`}}
        ></div>
    )
}

export default CountryFlag;