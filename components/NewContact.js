
import classes from '../styles/newContact.module.css'
import Image from 'next/image'
import add from '../img/addUser.png'
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsReducer';
import { useState } from 'react';

const NewContact = () => {

  const dispatch = useDispatch()

  const [newContact, setNewContact] = useState({
    id: '',
    name: '',
    phone: '',
    city:''
  })

  const onHandleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNewContact({ ...newContact, id:Date.now(), [name]: value });
  }

  const onAddClick = () => {
    let newContactCopy = JSON.parse(JSON.stringify(newContact))
    dispatch(addContact(newContactCopy))
    setNewContact({
      id: '',
      name: '',
      phone: '',
      city:''});
  }

  return (
    <div className={classes.newContactContainer}>
      <div className={classes.newContact}>   
        
          <div className={classes.newName}>Name: 
            <div>
              <input name="name" value={newContact.name} onChange={onHandleChange}/>
            </div>
          </div>

          <div className={classes.newPhone}>Phone:
            <div>
              <input type="tel" name="phone" value={newContact.phone} onChange={onHandleChange}/>
            </div>
          </div>

          <div className={classes.newCity}>City: 
            <div>
              <input name="city" value={newContact.city} onChange={onHandleChange}/>
            </div>
          </div>     
      </div>
      
      <div className={classes.img}>
        <Image 
          src={add}
          alt='addUser'
          onClick={onAddClick}
        />
      </div>
      
    </div>
  );
}

export default NewContact;
