
const ContactUs = () => {
    return (
        <div className="container mx-auto w-10/12 lg:w-4/5">
            <div className="text-center my-16">
                <h2 className="text-4xl lg:text-4xl flex items-center justify-center worksans font-extrabold bg-[#1313130D] rounded-xl h-[100px]">Contact Us</h2>
            </div>

            <div className="container mx-auto px-4 lg:px-0 mt-10">
                <p className="text-lg leading-relaxed">
                    Have a question, suggestion, or just want to say hello? We would love to hear from you!
                    Feel free to reach out to us using the contact information below or fill out the form, and we will get back to you as soon as possible.
                </p>
                <div className="mt-8">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 worksans">Contact Information</h2>
                    <ul className="list-disc pl-4">
                        <li className="text-lg leading-relaxed">Email: info@bookvibe.com</li>
                        <li className="text-lg leading-relaxed">Phone: +8801458963472</li>
                        <li className="text-lg leading-relaxed">Address: 123 Street, Abc, Bd</li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 worksans">Send Us a Message</h2>
                    <form className="max-w-lg">
                        <div className="mb-4">
                            <label className="block text-lg font-medium mb-2">Your Name</label>
                            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-medium mb-2">Your Email</label>
                            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-lg font-medium mb-2">Message</label>
                            <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;