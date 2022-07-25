import  ListItem  from '../listItem/ListItem'
import {  ArrowBackIosOutlined, ArrowForwardIosOutlined} from '@material-ui/icons'
import React from 'react'
import './list.scss'
import { useRef, useState } from "react";


function List({list}) {
  const [slideNumber ,setSlideNumber] = useState(0)
  const [isMoved , setIsMoved] = useState(false)
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

  const listRef = useRef()
  const handleClick = (direction) =>{
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50
    if(direction === "left" && slideNumber > 0){
      setSlideNumber(slideNumber - 1 )
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if(direction === "right" && slideNumber < 10 - clickLimit){
      setSlideNumber(slideNumber + 1 )
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }
  return (
    <div className='list'>
    <span className='listTitle'>{list.title}</span>
    <div className='wrapper'>
        <ArrowBackIosOutlined className='sliderArrow left'  onClick={() => handleClick("left")} 
          style={{display: !isMoved && 'none'}}
        />
         <div className='container' ref={listRef}>
           {list.content.map((item,i)=>(

            <ListItem index={i} item={item}/>

           ))}
           
  
         </div>
        <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick("right")}/>
    </div>
    </div>
  )
}

export default List