import { useState } from "react";
import up from "../assets/up.svg";
import down from "../assets/down.svg";
import styles from "../styleComponents/MyTable.module.css";
import { ShowData } from "./ShowData";
import { useDispatch, useSelector } from "react-redux";
import { sortData } from "../store/mydataSlice";

export const MyTable = () => {
  const [filterIndicator, setFilterIndicator] = useState({
    id: false,
    firstName: false,
    lastName: false,
  });
  const search = useSelector((state) => state.mydata.search);
  const dataToShow = useSelector((state) => state.mydata.pageData);
  const dispatch = useDispatch();

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th
              className={styles.myTh}
              onClick={() => {
                dispatch(sortData("id"));
                setFilterIndicator((old) => ({
                  ...old,
                  id: !filterIndicator.id,
                }));
              }}
            >
              id{" "}
              <img
                className={styles.myimg}
                src={filterIndicator.id ? up : down}
                alt="123"
              />
            </th>
            <th
              className={styles.myTh}
              onClick={() => {
                dispatch(sortData("firstName"));
                setFilterIndicator((old) => ({
                  ...old,
                  firstName: !filterIndicator.firstName,
                }));
              }}
            >
              firstName{" "}
              <img
                className={styles.myimg}
                src={filterIndicator.firstName ? up : down}
                alt="123"
              />
            </th>
            <th
              className={styles.myTh}
              onClick={() => {
                dispatch(sortData("lastName"));
                setFilterIndicator((old) => ({
                  ...old,
                  lastName: !filterIndicator.lastName,
                }));
              }}
            >
              lastName{" "}
              <img
                className={styles.myimg}
                src={filterIndicator.lastName ? up : down}
                alt="123"
              />
            </th>
            <th>email </th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {dataToShow
            .filter(
              (x) =>
                String(x.id).toLocaleLowerCase().includes(search) ||
                x.firstName.toLocaleLowerCase().includes(search) ||
                x.lastName.toLocaleLowerCase().includes(search) ||
                x.email.toLocaleLowerCase().includes(search) ||
                x.phone.toLocaleLowerCase().includes(search)
            )
            .map((unit) => (
              <ShowData key={unit.id + unit.firstName} data={unit} />
            ))}
        </tbody>
      </table>
    </div>
  );
};
