import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 
    flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
            <p> Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://github.com/Vishal-Sutar"  className="w-1/2 h-1/2">
                    <img src="/assets/github.svg" alt="github"/>
                      </a>
                    
                </div>

                <div className="social-icon">
                    <a href="https://www.instagram.com/vishal_sutar7875?igsh=MWxtb2J6cmJkYWM5OA==" className="w-1/2 h-1/2">
                    <img src="/assets/instagram.svg" alt="instagram"/>
                    </a>
                     
                    
                </div>

                <div className="social-icon">
                <a href="https://wa.me/9146450350" className="w-1/2 h-1/2"  >
                        <img src="/assets/whatsapp.svg" alt="whatsapp"/>
                </a>
                   
                </div>

                <div className="social-icon"  >
                    <a href="https://www.linkedin.com/in/vishal-sutar-2b2354272" className="w-1/2 h-1/2">
                     <img src="/assets/linkedin.svg" alt="linkdin" /> 
                     </a>
                    
                     
                </div>




            </div>
    </section>
 );
};

export default Footer;
