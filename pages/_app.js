import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import { useRouter } from 'next/router';
import Script from 'next/script'
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component, pageProps }) {
  const [progress,setProgress]=useState(0);
  const [cart, setCart] = useState({});// It is an object
  const [subtotal, setSubtotal] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart',()=>{
      setProgress(40);
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100);
    })
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')));
        savecart(JSON.parse(localStorage.getItem('cart')));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
    let token = localStorage.getItem('logintoken');
    if (token) {
      setUser({ value: token });
      setKey(Math.random());
    }
  }, [router.query])

  const addtocart = (itemcode, qty, price, name, size, variant) => {
    let newcart = cart;
    if (itemcode in cart) {
      newcart[itemcode].qty = newcart[itemcode].qty + qty;
    }
    else {
      newcart[itemcode] = { qty: 1, price, name, size, variant };
    }
    setCart(newcart);
    savecart(newcart);
    toast.info('Item is added to cart!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  const removefromcart = (itemcode, qty, price, name, size, variant) => {
    let newcart = cart;
    if (itemcode in cart) {
      newcart[itemcode].qty = newcart[itemcode].qty - qty;
    }
    if (newcart[itemcode].qty <= 0) {
      delete newcart[itemcode]
    }
    setCart(newcart);
    savecart(newcart);
  }
  const savecart = (mycart) => {
    localStorage.setItem('cart', JSON.stringify(mycart));
    let subt = 0;
    let keys = Object.keys(mycart);
    for (let index = 0; index < keys.length; index++) {
      subt += mycart[keys[index]].price * mycart[keys[index]].qty;
    }
    setSubtotal(subt);
  }
  const clearcart = () => {
    setCart({});//exact oi moment change nao hote pare
    savecart({});
    console.log("Your cart has benn cleared");
  }

  const buynow = (itemcode, qty, price, name, size, variant) => {
    let newcart = { itemcode: { qty: 1, price, name, size, variant } };
    setCart(newcart);
    savecart(newcart);
    router.push('/Check');
  }
  const logout = () => {
    localStorage.removeItem('logintoken');
    setKey(Math.random());
    setUser({ value: null });
    toast.info("Successfullt logged out", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setTimeout(() => {
      router.push('/Login');
    }, 1000);
  }
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></Script>
    <Navbar logout={logout} key={key} user={user} cart={cart} addtocart={addtocart} removefromcart={removefromcart} savecart={savecart} clearcart={clearcart} subtotal={subtotal} />
    <LoadingBar
      color='red'
      height={4}
      waitingTime={400}
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
    <ToastContainer position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <Component cart={cart} addtocart={addtocart} removefromcart={removefromcart} savecart={savecart} clearcart={clearcart} subtotal={subtotal} buynow={buynow} {...pageProps} />
    <Footer />
  </>
}
