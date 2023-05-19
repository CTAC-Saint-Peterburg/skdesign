import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearch, setPageData, setMoreDetailed } from "../store/mydataSlice";

import styles from "../styleComponents/Pagination.module.css";

export const Pagination = () => {
  const dispatch = useDispatch();
  const paginationButtons = useSelector((state) => state.mydata.buttons);
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className={styles.main}>
      {paginationButtons.map((x, index) => (
        <button
          className={
            currentPage === index
              ? `${styles.buttons} ${styles.active}`
              : styles.buttons
          }
          key={index}
          onClick={() => {
            setCurrentPage(index);
            dispatch(setPageData({ currentPage: index, pageLimit: 50 }));
            dispatch(setMoreDetailed(""));
            dispatch(setSearch(""));
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
