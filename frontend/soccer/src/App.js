import League from './League';
import Matches from './Matches';
import Navbar from './Navbar';
import News from './News';

function App() {
  return (
    <div className=' bg-secondary h-screen overflow-auto'>
      <Navbar />
      <div class='grid grid-cols-4 h-screen '>
        <div class='col-span-1 p-4'>
          <League />
        </div>
        <div class=' col-span-2 p-4'>
          <Matches />
        </div>
        <div class='col-span-1 p-4'>
          <News />
        </div>
      </div>
    </div>
  );
}

export default App;
