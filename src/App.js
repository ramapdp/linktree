import './Background.css';
import './App.css';

function App() {
  return (
    <div className='min-h-screen'>

      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>


      {/* Header Section */}
      <div className='flex flex-col justify-items-center items-center avatar py-3 mt-4 md:mt-3'>
        <div className="w-32 mask mask-squircle">
          <img src={require("./assets/profile.png")} />
        </div>
        <h1 className='mt-3 text-2xl font-semibold text-white'>Rama Pratama</h1>
      </div>

      {/* Main Section */}
      <div className='container-xxl front bottomSection p-0 d-flex flex-column align-items-center mt-8'>
        <ul className="menu bg-base-100 p-2 rounded-box w-10/12 md:w-1/2 mx-auto text-white">
          <li className='items-center my-1'>
            <a href='mailto:ramasatelit484@gmail.com' className='gmail w-full justify-center'>
              <img src={require("./assets/white-icons/Gmail.png")} className="w-7" />
              Contact me via Gmail
            </a>
          </li>
          <li className='items-center my-1'>
            <a href='https://www.linkedin.com/in/ramadhani-putra-difa-pratama-675544240/' className='linkedin w-full justify-center'>
              <img src={require("./assets/white-icons/LinkedIn.png")} className="w-7" />
              Connect with me
            </a>
          </li>
          <li className='items-center my-1'>
            <a href='https://github.com/ramapdp' className='github w-full justify-center'>
              <img src={require("./assets/white-icons/Github.png")} className="w-7" />
              View my repository
            </a>
          </li>
          <li className='items-center my-1'>
            <a href='https://wa.me/082331340423' className='whatsapp w-full justify-center'>
              <img src={require("./assets/white-icons/WhatsApp.png")} className="w-7" />
              Chat me via WhatsApp
            </a>
          </li>
          <li className='items-center my-1'>
            <a href='https://line.me/ti/p/d5AR1WKg_Z' className='line w-full justify-center'>
              <img src={require("./assets/white-icons/Line.png")} className="w-7" />
              Chat me via Line
            </a>
          </li>
          <li className='items-center my-1 disabled py-2 italic text-slate-500'>
            (some features coming soon)
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div>

      </div>

    </div>
  );
}

export default App;
