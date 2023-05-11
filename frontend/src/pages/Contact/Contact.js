import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Search from '../../components/Search';
import contact from '../../images/contact.jpg';

const Contact = () => {
    return (
        <div className="h-full text-black bg-white">
            <Header />
            <div className="shadow-2xl my-12 mx-20 flex py-8">
                <div className="w-[50%]">
                    <img className="m-auto" src={contact} alt="contact" />
                </div>
                <div className="px-8 flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label>Fullname</label>
                        <input
                            className="rounded-md border-2 border-blue-400 px-3 py-3"
                            type="text"
                            placeholder="Fullname"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Email</label>
                        <input
                            className=" rounded-md border-2 border-blue-400 px-3 py-3"
                            type="text"
                            placeholder="abc@gmail.com"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Message</label>
                        <textarea
                            placeholder="Type your message"
                            className="border-2 border-blue-400 px-3 py-3 rounded-md h-[200px]"
                            rows="4"
                            cols="50"
                        ></textarea>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
