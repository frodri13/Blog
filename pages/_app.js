import '../styles/globals.css'
import Navbar from '../Components/Nav';
import { Toaster } from 'react-hot-toast';
import {UserContext} from '../lib/context';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <UserContext.Provider value={{user: {}, username: "Fabio"}}>
      <Navbar />
      <Component {...pageProps} />\
      <Toaster />
    </UserContext.Provider>
    </>
  );
}

export default MyApp
