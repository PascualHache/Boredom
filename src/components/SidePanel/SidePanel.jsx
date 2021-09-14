import React from "react";
import { useSelector } from "react-redux";
import CardTask from "../CardTask/CardTask";
import { filterObjById } from "../utils";
import { SidePanelBox, SidePanelColumn } from "./SidePanel.style";

export default function SidePanel({ openFavs = false, toogleFavsView }) {
  const allBoredData = useSelector((state) => state.allData) || [];
  const favs = useSelector((state) => state.favs) || [];
  const favList =
    allBoredData.length &&
    favs.map((x) => {
      return filterObjById(allBoredData, x);
    });

  const handleSideBar = (e) => {
    //tricky solution to handle click out and close
    if (e.clientX < document.documentElement.clientWidth * 0.2) {
      toogleFavsView();
    }
  };
  return (
    <SidePanelBox open={openFavs} onClick={handleSideBar}>
      {openFavs && (
        <SidePanelColumn>
          <div onClick={toogleFavsView}>X</div>
          <div>Favourites</div>
          {!!favList.length && (
            <div>
              {favList.map((task) => (
                <CardTask key={task.id} data={task} />
              ))}
            </div>
          )}
        </SidePanelColumn>
      )}
    </SidePanelBox>
  );
}
