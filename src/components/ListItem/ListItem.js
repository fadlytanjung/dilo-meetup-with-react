import React from 'react';
import styles from './styles.module.css';
import Dropdown from '../Dropdown';

function ListItem(props) {
  const { isOpen, handleOpen, handleSelect, items, item } = props;
  return (
    <div className={styles['list-card']}>
      <p className={item.status === 'done'? styles['line'] : ''}>
        {item.name}
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