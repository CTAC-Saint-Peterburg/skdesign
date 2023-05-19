import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setData,
  setDataLengthRequest,
  setIsLoading,
  setPageData,
  updateBtn,
} from "../store/mydataSlice";

import { Myform } from "./Myform";
import { MyTable } from "./MyTable";
import { Search } from "./Search";
import { Pagination } from "./Pagination";
import { Detailded } from "./Detailed";
import { DataLengthSwitcher } from "./DataLengthSwitcher";

import styles from "../styleComponents/Main.module.css";

export const Main = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.mydata.isLoading);
  const dataLengthRequest = useSelector(
    (state) => state.mydata.dataLengthRequest
  );

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://www.filltext.com/?rows=${dataLengthRequest}&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`
      );
      let result = await response.json();
      dispatch(setData(result));
      dispatch(setIsLoading(false));
      dispatch(updateBtn(result.length));
      dispatch(setPageData({ currentPage: 0, pageLimit: 50 }));
    }
    getData();
  }, [dataLengthRequest]);

  return (
    <div>
      <DataLengthSwitcher />
      <div>
        <Search />
        {isLoading ? null : <Pagination />}
        <Myform />

        {isLoading ? (
          <h1 className={styles.pulsate}>Загрузка...</h1>
        ) : (
          <MyTable />
        )}
        <Detailded />
      </div>
    </div>
  );
};
