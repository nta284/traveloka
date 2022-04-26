import { memo } from 'react';
import './Container.scss';
import ContainerBanners from './ContainerBanners';
import ContainerBooking from './ContainerBooking';
import ContainerPartner from './ContainerPartner';
import ContainerTopDeals from './ContainerTopDeals';
import Data from './data/Data';
import PartnersData from './data/PartnersData';

function Container() {
    return (
        <div className="container">
            <ContainerBanners />
            <ContainerBooking />

            <div className="container_item container_qr-scan-download">
                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/12/08/1638962854627-11d9aeef4e51f42c4356900d044cd968.png?tr=q-75,w-1280" alt="" />
            </div>

            <div className="container_item container_exclusively">
                <h2 className="container_item_header container_exclusively_header">Exclusively for Traveloka members</h2>
                <div className="container_exclusively_sub-header">
                    <a href="#">Log in</a> or <a href="#">Register</a> to enjoy these benefits
                </div>
                <div className="container_exclusively_categories">
                    {Data.exclusively.map((ele, index) => (
                        <a key={index} className="container_exclusively_categories-link" href="#">
                            <div className="container_exclusively_categories_item">
                                <img className="container_exclusively_categories_item_img" src={ele.img} alt="" />
                                <span>{ele.title}</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemChevronRight"><path d="M9 6L15 12L9 18" stroke="#687176" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="container_item container_deals">
                <div className="container_deals_header">
                    <h2 className="container_item_header container_deals_header_title">Popular Deals</h2>
                    <div className="container_deals_header_icons">
                        <span>All</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcProductDuotoneFlightFill"><path d="M8.79289 4.20711L7 6L9 8L10.7929 6.20711C11.1834 5.81658 11.1834 5.18342 10.7929 4.79289L10.2071 4.20711C9.81658 3.81658 9.18342 3.81658 8.79289 4.20711Z" fill="#30C5F7"></path><path d="M17.7929 13.2071L16 15L18 17L19.7929 15.2071C20.1834 14.8166 20.1834 14.1834 19.7929 13.7929L19.2071 13.2071C18.8166 12.8166 18.1834 12.8166 17.7929 13.2071Z" fill="#30C5F7"></path><path d="M14 7L2.82279 3.27426C2.35068 3.11689 1.83469 3.33062 1.61213 3.77573L1.39479 4.21042C1.16925 4.6615 1.3149 5.20993 1.73452 5.48968L10 11L13 14L18.5103 22.2655C18.7901 22.6851 19.3385 22.8307 19.7896 22.6052L20.2243 22.3879C20.6694 22.1653 20.8831 21.6493 20.7257 21.1772L17 10L14 7Z" fill="#30C5F7"></path><path d="M3.53173 14.6915L6 15L9 18L9.30853 20.4683C9.42133 21.3707 8.91113 22.2355 8.06676 22.5733L7.85432 22.6583C7.37143 22.8514 6.82109 22.6422 6.5885 22.177L5 19L1.82299 17.4115C1.35781 17.1789 1.14857 16.6286 1.34173 16.1457L1.4267 15.9332C1.76445 15.0889 2.62934 14.5787 3.53173 14.6915Z" fill="#30C5F7"></path><path d="M5.68328 19.6584L9 18L13.4396 14.3003C14.4779 13.4351 15.4378 12.4801 16.3083 11.4463L21.8613 4.85219C22.5053 4.08741 22.457 2.95698 21.75 2.25C21.043 1.54302 19.9126 1.49466 19.1478 2.13868L12.5537 7.69166C11.5199 8.56219 10.5649 9.52214 9.69969 10.5604L6 15L4.34164 18.3167C3.91186 19.1763 4.82373 20.0881 5.68328 19.6584Z" fill="#30C5F7"></path></svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcProductDuotoneHotelFill"><path fillRule="evenodd" clipRule="evenodd" d="M2 4V21C2 21.5523 2.44772 22 3 22H6.5V20.75C6.5 20.3358 6.16421 20 5.75 20C5.33579 20 5 19.6642 5 19.25V19C5 18.4477 5.44772 18 6 18H11C11.5523 18 12 18.4477 12 19V19.25C12 19.6642 11.6642 20 11.25 20C10.8358 20 10.5 20.3358 10.5 20.75V22H14H15H21C21.5523 22 22 21.5523 22 21V12C22 10.8954 21.1046 10 20 10H15V4C15 3.44772 14.5523 3 14 3H12.5C12.2061 1.82459 11.15 1 9.93845 1H7.06155C5.84996 1 4.79385 1.82459 4.5 3H3C2.44772 3 2 3.44771 2 4ZM4 6C4 5.44772 4.44772 5 5 5H7C7.55228 5 8 5.44772 8 6V7C8 7.55228 7.55228 8 7 8H5C4.44772 8 4 7.55228 4 7V6ZM10 5C9.44772 5 9 5.44772 9 6V7C9 7.55228 9.44772 8 10 8H12C12.5523 8 13 7.55228 13 7V6C13 5.44772 12.5523 5 12 5H10ZM9 10C9 9.44772 9.44772 9 10 9H12C12.5523 9 13 9.44771 13 10V11C13 11.5523 12.5523 12 12 12H10C9.44772 12 9 11.5523 9 11V10ZM4 10C4 9.44771 4.44772 9 5 9H7C7.55228 9 8 9.44772 8 10V11C8 11.5523 7.55228 12 7 12H5C4.44772 12 4 11.5523 4 11V10ZM5 13C4.44772 13 4 13.4477 4 14V15C4 15.5523 4.44772 16 5 16H7C7.55228 16 8 15.5523 8 15V14C8 13.4477 7.55228 13 7 13H5ZM10 13C9.44772 13 9 13.4477 9 14V15C9 15.5523 9.44772 16 10 16H12C12.5523 16 13 15.5523 13 15V14C13 13.4477 12.5523 13 12 13H10ZM16 14V13C16 12.4477 16.4477 12 17 12H19C19.5523 12 20 12.4477 20 13V14C20 14.5523 19.5523 15 19 15H17C16.4477 15 16 14.5523 16 14ZM19 16H17C16.4477 16 16 16.4477 16 17V18C16 18.5523 16.4477 19 17 19H19C19.5523 19 20 18.5523 20 18V17C20 16.4477 19.5523 16 19 16Z" fill="#235D9F"></path><path d="M16 7V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4H20V3C20 2.44772 20.4477 2 21 2C21.5523 2 22 2.44772 22 3V7C22 7.55228 21.5523 8 21 8C20.4477 8 20 7.55228 20 7V6H18V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7Z" fill="#235D9F"></path></svg>
                    </div>
                    <a className="container_deals_header_link" href="#">
                        <span>See more deals</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemChevronRight"><path d="M9 6L15 12L9 18" stroke="#0194f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </a>
                </div>
                <div className="container_deals_body">
                    {Data.deals.map((ele, index) => (
                        <a key={index} className="container_deals_body_item" href="#">
                            <img className="container_deals_body_item_img" src={ele} alt="" />
                        </a>
                    ))}
                </div>
            </div>

            <div className="container_item container_as-seen-in">
                <h2 className="container_item_header container_as-seen-in_header">Traveloka, as seen in</h2>
                <div className="container_as-seen-in_body">
                    {Data["as-seen-in"].map((ele, index) => (
                        <a key={index} className="container_as-seen-in_link" href="#">
                            <img src={ele} alt="" />
                        </a>
                    ))}
                </div>
            </div>

            <div className="container_item container_blogs">
                <h2 className="container_item_header container_blogs_header">Latest Traveloka Blog Articles</h2>
                <div className="container_blogs_body">
                    {Data.blogs.map((ele, index) => (
                        <div key={index} className="container_blogs_item">
                            <a href="#" className="container_blogs_item-link">
                                <div className="container_blogs_item_mask"></div>
                                <img className="container_blogs_item_img" src={ele.img} alt="" />
                                <span className="container_blogs_item_title">{ele.title}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container_item container_partners">
                {PartnersData.map((ele,index) => (
                    <ContainerPartner key={index} partner={ele}/>
                ))}
            </div>

            <div className="container_item container_why-book">
                <h2 className="container_item_header container_why-book_header">Why book with Traveloka?</h2>
                <div className="container_why-book_body">
                    {Data["why-book"].map((ele, index) => (
                        <div key={index} className="container_why-book_item">
                            <img src={ele.img} alt="" />
                            <div className="container_why-book_item_description">
                                <h3>{ele.title}</h3>
                                <p>{ele.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ContainerTopDeals />
        </div>
    )
}

export default memo(Container);