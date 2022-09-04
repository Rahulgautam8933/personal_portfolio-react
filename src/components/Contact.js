import React from 'react'

export default function Contact() {
  return (
    <>
    <div id="contactheading">
        <h1>Contact us</h1>
    </div>
    <div className="contactfrom">
        <div id="contact-box">
            <form onsubmit="sendEmail(); reset(); return false" id="form">
                <div class="form-group">
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="Name" placeholder="Enter your name"/>
                </div>
                <div class="form-group">
                    <label for="email">Email: </label>
                    <input type="email" name="name" id="Email" placeholder="Enter your email"/>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number: </label>
                    <input type="phone" name="name" id="Phone" placeholder="Enter your phone"/>
                </div>
                <div class="form-group">
                    <label for="message">Message: </label>
                    <textarea name="message" id="Message" cols="30" rows="10"></textarea>
                </div>
                <div id='submit'>
                <button type="submit" onclick="sendmail();" >Submit</button>
                </div>
            </form>
        </div>
    </div>

    </>

    )
}
