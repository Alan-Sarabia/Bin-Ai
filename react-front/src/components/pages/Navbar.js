import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RiRecycleFill } from 'react-icons/ri'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css';
//import './NewNavbar.css'
import { IconContext } from 'react-icons/lib'

//para direccionar
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton]= useState(true)
    const handleCLick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    {/**/}
    window.addEventListener('resize', showButton);
    //Componentes del Nav
    return (
        
        <>
        <IconContext.Provider value={{color: '#fff'}}>  
        
            <div className='navbar'>
                <div className='navbar-container container'>
                    
               
               
                  
                   <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <RiRecycleFill className='navbar-icon'/>
                    Bin AI
                  </Link>
                   
                    
                  <div className='menu-icon' onClick={handleCLick}>
                        {click ? <FaTimes/> : <FaBars/>}
                  </div>
                       
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                            
                        <li className='nav-item'>
                                <Link to='/' href="#fakeLink" class="btn gray"onClick={closeMobileMenu}>
                                   Home
                                </Link>
                            </li>
                            

                            <li className='nav-item'>
                                <Link to='/Informaciòn' href="#fakeLink" class="btn gray" onClick={closeMobileMenu}>
                                    Información
                                </Link>
                            </li>
           
                        </ul>
                </div>
                </div>
            
            
        </IconContext.Provider> 
        </>
        
        
    )
}

export default Navbar
