import React from 'react'
import { FaEnvelope, FaFacebook, FaLinkedinIn, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import {
    EmailShareButton,
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    LinkedinShareButton
} from "react-share";

const Rx = ({ nom }) => {

    const url = ""
    return (
        <div className='rx'>
            <FiShare2 size={20} color='#fff' />
            <div className='iconsRxS'>
                <FacebookShareButton url={url} quote='Partager via facebook'>
                    <div style={{ border: "none", background: "#2d4373", padding: ".4rem" }}>
                        <FaFacebook size={20} color='#fff' />
                    </div>
                </FacebookShareButton>

                <EmailShareButton url={url} quote='Partager via facebook'>
                    <div style={{ border: "none", background: "#0b6cc7d0", padding: ".4rem" }}>
                        <FaEnvelope size={20} color='#fff' />
                    </div>
                </EmailShareButton>

                <TwitterShareButton url={url} quote='Partager via facebook'>
                    <div style={{ border: "none", background: "#0087ba", padding: ".4rem" }}>
                        <FaTwitter size={20} color='#fff' />
                    </div>
                </TwitterShareButton>

                <WhatsappShareButton url={url} quote='Partager via facebook'>
                    <div style={{ border: "none", background: "#1f7d1e", padding: ".4rem" }}>
                        <FaWhatsapp size={20} color='#fff' />
                    </div>
                </WhatsappShareButton>

                <LinkedinShareButton url={url} quote='Partager via facebook'>
                    <div style={{ border: "none", background: "#005983", padding: ".4rem" }}>
                        <FaLinkedinIn size={20} color='#fff' />
                    </div>
                </LinkedinShareButton>

                <TelegramShareButton url={url} quote='Partager via facebook'>
                    <div style={{ border: "none", background: "#33a8da", padding: ".4rem" }}>
                        <FaTelegram size={20} color='#fff' />
                    </div>
                </TelegramShareButton>
            </div>
        </div>
    )
}

export default Rx