import React from 'react'
import './Footer.css'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
    return (
        <div>
            <div className='footer-container'>


                <div className='footer-links'>

                </div>
                <section className='social-media'>
                    <div className='social-media-wrap'>
                        <div className='footer-logo'>
                            <Link to='/' className='social-logo'>
                                <MdFingerprint className='navbar-icon' />
                                Eco IA
                            </Link>
                        </div>
                        <small className='website-rights'>ECO IA© 2021</small>
                        <div className='social-icons'>
                            <Link
                                className='social-icon-link'
                                to='/'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <FaFacebook />
                            </Link>
                            <Link
                                className='social-icon-link'
                                to='/'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                className='social-icon-link'
                                to={
                                    '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                                }
                                target='_blank'
                                aria-label='Youtube'
                            >
                                <FaYoutube />
                            </Link>
                            <Link
                                className='social-icon-link'
                                to='/'
                                target='_blank'
                                aria-label='Twitter'
                            >
                                <FaTwitter />
                            </Link>
                            <Link
                                className='social-icon-link'
                                to='/'
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <FaLinkedin />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer
