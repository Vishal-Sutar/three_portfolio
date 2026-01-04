// // // import React, { useRef, useState } from "react";
// // // import emailjs from '@emailjs/browser';

// // // const Contact = () => {

// // //     const formRef = useRef();

// // //     const [loading, setLoading] = useState(false)
// // //     const [form ,setForm] = useState({
// // //         name:'',
// // //         email:'',
// // //         message:''
// // //     });

// // //     //service_5xf1mqp
    
// // //   const handleChange = ({ target: { name, value } }) => {
// // //     setForm({ ...form, [name]: value });
// // //   };

// // //     const handleSubmit = async (e) =>{
// // //         e.preventDefault();
// // //         setLoading(true);

// // //         try {
// // //           await emailjs.send(
// // //             'service_5xf1mqp',
// // //             'template_snro2z7',
// // //                 {
// // //                    from_name: form.name, 
// // //                    to_name: 'Vishal',
// // //                    from_email: form.email,
// // //                    to_email: 'vishalsutar3731@gmail.com',
// // //                    message: form.message
// // //                 },
// // //                   'mxZY2zvJh-Q-mewSh'
// // //                 )

// // //            setLoading(false);
// // //            alert('Your message has been sent')

// // //            setForm({
// // //             name:'',
// // //             email:'',
// // //             message:''
// // //                }
// // //            )
            
// // //         } catch (error) {
            
// // //             setLoading(false);
// // //             console.log(error);
// // //             alert('Something went wrong')
// // //         }
// // //     }


// // //   return (
// // //   <section className="c-space my-20" id="contact">
// // //     <div className="relative min-h-screen flex items-center justify-center flex-col">
// // //         <img src="/assets/terminal.png" alt="terminal background" 
// // //         className="absolute inset-0 min-h-screen"/>
// // //         <div className="contact-container">
// // //          <h3 className="head-text pt-6 flex justify-center pb-5" >Contact Me</h3>
// // //          <p className="text-lg text-white-600">Whether you're looking to build a new website, Let's connect with me.</p>

// // //          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
// // //             <label className="space-y-3">
// // //                 <span className="field-label">Full Name</span>
// // //                 <input type="text"
// // //                        name="name"
// // //                        value={form.name}
// // //                        onChange={handleChange}
// // //                        required
// // //                        className="field-input"
// // //                        placeholder="Enter Your Name" />
// // //             </label>

// // //             <label className="space-y-3">
// // //                 <span className="field-label">E-mail</span>
// // //                 <input type="email"
// // //                        name="email"
// // //                        value={form.email}
// // //                        onChange={handleChange}
// // //                        required
// // //                        className="field-input"
// // //                        placeholder="Enter Your E-mail" />
// // //             </label>

// // //             <label className="space-y-3">
// // //                 <span className="field-label">Your Message</span>
// // //                 <textarea 
// // //                        name="message"
// // //                        value={form.message}
// // //                        onChange={handleChange}
// // //                        required
// // //                        rows={3}
// // //                        className="field-input"
// // //                        placeholder="Type your message..." />
// // //             </label>

// // //             <button className="field-btn" type="submit" disabled={loading}>
// // //                 {loading ? 'Sending...' : 'Send Message'}
// // //                 <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
// // //             </button>

// // //          </form>
// // //         </div>
// // //     </div>
// // //   </section>)
// // // };

// // // export default Contact;
// // import React, { useRef, useState } from "react";
// // import emailjs from '@emailjs/browser';

// // const Contact = () => {
// //     const formRef = useRef();

// //     const [loading, setLoading] = useState(false)
// //     const [form, setForm] = useState({
// //         name: '',
// //         email: '',
// //         message: ''
// //     });

// //     const handleChange = ({ target: { name, value } }) => {
// //         setForm({ ...form, [name]: value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         setLoading(true);

// //         try {
// //             await emailjs.send(
// //                 'service_5xf1mqp',
// //                 'template_snro2z7',
// //                 {
// //                     from_name: form.name,
// //                     to_name: 'Vishal',
// //                     from_email: form.email,
// //                     to_email: 'vishalsutar3731@gmail.com',
// //                     message: form.message
// //                 },
// //                 'mxZY2zvJh-Q-mewSh'
// //             )

// //             setLoading(false);
// //             alert('Your message has been sent successfully! 🎉')

// //             setForm({
// //                 name: '',
// //                 email: '',
// //                 message: ''
// //             })

// //         } catch (error) {
// //             setLoading(false);
// //             console.log(error);
// //             alert('Something went wrong. Please try again.')
// //         }
// //     }

// //     return (
// //         <section className="c-space my-20" id="contact">
// //             <div className="relative min-h-screen flex items-center justify-center flex-col">
// //                 {/* Fixed terminal background - no longer overlaps footer */}
// //                 <img 
// //                     src="/assets/terminal.png" 
// //                     alt="terminal background" 
// //                     className="absolute inset-0 w-full h-full object-cover"
// //                 />
                
// //                 {/* Optional: Add dark overlay for better text readability */}
// //                 <div className="absolute inset-0 bg-black/40" />
                
// //                 <div className="contact-container relative z-10">
// //                     <h3 className="head-text pt-6 flex justify-center pb-5">Contact Me</h3>
// //                     <p className="text-lg text-white-600 text-center">
// //                         Whether you're looking to build a new website, Let's connect with me.
// //                     </p>

// //                     <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
// //                         <label className="space-y-3">
// //                             <span className="field-label">Full Name</span>
// //                             <input 
// //                                 type="text"
// //                                 name="name"
// //                                 value={form.name}
// //                                 onChange={handleChange}
// //                                 required
// //                                 minLength={2}
// //                                 className="field-input"
// //                                 placeholder="John Doe" 
// //                             />
// //                         </label>

// //                         <label className="space-y-3">
// //                             <span className="field-label">Email Address</span>
// //                             <input 
// //                                 type="email"
// //                                 name="email"
// //                                 value={form.email}
// //                                 onChange={handleChange}
// //                                 required
// //                                 className="field-input"
// //                                 placeholder="john@example.com" 
// //                             />
// //                         </label>

// //                         <label className="space-y-3">
// //                             <span className="field-label">Your Message</span>
// //                             <textarea 
// //                                 name="message"
// //                                 value={form.message}
// //                                 onChange={handleChange}
// //                                 required
// //                                 minLength={10}
// //                                 rows={5}
// //                                 className="field-input"
// //                                 placeholder="Type your message..." 
// //                             />
// //                         </label>

// //                         <button className="field-btn" type="submit" disabled={loading}>
// //                             {loading ? 'Sending...' : 'Send Message'}
// //                             <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
// //                         </button>
// //                     </form>
// //                 </div>
// //             </div>
// //         </section>
// //     )
// // };

// // export default Contact;
// import React, { useRef, useState } from "react";
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//     const formRef = useRef();

//     const [loading, setLoading] = useState(false)
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = ({ target: { name, value } }) => {
//         setForm({ ...form, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             await emailjs.send(
//                 'service_5xf1mqp',
//                 'template_snro2z7',
//                 {
//                     from_name: form.name,
//                     to_name: 'Vishal',
//                     from_email: form.email,
//                     to_email: 'vishalsutar3731@gmail.com',
//                     message: form.message
//                 },
//                 'mxZY2zvJh-Q-mewSh'
//             )

//             setLoading(false);
//             alert('Your message has been sent successfully! 🎉')

//             setForm({
//                 name: '',
//                 email: '',
//                 message: ''
//             })

//         } catch (error) {
//             setLoading(false);
//             console.log(error);
//             alert('Something went wrong. Please try again.')
//         }
//     }

//     return (
//         <section className="c-space my-20 relative" id="contact">
//             {/* Changed: Added relative here and overflow-hidden */}
//             <div className="relative min-h-screen flex items-center justify-center flex-col overflow-hidden">
//                 {/* Terminal background - properly contained */}
//                 <img 
//                     src="/assets/terminal.png" 
//                     alt="terminal background" 
//                     className="absolute inset-0 w-full h-full object-contain"
//                 />
                
//                 {/* Contact form container with higher z-index */}
//                 <div className="contact-container relative z-10">
//                     <h3 className="head-text pt-6 flex justify-center pb-5">Contact Me</h3>
//                     <p className="text-lg text-white-600 text-center">
//                         Whether you're looking to build a new website, Let's connect with me.
//                     </p>

//                     <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
//                         <label className="space-y-3">
//                             <span className="field-label">Full Name</span>
//                             <input 
//                                 type="text"
//                                 name="name"
//                                 value={form.name}
//                                 onChange={handleChange}
//                                 required
//                                 className="field-input"
//                                 placeholder="John Doe" 
//                             />
//                         </label>

//                         <label className="space-y-3">
//                             <span className="field-label">Email Address</span>
//                             <input 
//                                 type="email"
//                                 name="email"
//                                 value={form.email}
//                                 onChange={handleChange}
//                                 required
//                                 className="field-input"
//                                 placeholder="john@example.com" 
//                             />
//                         </label>

//                         <label className="space-y-3">
//                             <span className="field-label">Your Message</span>
//                             <textarea 
//                                 name="message"
//                                 value={form.message}
//                                 onChange={handleChange}
//                                 required
//                                 rows={5}
//                                 className="field-input"
//                                 placeholder="Type your message..." 
//                             />
//                         </label>

//                         <button className="field-btn" type="submit" disabled={loading}>
//                             {loading ? 'Sending...' : 'Send Message'}
//                             <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     )
// };

// export default Contact;
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_5xf1mqp',
                'template_snro2z7',
                {
                    from_name: form.name,
                    to_name: 'Vishal',
                    from_email: form.email,
                    to_email: 'vishalsutar3731@gmail.com',
                    message: form.message
                },
                'mxZY2zvJh-Q-mewSh'
            )

            setLoading(false);
            alert('Your message has been sent successfully!')

            setForm({
                name: '',
                email: '',
                message: ''
            })

        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong. Please try again.')
        }
    }

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                {/* Terminal background - contained and centered */}
                <div className="absolute inset-0">
                    <img 
                        src="/assets/terminal.png" 
                        alt="terminal background" 
                        className="w-full h-full object-contain"
                    />
                </div>
                
                {/* Contact form container */}
                <div className="contact-container relative z-10">
                    <h3 className="head-text pt-6 flex justify-center pb-5">Contact Me</h3>
                    <p className="text-lg text-white-600 text-center">
                        Whether you're looking to build a new website, Let's connect with me.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input 
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Enter Your Name" 
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">E-mail</span>
                            <input 
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Enter Your E-mail" 
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea 
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={3}
                                className="field-input"
                                placeholder="Type your message..." 
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Contact;
