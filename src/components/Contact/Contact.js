import React from 'react';

const Contact = () => {
    return (
        <form>
            <h6 className='p-2'>Feel free to message if you have any queries or suggestions</h6>
            <div className='mt-4'>
                <input className='w-25' name="name" type="text" placeholder="Your name" required />
            </div>
            <div className='mt-4'>
                <input className='w-25' name="email" type="email" placeholder="Your email" required />
            </div>
            <div className='mt-4'>
                <textarea className='w-25' name="message" required placeholder="Your message"></textarea>
            </div>
            <div className='mb-5'>
                <input type="submit" className="btn btn-warning w-25" value="Send Message" />
            </div>
        </form>
    );
};

export default Contact;