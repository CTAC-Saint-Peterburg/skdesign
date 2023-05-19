import { setMoreDetailed } from "../store/mydataSlice";
import styles from "../styleComponents/ShowData.module.css";
import { useDispatch } from "react-redux";
export const ShowData = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <tr onClick={() => dispatch(setMoreDetailed(data.id))}>
      <td className={styles.id}>{data.id}</td>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
    </tr>
  );
};
