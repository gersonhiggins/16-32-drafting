import React from 'react';
import './Style.css'; 

function Footer() {
    return (
        <footer style={{ background: '#333', color: '#fff', padding: '1rem', marginTop: '2rem', textAlign: 'center' }}>
            <div className='footer-content' id='contact'>
                <div>
                    <h4> Contact Us</h4>
                    <p>Email</p>
                    <p>gustavo@1632drafting.com</p>
                </div>
                <div>
                    <h4>Hours</h4>
                    <p>Monday-Friday</p>
                    <p>9:00am-5:00pm ET</p>
                </div>
            </div>
            <p>&copy; 16-32 DRAFTING LLC</p>
        </footer>
    );
}

export default Footer;