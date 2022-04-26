import { useState, memo } from 'react';
import './Header.scss';
import CountryFlag from '../../components/CountryFlag';
import HeaderDropdown from './HeaderDropdown';
import Input from '../../components/Input';
import HeaderData from './HeaderData';

function Header({ setSidenavToggle }) {
    const { countriesData, categoriesData } = HeaderData;

    const [selectingCountryLang, setSelectingCountryLang] = useState('Vietnam (English)');
    const [selectingCurrency, setSelectingCurrency] = useState('VND');

    console.log('Header re-render');

    return (
        <header className="header">
            <nav className="header_navbar">
                <div className="header_navbar_logo">
                    <div className="header_sidenav-open-btn" onClick={(e) => {e.stopPropagation();setSidenavToggle(true)}}>
                        <img className="header_sidenav-open-btn_img" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8c5c07f3e6c8c7806ef853f5e943e27b.svg" alt="" />
                    </div>
                    <a className="header_navbar_logo-link" href="#">
                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg" alt="" />
                    </a>
                </div>
                <div className="header_navbar_list">
                    <HeaderDropdown alignRight={false} className="header_navbar_item header_navbar_download-item">
                        <div className="header_navbar_download-item-wrapper">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcMobilePhoneDownload"><path d="M6 15H18M9 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3H15M10 18H14" stroke="#687176" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 2V11M12 11L10 9M12 11L14 9" stroke="#0194F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <span>Download App</span>
                            <img className="navbar_dropdown-arrow" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/725bdbbc829236edb107bb810038bd72.svg" alt="" />
                        </div>
                        <div className="header_navbar_download-section">
                            <div className="header_navbar_download_header">
                                <svg width="32" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemArrowDown"><path d="M12 4V20M12 20L5 13M12 20L19 13" stroke="#687176" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                <span>Scan QR code to download</span>
                            </div>
                            <div className="header_navbar_download_body">
                                <img id="header_navbar_download_qr" src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/20/1621505512045-e090f5237022cf86afd98eb132f19086.png?tr=h-116,q-75,w-116" alt="" />
                                <a href="#">
                                    <img className="header_navbar_download_store-img" src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/21/1621579427565-4b746b647c0424ee0409b835fd35b175.svg?tr=q-75,w-123" alt="" />
                                </a>
                                <a href="#">
                                    <img className="header_navbar_download_store-img" src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/21/1621579433637-f60b505ed1f8f78c11172d55430a1819.svg?tr=q-75,w-123" alt="" />
                                </a>
                            </div>
                        </div>
                    </HeaderDropdown>
                    <a className="header_navbar_item header_navbar_item-link" href="#">
                        <img className="header_navbar_item_img" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/bdab924c2bd3a5fb492022beb158a6ef.svg" alt="" />
                        <span>Partner with Us</span>
                    </a>
                    <a className="header_navbar_item header_navbar_item-link" href="#">
                        <img className="header_navbar_item_img" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c80a2b136969e32f4db682792d1110f6.svg" alt="" />
                        <span>Saved</span>
                    </a>
                    <a className="header_navbar_item header_navbar_item-link" href="#">
                        <img className="header_navbar_item_img" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b0f87008a7a01d72ffb5eacf06870cba.svg" alt="" />
                        <span>My Booking</span>
                    </a>
                    <HeaderDropdown alignRight={true} className="header_navbar_item header_navbar_countries-item">
                        <div className="header_navbar_countries-item-wrapper">
                            <CountryFlag country='vietnam' />
                            <span>VND</span>
                            <img className="navbar_dropdown-arrow" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/725bdbbc829236edb107bb810038bd72.svg" alt="" />
                        </div>
                        <div className="header_navbar_countries-section">
                            <div className="header_navbar_countries_country-lang">
                                <h3 className="header_navbar_countries_header">{countriesData.coutryLang.title}</h3>
                                <ul className="header_navbar_countries_list">
                                    {countriesData.coutryLang.list.map((ele, index) => (
                                        <li key={index} className="header_navbar_countries_item" onClick={() => setSelectingCountryLang(ele.name)}>
                                            <CountryFlag country={ele.country} />
                                            <span>{ele.name}</span>
                                            {selectingCountryLang === ele.name && <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/06fbafb179fb36dbb9aee296f97844d3.svg" alt="" />}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="header_navbar_countries_currency">
                                <h3 className="header_navbar_countries_header">{countriesData.currency.title}</h3>
                                <ul className="header_navbar_countries_list">
                                    {countriesData.currency.list.map((ele, index) => (
                                        <li key={index} className="header_navbar_countries_item" onClick={() => setSelectingCurrency(ele.abbr)}>
                                            <abbr>{ele.abbr}</abbr>
                                            <span>{ele.name}</span>
                                            {selectingCurrency === ele.abbr && <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/06fbafb179fb36dbb9aee296f97844d3.svg" alt="" />}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="btn header_navbar_countries_done-btn">Done</button>
                        </div>
                    </HeaderDropdown>
                    <HeaderDropdown alignRight={true} top={'120%'} className="header_navbar_item header_navbar_login-item">
                        <div className="header_navbar_login-item-wrapper">
                            <div className="header_navbar_login_avatar"></div>
                            <span>Log In</span>
                            <img className="navbar_dropdown-arrow" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/725bdbbc829236edb107bb810038bd72.svg" alt="" />
                        </div>
                        <div className="header_navbar_login-section">
                            <div className="header_navbar_login_body">
                                <h3>Log in to your account</h3>
                                <Input 
                                    type='login_email'
                                    label='Email or mobile no.'
                                    icon={null}
                                    value=''
                                    proportion={null}
                                    focusEmpty={false}
                                    hasArrow={false}
                                />
                                <Input 
                                    type='login_password'
                                    label='Password'
                                    icon='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/1/1d3eb6d81c7136efb59126326aac600b.svg'
                                    value=''
                                    proportion={null}
                                    focusEmpty={false}
                                    hasArrow={false}
                                />
                                <div className="header_navbar_login_btn-and-register">
                                    <button className="btn header_navbar_login_btn">Log In</button>
                                    <div className="header_navbar_login_register">
                                        <span>No account yet?</span>
                                        <a href="#">Register</a>
                                    </div>
                                </div>
                            </div>
                            <div className="header_navbar_login_footer">
                                <div className="header_navbar_login_footer_heading">Or log in with:</div>
                                <div className="header_navbar_login_socials">
                                    <div className="btn header_navbar_login_social login_facebook">
                                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5f2c27c2674ad4a01c1cd42b2e0884aa.svg" alt="" />
                                        <span>Facebook</span>
                                    </div>
                                    <div className="btn header_navbar_login_social login_google">
                                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c6bf231775a1d162b567c0882e1d7e3b.svg" alt="" />
                                        <span>Google</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </HeaderDropdown>
                    <button className="btn header_navbar_register-btn">Register</button>
                </div>
            </nav>
            <ul className="header_categories">
                <div className="header_categories-wrapper">
                    {categoriesData.map((cat, index) => (
                        <HeaderDropdown key={index} alignRight={index === 3} className="header_categories_item">
                            <div className="header_categories_item-wrapper">
                                <span>{cat.title}</span>
                                <img className="categories_dropdown-arrow" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5d2a9385fea80cf4f2cac027d7805ad3.svg" alt="" />
                            </div>
                            <div className="header_categories_options">
                                {cat.list.map((item, index) => (
                                    <a key={index} className="header_categories_option-link" href="#">
                                        <img className="header_categories_option_img" src={item.src} alt="" />
                                        <span>{item.name}</span>
                                    </a>
                                ))}
                            </div>
                        </HeaderDropdown>
                    ))}
                </div>
            </ul>
        </header>
    )
}

export default memo(Header);