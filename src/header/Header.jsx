import React from 'react'
import Style from './Header.module.css';
import Audio from './audio/audio.mp3'

export const Header = () => {
  return (
    <div className={Style.header}>
      <audio src={Audio} controls></audio>
    </div>
    
  )
}

