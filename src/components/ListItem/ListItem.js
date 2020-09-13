import React from 'react';
import styles from './styles.module.css';
import Dropdown from '../Dropdown';

function ListItem(props) {
  const { isOpen, handleOpen, handleSelect, items, text } = props;

  return (
    <div className={styles['list-card']}>
      <p>
        {text}
      </p>
      <Dropdown
        isOpen={isOpen}
        handleOpen={handleOpen}
        handleSelect={handleSelect}
        items={items} />
    </div>
  );

}

export default ListItem;