import { useState, memo } from 'react';
import './ContainerTopDeals.scss';
import TopDealsData from './data/TopDealsData';
import clsx from 'clsx';

function ContainerTopDeals() {
    const [selectingCategory, setSelectingCategory] = useState("Top Flight Destinations");
    const [pendingCategory, setPendingCategory] = useState("Top Flight Destinations");

    function NavbarItem({ ele }) {
        const [clicking, setClicking] = useState(false);

        return (
            <div className="container_top-deals_navbar_item">
                <span
                    className={clsx(
                        "container_top-deals_name",
                        selectingCategory === ele.title && "container_top-deals_name--selected",
                        clicking && "clicking-category"
                    )}
                    onMouseDown={() => setClicking(true)}
                    onMouseUp={() => {
                        setClicking(false);
                        setSelectingCategory(ele.title);
                        setTimeout(() => {
                            setPendingCategory(ele.title);
                        }, 0);
                    }}
                >{ele.title}</span>
            </div>
        )
    }

    return (
        <div className="container_item container_top-deals">
            <h2 className="container_item_header container_top-deals_header">What interests you?</h2>
            <div className="container_top-deals_body">
                <div className="container_top-deals_navbar">
                    <div className="container_top-deals_navbar-wrapper">
                        {TopDealsData.map((ele, index) => (
                            <NavbarItem key={index} ele={ele} />
                        ))}
                    </div>
                    <div
                        className="container_top-deals_navbar_underline"
                        style={{transform: `translateX(${16 + 252 * TopDealsData.indexOf(TopDealsData.find(ele => ele.title === selectingCategory))}px)`}}
                    ></div>
                </div>
                <div className="container_top-deals_categories">
                    {TopDealsData.map((ele, index) => (
                        <div
                            key={index}
                            className={clsx(
                                `container_top-deals_category container_top-deals_category--${ele.list.length}col`,
                                selectingCategory === ele.title && "active-category",
                                pendingCategory === ele.title && "pending-category",
                            )}
                        >
                            {ele.list.map((item, index) => (
                                <div key={index} className="container_top-deals_category_column">
                                    {item.map((item, index) => (
                                        <a key={index} href="#">
                                            <span>{item}</span>
                                        </a>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default memo(ContainerTopDeals);