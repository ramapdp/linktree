import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className=''>

      {/* Header Section */}
      <div className='flex flex-col justify-items-center items-center mt-4 md:mt-3'>
        <img className='image mx-auto rounded-full border-4 border-black' src={require("./assets/profile.png")} alt='My Profile Pictures'/>
        <h1 className='mt-3 text-2xl font-semibold'>Rama Pratama</h1>
      </div>

    </div>
  );
}

export default App;
