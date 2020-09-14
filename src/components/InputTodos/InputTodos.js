import React from 'react';
import styles from './styles.module.css';

function InputTodos(props){

  const { isOpen, handleOpen, handleSubmit, handleChange, name, value } = props;
  
  return(
    <div className={styles['new-todo']}>
      {!isOpen
        && <div className={styles['button-new']} onClick={() => handleOpen(true)}>
        + Add New
        </div>}
      {isOpen &&
        <>
          <textarea
            className={styles['input-todos']}
            name={name}
            type='text'
            placeholder='Enter Todos'
            onChange={handleChange}
            value={value}
          >
          </textarea>
          <button className="btn btn-success" onClick={handleSubmit}>Add Todos</button>
          <span className={styles['close']} onClick={() => handleOpen(false)}>X</span>
        </>
      }
    </div>
  );
}

export default InputTodos;