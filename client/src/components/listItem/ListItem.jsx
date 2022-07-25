import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function ListItem({ item  , index }) {
  const navigate = useNavigate();

  const toComponentB=()=>{
    navigate('/watch',{state:{movie}});
      }
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({}) 
  useEffect(() => {
    const getMovie =async () =>{
      try{
       const res = await axios.get("/movies/find/"+item ,{
        
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGMwMzZmOWQ2MDc1NGNmYWQ4MWY4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODYxMTE4MCwiZXhwIjoxNjU5MDQzMTgwfQ.UcZ8gIPYyLHRnLwLrcVilKTvIC2pwX64bsYHPLzn8uA"
          },
        
       });
       setMovie(res.data)
      } catch (err){
       console.log(err)
      }
    }
    getMovie()
  }, [item])
  

  return (

    <a onClick={()=>{toComponentB()}}>
   <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie?.imgSm} alt="" />
        {isHovered && (
          <>
            <video src={movie?.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie?.duration}</span>
              <span className="limit">+{movie?.limit}</span>
              <span>{movie?.year}</span>
            </div>
            <div className="desc">
               {movie?.desc}
            </div>
            <div className="genre">{movie?.genre}</div>
          </div>
        </>
      )}
    </div>   
    </a>

  );
}