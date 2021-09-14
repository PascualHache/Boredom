import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckBox } from "../../components/CheckBox";
import NavBar from "../../components/NavBar/NavBar";
import SidePanel from "../../components/SidePanel/SidePanel";
import Table from "../../components/Table/Table";
import {
  startFetchBoredData,
  getRandomTask,
  setFavs,
  getFavs,
} from "../../redux/actions/bored.action";
import { AiFillHeart } from "react-icons/ai";
import { GiMagickTrick } from "react-icons/gi";
import { ImShuffle } from "react-icons/im";
import { LayoutDasboardView, TopTableMenu } from "./LayoutDashboard.style";
import ModalBox from "../../components/ModalBox/ModalBox";

export default function LayoutDashboard() {
  const dispatch = useDispatch();
  const allBoredData = useSelector((state) => state.allData);
  const randomTask = useSelector((state) => state.randomTask) || [];
  const favs = useSelector((state) => state.favs) || [];

  const [openFavs, setOpenFavs] = useState(false);
  const [openRandom, setOpenRandom] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const toogleFavsView = () => {
    setOpenFavs(!openFavs);
  };

  const getNewRandomTask = () => {
    dispatch(getRandomTask());
    setOpenRandom(!openRandom);
  };

  const addFavs = () => {
    if (areRowSelected) {
      const arrFavs = getBoredIdsByRowIds(selectedRowKeys);
      dispatch(setFavs(arrFavs));
    }
  };

  const getNewData = () => {
    dispatch(startFetchBoredData());
  };

  useEffect(() => {
    dispatch(startFetchBoredData());
    dispatch(getFavs());
  }, [dispatch]);

  useEffect(() => {
    const rowIds = getRowIdsByBoredIds(favs);
    const buildObjIds = buildCheckBoxObj(rowIds);
    setSelectedRows(buildObjIds);
  }, [allBoredData, favs]);

  const areRowSelected = Object.keys(selectedRows).length !== 0;
  const columns = React.useMemo(
    () => [
      {
        id: "selection",
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row }) => (
          <div>
            <CheckBox type="checkbox" {...row.getToggleRowSelectedProps()} />
          </div>
        ),
      },
      {
        Header: "Activity name",
        accessor: "activity",
      },
      {
        Header: "Participants",
        accessor: "participants",
      },
      {
        Header: "Kind",
        accessor: "type",
      },
      {
        Header: "Price",
        accessor: "price",
      },
    ],
    []
  );

  const dataMappedToTable = React.useMemo(() => {
    return allBoredData.map((el) => {
      // const trimmedId = el.id.trim() HAY UN ID EN MEDITATE QUE TIENE UN ESPACIO AL LORO
      return Object.assign(
        {},
        {
          id: el.id,
          activity: el.activity,
          participants: el.participants,
          type: el.type,
          price: el.price,
        }
      );
    });
  });

  const getBoredIdsByRowIds = (arr) => {
    const filteredArr = arr.filter((el) => el !== "-1");
    return filteredArr.length > 0
      ? filteredArr.map((n) => allBoredData[n]["id"])
      : [];
  };

  const getRowIdsByBoredIds = (ids) => {
    return ids.map((n) => allBoredData.findIndex((el) => el.id === n));
  };

  const buildCheckBoxObj = (arrIds) => {
    let obj = {};
    arrIds.map((x) => (obj[x] = true));
    return obj;
  };

  const selectedRowKeys = selectedRows && Object.keys(selectedRows);

  return (
    <>
      <NavBar toogleFavsView={toogleFavsView} />
      <SidePanel openFavs={openFavs} toogleFavsView={toogleFavsView} />
      {randomTask.length && (
        <ModalBox
          data={randomTask[0]}
          setOpenRandom={setOpenRandom}
          openRandom={openRandom}
        />
      )}
      <LayoutDasboardView>
        <TopTableMenu disabled={areRowSelected ? 1 : 0}>
          <span onClick={addFavs}>
            Set as favourite <AiFillHeart />
          </span>
          <span onClick={getNewRandomTask}>
            Get Random task <GiMagickTrick />
          </span>
          <span onClick={getNewData}>
            Get New data <ImShuffle />
          </span>
        </TopTableMenu>
        <Table
          columns={columns}
          data={dataMappedToTable}
          selectedRows={selectedRows}
          onSelectedRowsChange={setSelectedRows}
        />
      </LayoutDasboardView>
    </>
  );
}
