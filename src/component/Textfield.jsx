import React, { useState } from 'react';

export default function Textfield(props) {
    const [text, settext] = useState("Enter ur text here");

    const uprcse = () =>{
     
      let newtext = text.toUpperCase();
      settext(newtext);
    }
    const lwrcse = () =>{
   
        let newtext = text.toLocaleLowerCase();
        settext(newtext);
    }
    const clr = () =>{
  
        let newtext = (" ");
        settext(newtext);
    }
    const onclck= (e) =>{
        settext(e.target.value);
    }

  return (
    <div className='bg-green-100 h-[90vh]'>
       
    <div className='py-6 mx-44'>
     <h1 className='text-3xl my-6'>{props.hiding}</h1> 
     <textarea value={text} onChange={onclck} cols="90" rows="10" className='bg-blue-300 border rounded-lg'></textarea>
     </div>
    {/*----------------------------------Button-------------------------------------------------*/}
     
    
    <div className='flex justify-center gap-4'>
    <button onClick={uprcse} className="bg-transparent hover:bg-blue-300 text-blue-900 font-semibold hover:text-black py-2 px-2 border border-blue-500 hover:border-transparent rounded">
  Uppar case
</button>
<button onClick={lwrcse} className="bg-transparent hover:bg-blue-300 text-blue-900 font-semibold hover:text-black py-2 px-2 border border-blue-500 hover:border-transparent rounded">
  Lower case
</button>

<button onClick={clr} className="bg-transparent hover:bg-blue-300 text-blue-900 font-semibold hover:text-black py-2 px-2 border border-blue-500 hover:border-transparent rounded">
  Clear
</button>
    </div>

    </div>
    
  )
}
