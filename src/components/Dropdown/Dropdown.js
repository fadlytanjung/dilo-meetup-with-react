import React from 'react';
import styles from './styles.module.css';


function Dropdown(props){
  const { isOpen, handleOpen, handleSelect, items } = props;
  
  return (
    <div className={styles['btn-dropdown']}>
      <span type="button" className="btn btn-primary dropdown-toggle" onClick={handleOpen}></span>
      <div className={['dropdown-menu',`${isOpen && 'show'}`].join(' ')}>
        {items.map((item)=>{
          return (<div className="dropdown-item" key={item.value} onClick={()=>handleSelect(item)}>{item.text}</div>);
        })}
      </div>
    </div>
          
  );
  
}

export default Dropdown;