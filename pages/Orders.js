import React,{useEffect} from 'react';
import { useRouter } from 'next/router'
import Order from '@/models/Order';
import mongoose from 'mongoose';
const Orders = () => {
  const router=useRouter();
  useEffect(()=>{
    if(!localStorage.getItem('logintoken')){
      router.push('/Login');
    }
  })
  return (
    <div className='container mx-auto my-3'>
      <h1 className='text-3xl text-center font-bold text-pink-500 my-3'>My Orders</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500 my-3">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                      #
                    </th>
                    <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                      First
                    </th>
                    <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                      Last
                    </th>
                    <th scope="col" className="px-6 py-4">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      1
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      Mark
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      Otto
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      2
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      Jacob
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      Thornton
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      3
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      WillSmith
                    </td>
                    <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                      TestGorilla
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

// export async function getServerSideProps(context) {
//   if (!mongoose.connections[0].readyState) { // if there is already a connection
//     await mongoose.connect(process.env.MONGO_URI);

//   }
//   let orders = await Order.find({});//sob order peye jabo
//   let colorsizeslug = {}; // {red:{xl:{'wear-the-code-xl'}}}

//   return {
//     props: { orders: JSON.parse(JSON.stringify(orders)) }// will be passed to the page component as props
//   }
// }
export default Orders
