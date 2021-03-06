import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
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
                                    'https://www.youtube.com/watch?v=Tu1RZaFnkKs'
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

export default Footer;
