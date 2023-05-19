import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../store/mydataSlice";

import styles from "../styleComponents/Search.module.css";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div className={styles.main}>
      <input
        type="text"
        placeholder="поиск"
        onChange={(e) => setInputValue(e.target.value.toLocaleLowerCase())}
      />
      <button onClick={() => dispatch(setSearch(inputValue))}>поиск</button>
    </div>
  );
};
