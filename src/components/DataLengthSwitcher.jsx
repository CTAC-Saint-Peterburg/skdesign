import { useDispatch, useSelector } from "react-redux";
import { setDataLengthRequest, setIsLoading } from "../store/mydataSlice";

import styles from "../styleComponents/DataLengthSwitcher.module.css";

export const DataLengthSwitcher = () => {
  const dispatch = useDispatch();
  const dataLengthRequest = useSelector(
    (state) => state.mydata.dataLengthRequest
  );
  return (
    <div className={styles.main}>
      <button
        className={styles.buttons}
        onClick={() => {
          if (dataLengthRequest !== 50) {
            dispatch(setDataLengthRequest(50));
            dispatch(setIsLoading(true));
          }
        }}
      >
        50 строк
      </button>
      <button
        className={styles.buttons}
        onClick={() => {
          dispatch(setDataLengthRequest(1000));
          dispatch(setIsLoading(true));
        }}
      >
        1000 строк
      </button>
    </div>
  );
};
