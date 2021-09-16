import InputMask from 'react-input-mask';
import classes from '../styles/contact.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact, changeValue } from './../redux/contactsReducer';
import Image from 'next/image'
import cross from '../img/delete.png';
import pen from '../img/pen.png';
import { useState } from 'react';

const Contact = (props) => {

  const dispatch = useDispatch()
  const [isEditingName, setIsEditingName] = useState(false)
  const [isEditingPhone, setIsEditingPhone] = useState(false)
  const [isEditingCity, setisEditingCity] = useState(false)

  const onChangeValue = (e) => {
    if (e.target.value) {
      dispatch(changeValue(props.id, e.target.value, e.target.name))
    }
    
  }

  return (
    <div className={classes.contactContainer}>
      <div className={classes.contact}>
        <div className={classes.name}>

          <div>
            Name: {isEditingName ? 
              <input name="name" autoFocus={true} onBlur={() => setIsEditingName(false)}  
              onChange={onChangeValue}/> :
              props.name}
          </div>
          <div>
            <Image 
              src={pen}
              alt="pen"
              width={18}
              height={18}
              onClick={() => setIsEditingName(true)}
            />
          </div>
        </div>

        <div className={classes.phone}>
          <div>
            Phone: {isEditingPhone ? 
              <InputMask name="phone" autoFocus={true} onBlur={() => setIsEditingPhone(false)} 
              onChange={onChangeValue} mask={'+7(999)999-99-99'}></InputMask> :
              props.phone}
          </div>
          <div>
            <Image 
              src={pen}
              alt="pen"
              width={18}
              height={18}
              onClick={() => setIsEditingPhone(true)}
            />
          </div>
        </div>

        <div className={classes.city}>
          <div>
            City: {isEditingCity ? 
              <input name="city" autoFocus={true} onBlur={() => setisEditingCity(false)} 
              onChange={onChangeValue}/> : 
              props.city}
          </div>
          <div>
            <Image 
              src={pen}
              alt="pen"
              width={18}
              height={18}
              onClick={() => setisEditingCity(true)}
            />
          </div>
        </div>
      </div>
      
        <div className={classes.delete}
          onClick={() => dispatch(deleteContact(props.id))}
        >
          <Image 
            src={cross}
            alt="cross"
          />
        </div>
        
      
    </div>
  );
}

export default Contact;
