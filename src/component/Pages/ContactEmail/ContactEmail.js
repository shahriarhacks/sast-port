import React from 'react';
import emailjs from 'emailjs-com';



const ContactEmail = () => {

function sentEmail (e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_znawdax', e.target, 'FValgu5EbS58xfT_s')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

}



    return (
        <div className='mt-12 mb-6'>

            <h4 className='text-xl text-white text-center font-bold'>S E N T  <span className='text-primary font-bold'>M A I L</span></h4>
       
            <form onSubmit={sentEmail} className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
                <input placeholder="n a m e " name='name' class="input input-bordered w-full max-w-xs text-primary font-bold" type="text" />
                <input placeholder="e m a i l " name='email' class="input input-bordered w-full max-w-xs text-primary font-bold" type="text" />
                <textarea placeholder="w  r i e m e s s a g e " name='message' class="input input-bordered w-full max-w-xs text-primary font-bold" type="text" />
                <button className='btn w-full max-w-xs' type="submit">Sent Mail</button>
            </form>

        </div>
    );
};

export default ContactEmail;