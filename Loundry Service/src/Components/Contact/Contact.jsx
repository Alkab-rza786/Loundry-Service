import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'
import white_arrow from '../../assets/white_arrow.png'
function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "d904a1a8-c2ec-4999-8996-4ba6b80e6f23");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };



    return (
        <div className='contact' id='contact'>
            <div className="contact-col">
                <h3>Send us message <img src={msg_icon} alt="" /></h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quam molestiae ratione? Quis, labore. Dignissimos suscipit exercitationem ipsa quibusdam dolorum.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />alkabrza61@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
                    <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br /> MA 08908, United States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit} >
                    <label htmlFor="">Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label htmlFor="">Phone no</label>
                    <input type="tel" name='phone' placeholder='Enter you mobile no' required />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="6" placeholder='Enter your messeage' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}
import './Contact.css'

export default Contact
