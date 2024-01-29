import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { IconButton } from '@mui/material';

export default function Sidebar() {
  return (
    <div className='bg-slate-300 p-3 flex justify-between h-[10vh]'>
      <div >
        <p>Textutilis</p>
      </div>
      <div className='flex gap-9'>
        <IconButton>
        <HomeIcon/>
        </IconButton>
        <IconButton>
        <InfoIcon/>
        </IconButton>
        <IconButton>
        <LocalPhoneIcon/>
        </IconButton>
        
      </div>
      
    </div>
  )
}
