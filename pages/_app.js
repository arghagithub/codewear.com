import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import { useRouter } from 'next/router';
import Script from 'next/script'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});// It is an object
  const [subtotal, setSubtotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')));
        savecart(JSON.parse(localStorage.getItem('cart')));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, [])

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
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></Script>
    <Navbar cart={cart} addtocart={addtocart} removefromcart={removefromcart} savecart={savecart} clearcart={clearcart} subtotal={subtotal} />
    <Component cart={cart} addtocart={addtocart} removefromcart={removefromcart} savecart={savecart} clearcart={clearcart} subtotal={subtotal} buynow={buynow} {...pageProps} />
    <Footer />
  </>
}
