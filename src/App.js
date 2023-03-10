import './App.css';

function App() {
  return (
    <div>
      
      <div className='flex justify-center items-center bg-gray-800'>
      <button className='text-white bg-blue-700 hover:bg-blue-600 border border-white focus:ring-4 font-medium rounded-md text-medium px-4 py-1 m-2'>
        Button
      </button>
      </div>
      <div className='flex justify-center items-center bg-gray-800'>
      <button className='text-white bg-indigo-600 hover:bg-indigo-500 border border-white focus:ring-4 font-medium rounded-md text-medium px-4 py-1 m-2'>
        Button
      </button>
      </div>
      <div className='flex justify-center items-center bg-gray-800'>
      <button className='text-white bg-fuchsia-600 hover:bg-fuchsia-500 border border-white focus:ring-4 font-medium rounded-md text-medium px-4 py-1 m-2'>
        Button
      </button>
      </div>
      <div className='flex justify-center items-center bg-gray-800'>
      <button className='text-black bg-yellow-400 hover:bg-yellow-300 border border-white focus:ring-4 font-medium rounded-md text-medium px-4 py-1 m-2'>
        Button
      </button>
      </div>
      <div className='flex justify-center items-center bg-gray-800'>
      <button className='text-white bg-red-600 hover:bg-red-500 border border-white focus:ring-4 font-medium rounded-md text-medium px-4 py-1 m-2'>
        Button
      </button>
      </div>
     
    
      <div className="mx-auto flex max-w-screen-sm items-center justify-center rounded-md m-3">
      <div className="h-36 w-full rounded-md bg-gradient-to-r from-red-600 via-yellow-500 via-fuchsia-500 via-violet-800 to-blue-700 p-1">
        <div className="flex h-full w-full items-center justify-center bg-slate-700 back">
          <div className='blob-one'></div>
          <h1 className="text-2xl font-black text-white m-2">Here is the nice box</h1>
          <div className = "border-slate-400 h-full border-r-2">
          </div>
          <h1 className="text-2xl font-black text-white m-2">Here is the nice box</h1>
        </div>
      </div>
    </div>

    <div className="mx-auto flex max-w-screen-sm items-center justify-center rounded-md m-3">
      <div className="h-36 w-full rounded-md bg-gradient-to-r from-red-600 via-yellow-500 via-fuchsia-500 via-violet-800 to-blue-700 p-1">
        <div className="flex h-full w-full items-center justify-center bg-slate-700 back">
          <div className='blob-holder'><div className='blob-two m-5'></div></div>
          <h1 className="text-2xl font-black text-white m-2">Here is the nice box</h1>
          <div className = "border-slate-400 h-full border-r-2">
          </div>
          <h1 className="text-2xl font-black text-white m-2">Here is the nice box</h1>
        </div>
      </div>
    </div>

    <div className='text-center'>
      <p className='text-white'>Hello!</p>
    </div>
      
    </div>
  );
}

export default App;