import { memo } from 'react';
import './Footer.scss';
import FooterData from './FooterData';

function Footer() {
    function CategotyItem({ data }) {
        const { type, img, title } = data;

        const styles = {
            "normal": null,
            "social": "footer_content_section_list_link",
            "img": "footer_content_section_download_link"
        }

        return (
            <li>
                <a className={styles[type]} href="#">
                    {type !== "normal" && <img src={img} alt="" />}
                    {type !== "img" && <span>{title}</span>}
                </a>
            </li>
        )
    }

    return (
        <footer className="footer">
            <div className="footer_body">
                <div className="footer_certis-and-partners">
                    <div className="footer_certis-and-partners_logo">
                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/86afd0785f5505dd6d584971576dea27.svg" alt="" />
                    </div>
                    <div className="footer_certis-and-partners_certis">
                        {FooterData.certis.map((certi, index) => {
                            if (certi.type === 'img') {
                                return (
                                    <img key={index} src={certi.src} alt="" />
                                )
                            }
                            else if (certi.type === 'link') {
                                return (
                                    <a key={index} href="#">
                                        <img src={certi.src} alt="" />
                                    </a>
                                )
                            }
                        })}
                    </div>
                    <a className="footer_certis-and-partners_partner-btn" href="#">
                        <div>
                            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/9edc2cd0b5368b5196829820521b2d6b.svg" alt="" />
                        </div>
                        <span>Partner with Traveloka</span>
                    </a>
                    <div className="footer_certis-and-partners_payment">
                        <div className="footer_certis-and-partners_payment_header">Payment Partners</div>
                        <div className="footer_certis-and-partners_payment_body">
                            {FooterData.partners.map((ele, index) => (
                                <div key={index} className="footer_certis-and-partners_payment_item">
                                    <img src={ele} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer_content">
                    {FooterData.categories.map((ele, index) => (
                        <div key={index} className="footer_content_column">
                            {ele.map((section, index) => (
                                <div key={index} className="footer_content_section">
                                    <h5 className="footer_content_section_header">{section.heading}</h5>
                                    <ul className="footer_content_section_list">
                                        {section.list.map((item, index) => (
                                            <CategotyItem key={index} data={item} />
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer_copyrights-and-address">
                <div className="footer_address">
                    Traveloka Vietnam Co., Ltd. Enterprise Reg.: 0313581779. An Phu Building, 117-119 Ly Chinh Thang, Ward 7, District 3, HCMC
                </div>
                <div className="footer_copyrights">
                    Copyright © 2022 Traveloka
                </div>
            </div>
        </footer>
    )
}

export default memo(Footer);