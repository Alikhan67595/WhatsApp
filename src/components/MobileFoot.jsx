import React from 'react'
import MobileCompfooter from './MobileCompfooter.jsx'
import {
  CommunityUnFocus,
  CommunityFocus,
  PhoneFillicon,
  PhoneUnfill,
  StatusFillIcon,
  StatusUnfillIcon,
  ChatFocusIcon,
  ChatUnfocusIcon,
  SettingunFill,
  SettingsIcon,
  ChannelFillIcon,
  ChannelUnfillIcon

} from './Icons/Icons.jsx'

const MobileFoot = () => {
  return (
    <nav className='fixed bottom-0 z-100'>
        <div className='md:hidden flex w-screen bg-[#0b1014] justify-around items-center h-16 fixed bottom-0 left-0 z-50'>
        <MobileCompfooter to="/chats" title='Chats' activeIcon={<ChatFocusIcon />} inactiveIcon={<ChatUnfocusIcon /> } className="py-[3px] min-[425px]:py-[4px]" />
        <MobileCompfooter to="/status" title='Updates' activeIcon={<StatusFillIcon />} inactiveIcon={<StatusUnfillIcon /> } className="py-[3px] min-[425px]:py-[4px]" />
        <MobileCompfooter to="/communities" title='Communities' activeIcon={<CommunityFocus />} inactiveIcon={<CommunityUnFocus /> } className="min-[425px]:py-[2px]" />
        <MobileCompfooter to="/call" title='Call' activeIcon={<PhoneFillicon />} inactiveIcon={<PhoneUnfill /> } className="py-[2px] min-[425px]:py-[4px]" />
        </div>
      </nav>
  )
}

export default MobileFoot