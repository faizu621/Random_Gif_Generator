
import Random from './components/Random';
import Tag from './components/Tag';
export default function App() {
  return <div className="background h-auto w-full relative flex flex-col items-center
  gap-y-10  ">
     <h1 className="w-11/12 mx-auto mt-[40px]  bg-white py-[8px] 
     text-center text-4xl font-bold rounded-lg">RANDOM GIFS</h1>
     <div className='w-full'>
     <Random/>
     </div>
    <Tag/>
  </div>;
}
