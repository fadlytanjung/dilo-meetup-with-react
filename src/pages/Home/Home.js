import React, { Component } from 'react';
import styles from './styles.module.css';
import ListItem from '../../components/ListItem';

class Home extends Component { 

  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      data : [
        {
          name: 'Todos 1',
          dropdown: false,
          status: 'todo',
        },
        {
          name: 'Todos 2',
          dropdown: false,
          status: 'todo',
        }
      ]
    }
  }

  _handleOpen(bool){
    this.setState({ isOpen: bool });
  }

  _handleOpenDropdown(dropdown,idx){
    this.setState( prevState=>{ 
      prevState.data[idx].dropdown = !dropdown
      return {
        ...prevState,
      };
    });
  }

  _handleSelectDropdown(select,idx){
    this.setState(prevState => {
      prevState.data[idx].status = select.value
      prevState.data[idx].dropdown = false
      return {
        ...prevState,
      };
    });
  }

  render(){
    const { isOpen, data } = this.state;
    const status = [
      {
        text: 'Todo',
        value: 'todo',
      },
      {
        text: 'On Progress',
        value: 'onprogress',
      },
      {
        text: 'Done',
        value: 'done',
      },
    ];
    return(
      <div className="row m-0">
        <div className="col-sm-4">
          <div className={styles['wrapper-card']}>
            <h6>Todo</h6>
            {
              data.filter(el=>el.status==='todo').map((item,idx)=>{
                return (
                  <ListItem
                    key={idx}
                    isOpen={item.dropdown}
                    handleOpen={()=>this._handleOpenDropdown(item.dropdown,idx)}
                    handleSelect={(e)=>this._handleSelectDropdown(e,idx)}
                    text={item.name}
                    items={status} />
                )
              })
            }
            <div className={styles['new-todo']}>
              {!isOpen&&<div className={styles['button-new']} onClick={()=>this._handleOpen(true)}>
                + Add New
              </div>}
              {isOpen &&
              <>
                <textarea
                  className={styles['input-todos']}
                  name='input'
                  type='text'
                  placeholder='Enter Todos'
                  >    
                </textarea>
                <button className="btn btn-success">Add Todos</button>
                <span className={styles['close']} onClick={() => this._handleOpen(false)}>X</span>
              </>
              }
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className={styles['wrapper-card']}>
            <h6>On Progress</h6>
            {
              data.filter(el => el.status === 'onprogress').map((item, idx) => {
                return (
                  <ListItem
                    key={idx}
                    isOpen={item.dropdown}
                    handleOpen={() => this._handleOpenDropdown(item.dropdown, idx)}
                    handleSelect={(e) => this._handleSelectDropdown(e, idx)}
                    text={item.name}
                    items={status} />
                )
              })
            }
            <div className={styles['new-todo']}>
              {!isOpen && <div className={styles['button-new']} onClick={() => this._handleOpen(true)}>
                + Add New
              </div>}
              {isOpen &&
                <>
                  <textarea
                    className={styles['input-todos']}
                    name='input'
                    type='text'
                    placeholder='Enter Todos'
                  >
                  </textarea>
                  <button className="btn btn-success">Add Todos</button>
                  <span className={styles['close']} onClick={() => this._handleOpen(false)}>X</span>
                </>
              }
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className={styles['wrapper-card']}>
            <h6>Done</h6>
            {
              data.filter(el => el.status === 'done').map((item, idx) => {
                return (
                  <ListItem
                    key={idx}
                    isOpen={item.dropdown}
                    handleOpen={() => this._handleOpenDropdown(item.dropdown, idx)}
                    handleSelect={(e) => this._handleSelectDropdown(e, idx)}
                    text={item.name}
                    items={status} />
                )
              })
            }
            <div className={styles['new-todo']}>
              {!isOpen && <div className={styles['button-new']} onClick={() => this._handleOpen(true)}>
                + Add New
              </div>}
              {isOpen &&
                <>
                  <textarea
                    className={styles['input-todos']}
                    name='input'
                    type='text'
                    placeholder='Enter Todos'
                  >
                  </textarea>
                  <button className="btn btn-success">Add Todos</button>
                  <span className={styles['close']} onClick={() => this._handleOpen(false)}>X</span>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;