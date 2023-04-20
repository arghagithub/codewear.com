import React, { useState } from 'react'
import { HiLockClosed } from 'react-icons/hi';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const onchange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    else if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
    else if (e.target.name === 'cpassword') {
      setCpassword(e.target.value);
    }
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    async function postJSON(data) {
      try {
        const response = await fetch("http://localhost:3000/api/signup", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log("Success:", result);
        toast.success('Account is created successfully', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } catch (error) {
        console.error("Error:", error);
        toast.error("Sorry,something went wrong", {
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
    }

    const data = { name: name, email: email, password: password };
    postJSON(data);

    setTimeout(() => {
      setName(''); setEmail(''); setPassword(''); setCpassword('');
    }, 1000);
  }
  return (
    <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <ToastContainer position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/logo.png"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/Login" className="text-decoration-none font-medium text-pink-600 hover:text-pink-500">
              Login in your account
            </Link>
          </p>
        </div>
        <form onSubmit={handlesubmit} className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="space-y-3 rounded-md">
            <div>
              <label htmlFor="name" className="sr-only">
                Name :
              </label>
              <input
                onChange={onchange}
                id="name"
                name="name"
                value={name}
                type="text"
                required
                className="relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                placeholder="Enter Your full name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                onChange={onchange}
                id="email-address"
                name="email"
                type="email"
                value={email}
                autoComplete="email"
                required
                className="relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only ">
                Password
              </label>
              <input
                onChange={onchange}
                id="password"
                name="password"
                value={password}
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="cpassword" className="sr-only ">
                Confirm Your Password
              </label>
              <input
                onChange={onchange}
                id="cpassword"
                name="cpassword"
                value={cpassword}
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                placeholder="Confirm your Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-600"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            {/* <div className="text-sm">
              <Link href="/Forgot" className="font-medium text-decoration-none text-pink-600 hover:text-pink-500">
                Forgot your password?
              </Link>
            </div> */}
          </div>

          <div>
            <button
              type="submit"
              disabled={password !== cpassword}
              className="group relative flex w-full justify-center rounded-md bg-pink-600 px-3 py-2 text-md font-semibold text-white hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <HiLockClosed className="h-5 w-5 text-pink-500 group-hover:text-pink-400" aria-hidden="true" />
              </span>
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
