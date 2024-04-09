import MainNav from "./components/MainNav";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <MainNav />
      <Header />
      <section className="container flex flex-col justify-center items-center w-full py-10">
        <div className="flex flex-col gap-10">
          <h1 className='text-center text-3xl text-red-500 font-grotesk font-bold'>Why Choose Our AI-Powered Chatbot?</h1>
          <div className="flex flex-row justify-center gap-5 flex-wrap">
            <div className="flex flex-col md:flex-row gap-5">
              <Card img="/24-hours-icon.png" title="Instant Answers" content="The ChatBot provides instant responses to your queries, ensuring you get the information you need when you need it." />
              <Card img="/cost-saving-icon.png" title="Our Accuracy" content="AI-powered chatbot is designed to provide accurate and up-to-date information based on the latest Canadian immigration guidelines and regulations. " />
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <Card img="/response-icon.png" title="Accessibility" content="The ChatBot is available anytime, anywhere, making it convenient for you to access information on immigration and related matters. " />
              <Card img="/cost-saving-icon-1.png" title="User-Friendly" content="We’ve created an intuitive and user-friendly interface to ensure that you can navigate complex immigration topics effortlessly. " />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center bg-gray-700 w-screen py-10 px-10">
        <div className="flex flex-col gap-10 max-w-7xl md:max-w-xl lg:max-w-7xl text-gray-200">
          <h1 className='text-center text-3xl text-red-500 font-grotesk font-bold'>How The Chatbot Works</h1>
          <div className="grid lg:grid-cols-2 justify-center items-center gap-10">
            {/* col 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col gap-2.5">
                <h2 className="text-2xl font-bold whitespace-nowrap">
                  1. Ask Your Question
                </h2>
                <p className="font-sm">Simply type in your question or topic of interest, and Canadian Immigration ChatBot will provide you with the information you need.</p>
              </div>
              <img src="/canadian-flag-icon-pin.jpg" alt="flag-pin" class="hidden w-full rounded-lg md:block" />
              <img src="/flag-of-canada-with-passport.jpg" alt="flag-passport" class="hidden w-full rounded-lg md:block" />
              <div className="flex flex-col gap-2.5">
                <h2 className="text-2xl font-bold whitespace-nowrap">
                  3. Latest Updates
                </h2>
                <p className="font-sm">Stay informed about any changes in immigration policies or procedures through Canada Immigration ChatBot’s real-time updates.</p>
              </div>
            </div>
            {/* col 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col gap-2.5">
                <h2 className="text-2xl font-bold whitespace-nowrap">
                  2. Guided Assistance
                </h2>
                <p className="font-sm">Simply type in your question or topic of interest, and the ChatBot will provide you with the information you need.</p>
              </div>
              <img src="/canadian-flag-icon-pin.jpg" alt="flag-pin" class="hidden w-full rounded-lg md:block" />
              <img src="/flag-of-canada-with-passport.jpg" alt="flag-passport" class="hidden w-full rounded-lg md:block" />
              <div className="flex flex-col gap-2.5">
                <h2 className="text-2xl font-bold whitespace-nowrap">
                  4. Document Assistance
                </h2>
                <p className="font-sm">Need to fill out a form? Our chatbot can help you navigate the forms, ensuring accurate completion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col py-10 px-10">
        <div className="flex max-w-3xl flex-col gap-5">
          <h1 className='text-center text-3xl text-red-500 font-grotesk font-bold'>Try It Yourself (Bottom Right) & Start Your Immigration Journey Today</h1>
          <p className="text-center text-sm">Canadian Immigration ChatBot is here to empower you with knowledge and support on your immigration journey. Whether you’re a newcomer to Canada or seeking to navigate the complex world of immigration, we’ve got you covered.</p>
          <p className="text-center text-sm">Take the first step towards a smoother immigration experience – start chatting with our ChatBot now! If you have any questions or need assistance, we’re just a message away. Your immigration goals are our top priority.</p>
          <p className="text-center text-sm font-bold">Ready to get started? Click below to begin your nonprofit success journey with our chatbot!</p>
          <div className="flex flex-row items-center gap-2.5">
            <button className="bg-red-500 text-white py-2 px-5 rounded-lg flex-grow-0">More Info</button>
            <div className="flex flex-row gap-1.5">
              <p className="text-center text-sm font-bold">Call Now: (609) - 318 - 0951</p>
              <span><img src="/phone.svg" alt="phone" className="w-5" /></span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center py-10 px-10 w-screen bg-red-500">
        <div className="flex flex-row items-center max-w-xl gap-5 text-gray-200">
          <img src="/Ideal-Logo-White-1-3-1.png" alt="Logo" className="w-auto h-[150px]" />
          <div className="flex flex-col gap-5">
            <p className="text-center text-sm">This is a demo page to share what AI (Artificial Intelligence) can do for a business
              Initiative of Ideal Institute of Technology</p>
            <p className="text-center text-sm mt-auto">We do what we teach
              Work you provide changes lives</p>
          </div>
        </div>
      </section>
      <section className="h-48">
        <div className="flex flex-col justify-center items-center gap-2.5 py-5">
          <h1 className='text-center text-3xl font-grotesk font-bold'>Need AI power to grow your business? Contact now</h1>
          <button className="px-3 py-2 bg-red-500 rounded-lg text-white">Contact Us</button>
        </div>
      </section>
    </div>
  );
}

export default App;