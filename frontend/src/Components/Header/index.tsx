import React from 'react'
import Button from '../Button'

const Header = () => {
  return (
    <div className='flex py-4 justify-between'>
      <span className='text-white font-bold italic'>BLOCkCHAIN</span>
      <ul className='flex item-center gap-4 text-white font-medium'>
        <li>Exchange</li>
        <li>Last Transactipon</li>
        <li>Invite Friend</li>
        <li>Notifcations</li>
      </ul>
      <div className='flex item-center gap-2 justify-betweet'>
        <Button className='border border-mainColor rounded-md text-white rounded-tl-md rounded-br-md' text='LOG IN' padding='p-1'/>
        <Button className='bg-mainColor text-white rounded-md rounded-tl-md rounded-br-md' text='SIGN UP' padding='p-1'/>
      </div>
    </div>
  )
}

export default Header
