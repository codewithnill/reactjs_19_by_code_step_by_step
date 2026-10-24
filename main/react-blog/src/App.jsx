import { Suspense } from 'react';
import { lazy, useState } from 'react';
// import UserForLazyLoading from './UserForLazyLoading'

const UserForLazyLoading = lazy(() => import('./UserForLazyLoading'));
function App() {
  

  const [load,setLoad]=useState(false);


  return (
    <div>
      
      <h1>Lazy loading in react</h1>
      {
        // load? <UserForLazyLoading />:null
        load? <Suspense fallback={<h3>loading....</h3>}><UserForLazyLoading /></Suspense> :null
      }
      <button onClick={()=>setLoad(true)} className="w-72 max-w-full rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Load User</button>
      

    </div>
  );
}




export default App;
