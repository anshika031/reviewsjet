import { Component } from 'react';
import './NavbarStyles.css';
import { MenuItems } from './MenuItems';

//Line : 14 - we're targeting index using key in LI, bcz menuitems are in array

class Navbar extends Component{
    render(){
        return (
             <>
       <nav className='NavbarItems'>
            <h1 className='NavbarLogo'><i className="fa-brands fa-rocketchat"></i> Vanno</h1>
            <ul className='NavMenu'>
                {MenuItems.map((item, index)=> {
                    return (
                        <li key = {index}>     
                        <a className={item.cName} href="/"> {item.title}
                        </a>
                        </li>
                    );
                })}

                <button className='button1'>Write a Review</button>  
                <button className='button2'>For Companies</button>  
                
            </ul>
          </nav></>
        )
    } //writing render only bcz we use exntends here, otherwise no need to write it.
}

export default Navbar;