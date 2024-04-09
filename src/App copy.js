import MainNav from "./components/MainNav";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <MainNav />
      <Header />
      <section className="container flex flex-col justify-center items-center w-full">
        <h1 className='text-center text-3xl text-red-500 py-10 font-grotesk font-bold'>Why Choose Our AI-Powered Chatbot?</h1>
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
      </section>
      <section className="flex flex-col justify-center items-center max-w-xl">
        <h1 className='text-center text-3xl text-red-500 py-10 font-grotesk font-bold'>How The Chatbot Works</h1>
        <div className="grid grid-cols-2 justify-center items-center gap-10">
          <div className="flex gap-2.5">
            <div className='flex flex-col'>
              <h2 className="text-2xl">
                Ask Your Question
              </h2>
              <p className="font-sm">Simply type in your question or topic of interest, and Canadian Immigration ChatBot will provide you with the information you need.</p>
            </div>
          </div>
          <img src="/canadian-flag-icon-pin.jpg" alt="flag-pin" class="w-full rounded-lg" />
          <img src="/flag-of-canada-with-passport.jpg" alt="flag-passport" class="w-full rounded-lg" />
          <div className="flex gap-2.5">
            <div className='flex flex-col'>
              <h2 className="text-2xl">
                Guided Assistance
              </h2>
              <p className="font-sm">Simply type in your question or topic of interest, and the ChatBot will provide you with the information you need.</p>
            </div>
          </div>
          <div className="flex gap-2.5">
            <div className='flex flex-col'>
              <h2 className="text-2xl">
                Latest Updates
              </h2>
              <p className="font-sm">Stay informed about any changes in immigration policies or procedures through Canada Immigration ChatBot’s real-time updates.</p>
            </div>
          </div>
          <img src="/toronto-city-skyline.jpg" alt="toronto-skyline" class="w-full rounded-lg" />
          <img src="/beautiful-view.jpeg" alt="beautiful-view" class="w-full rounded-lg" />
          <div className="flex gap-2.5">
            <div className='flex flex-col'>
              <h2 className="text-2xl">
                Document Assistance
              </h2>
              <p className="font-sm">Need to fill out a form? Our chatbot can help you navigate the forms, ensuring accurate completion.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;