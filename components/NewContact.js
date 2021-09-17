import InputMask from "react-input-mask";
import classes from "../styles/newContact.module.css";
import Image from "next/image";
import add from "../img/addUser.png";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsReducer";
import { useState } from "react";

const NewContact = () => {
  const dispatch = useDispatch();

  const [newContact, setNewContact] = useState({
    id: "",
    name: "",
    phone: "",
    city: "",
  });
  const [error, setError] = useState(false);

  const onHandleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNewContact({ ...newContact, id: Date.now(), [name]: value });
  };

  const onAddClick = () => {
    if (
      newContact.name.trim() === "" ||
      newContact.phone.trim() === "" ||
      newContact.city.trim() === ""
    ) {
      setError(true);
    } else {
      let newContactCopy = JSON.parse(JSON.stringify(newContact));
      dispatch(addContact(newContactCopy));
      setError(false);
      setNewContact({
        id: "",
        name: "",
        phone: "",
        city: "",
      });
    }
  };

  return (
    <div className={classes.newContactContainer}>
      <div className={classes.newContact}>
        <div className={classes.newName}>
          Name:
          <div>
            <input
              name="name"
              value={newContact.name}
              onChange={onHandleChange}
            />
          </div>
        </div>

        <div className={classes.newPhone}>
          Phone:
          <div>
            <InputMask
              mask={"+7(999)999-99-99"}
              name="phone"
              value={newContact.phone}
              onChange={onHandleChange}
            ></InputMask>
          </div>
        </div>

        <div className={classes.newCity}>
          City:
          <div>
            <input
              name="city"
              value={newContact.city}
              onChange={onHandleChange}
            />
          </div>
        </div>
      </div>

      <div className={classes.img}>
        <Image src={add} alt="addUser" onClick={onAddClick} />
      </div>

      <div className={error ? classes.hasError : classes.noError}>
        Fill in all the fields
      </div>
    </div>
  );
};

export default NewContact;
