import {IoHomeSharp} from 'react-icons/io5';
import {BsFillCartFill , BsList} from 'react-icons/bs';
import { appContext } from '../App';
import { useContext } from 'react';

const Footer = () => {
  const {setRoute} = useContext(appContext)
  return (
    <footer className="fixed h-16 w-full bg-sky-400 bottom-0 flex justify-evenly items-center">
      <div className="bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition" onClick={() => setRoute('Home')}>
          <IoHomeSharp />
      </div>
      <div className="bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition" onClick={() => setRoute('Shopping')}>
          <BsFillCartFill />
      </div>
      <div className="bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition list-route" onClick={() => setRoute('Tasklist')}>
          <BsList />
      </div>
    </footer>
  )
}

export default Footer
