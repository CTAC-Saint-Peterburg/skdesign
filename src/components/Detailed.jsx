import { useSelector } from "react-redux";

import styles from "../styleComponents/Detailed.module.css";

export const Detailded = () => {
  const moreDetailed = useSelector((state) => state.mydata.moreDetailed);
  return (
    <div className={styles.main}>
      {moreDetailed === "" ? null : (
        <div className={styles.dataWrapper}>
          Выбран пользователь:{" "}
          <b className={styles.myB}>
            {moreDetailed[0].firstName + " " + moreDetailed[0].lastName}
          </b>
          Описание:
          <p>{moreDetailed[0]?.description}</p>
          Адрес проживания:{" "}
          <b className={styles.myB}>
            {moreDetailed[0]?.address?.streetAddress}
          </b>
          Город: <b className={styles.myB}>{moreDetailed[0]?.address?.city}</b>
          Провинция/штат:{" "}
          <b className={styles.myB}>{moreDetailed[0]?.address?.state}</b>
          Индекс: <b className={styles.myB}>{moreDetailed[0]?.address?.zip}</b>
        </div>
      )}
    </div>
  );
};
