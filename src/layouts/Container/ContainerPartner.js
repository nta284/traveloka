import { memo, useState } from "react";
import './ContainerPartner.scss';
import clsx from "clsx";

function ContainerPartner({ partner }) {
    const { type, title, sub_title, description, list } = partner;

    const [sliderPos, setSliderPos] = useState('left');

    return (
        <div className="container_partners_section">
            <div className="container_partners_section_description">
                <h3 className="container_item_header container_partners_section_title">{title}</h3>
                <h5 className="container_partners_section_sub-title">{sub_title}</h5>
                <p className="container_partners_section_content">{description}</p>
            </div>
            <div className="container_partners_list">
                <div className="container_partners_list-hide-overflow">
                    <div
                        className="container_partners_list-wrapper"
                        style={{transform: sliderPos === 'right' ? 'translateX(-672px)' : 'translateX(0px)'}}
                    >
                        {list.map((half, index) => (
                            <div key={index} className="container_partners_list-wrapper-half">
                                {half.map((ele, index) => (
                                    <a key={index} className="container_partners_item" href="#">
                                        <img src={ele} alt="" />
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className={clsx({
                        "container_partners_list_slider-btn container_partners_list_left-btn": true,
                        "hotel-partners-btn": type === "Hotel",
                        "inactive": sliderPos === 'left'
                    })}
                    onClick={() => setSliderPos('left')}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemChevronLeft"><path d="M15 6L9 12L15 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <div
                    className={clsx({
                        "container_partners_list_slider-btn container_partners_list_right-btn": true,
                        "hotel-partners-btn": type === "Hotel",
                        "inactive": sliderPos === 'right'
                    })}
                    onClick={() => setSliderPos('right')}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemChevronRight"><path d="M9 6L15 12L9 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default memo(ContainerPartner);