import React ,{ useState } from 'react'
import hack_1 from './hacker_1.png'
export default function About() {

    const [value , setvalue] = useState(0);

    const increment = () =>{
        let finalval = value + 1;
        setvalue(finalval);
    }
    const decrement = () =>{
        let fianlval = value - 1;
        setvalue(fianlval);
    }
  return (
    <>
    <div className='flex m-9'>
       <div className=''>
        <h1 className='font-bold text-3xl p-5 '>Welcome</h1>
        <p className='p-5 '>This is About page</p>
       <p className='p-5 w-[35vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tempora. Numquam ea quas beatae non nostrum porro eligendi quia necessitatibus perferendis.</p>
     
     <div className='p-5 flex gap-5'>
     <button onClick={increment} className='text-white bg-black p-1'> + </button>
       <div>{value}</div>
       <button onClick={decrement} className='text-white bg-black p-1'>-</button>
     </div>
     

        </div> 
     <div className='m-9'>
     <img src={hack_1} alt="" />
     </div>
        
    </div>
    </>
  )
}
