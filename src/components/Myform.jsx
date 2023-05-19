import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewObj, setSearch } from "../store/mydataSlice";

import styles from "../styleComponents/Myform.module.css";

export const Myform = () => {
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState(false);
  const [sendObjButton, setObjButton] = useState(true);
  const [addForm, setAddForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (Object.values(addForm).some((x) => x === "")) {
      setObjButton(true);
    } else {
      setObjButton(false);
    }
  }, [addForm]);

  return (
    <div className={styles.main}>
      <button className={styles.buttons} onClick={() => setOpenForm(!openForm)}>
        {openForm ? "скрыть" : "добавить"}
      </button>
      {openForm ? (
        <form
          className={styles.myform}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addNewObj(addForm));
            dispatch(setSearch(""));
          }}
        >
          <label className={styles.mylabel}>
            Введите id:
            <input
              type="number"
              onChange={(e) =>
                setAddForm((old) => ({ ...old, id: e.target.value }))
              }
            />
          </label>
          <label className={styles.mylabel}>
            Введите имя:
            <input
              type="text"
              value={addForm.firstName}
              onChange={(e) =>
                setAddForm((old) => ({
                  ...old,
                  firstName: e.target.value.replace(/[^a-zA-Z]/gi, ""),
                }))
              }
            />
          </label>
          <label className={styles.mylabel}>
            Введите фамилию:
            <input
              type="text"
              value={addForm.lastName}
              onChange={(e) =>
                setAddForm((old) => ({
                  ...old,
                  lastName: e.target.value.replace(/[^a-zA-Z]/gi, ""),
                }))
              }
            />
          </label>
          <label className={styles.mylabel}>
            Введите Email:
            <input
              type="email"
              onChange={(e) =>
                setAddForm((old) => ({ ...old, email: e.target.value }))
              }
            />
          </label>
          <label className={styles.mylabel}>
            Введите телефон:
            <input
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              placeholder="(xxx)xxx-xxxx"
              value={addForm.phone}
              minLength={10}
              maxLength={10}
              onChange={(e) =>
                setAddForm((old) => ({ ...old, phone: e.target.value }))
              }
            />
          </label>
          <button disabled={sendObjButton} type="submit">
            Добавить в таблицу
          </button>
        </form>
      ) : null}
    </div>
  );
};
