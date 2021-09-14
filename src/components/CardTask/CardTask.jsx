import React, { useState } from "react";
import { deleteFavs, addFav } from "../../redux/actions/bored.action";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { CardFooter, CardTaskBox, CardTaskTitle } from "./CardTask.style";

export default function CardTask({ data }) {
  const {
    id = "",
    activity = "",
    accessibility = "",
    type = "",
    participants = "",
    price = "",
    imageUrl = "",
  } = data;
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favs) || [];
  const [loaded, setLoaded] = useState(false);
  const isFav = favs.includes(id);

  const deleteFav = () => {
    dispatch(deleteFavs(id));
  };

  const addingFav = () => {
    dispatch(addFav(id));
  };

  return (
    <CardTaskBox>
      {loaded && <span>{participants} </span>}
      {loaded && <BsFillPersonFill />}
      {loaded &&
        (isFav ? (
          <AiFillHeart onClick={deleteFav} />
        ) : (
          <AiOutlineHeart onClick={addingFav} />
        ))}
      <img src={imageUrl} alt={id} key={id} onLoad={() => setLoaded(true)} />
      {loaded && <CardTaskTitle>{activity}</CardTaskTitle>}
      {loaded && (
        <CardFooter>
          <span> {type} </span>
          <div>
            <span>Accessibility: {accessibility} </span>
            <span>Price: {price} </span>
          </div>
        </CardFooter>
      )}
    </CardTaskBox>
  );
}
