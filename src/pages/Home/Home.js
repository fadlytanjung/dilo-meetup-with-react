import React, { Component } from 'react';
import styles from './styles.module.css';
import ListItem from '../../components/ListItem';
import InputTodos from '../../components/InputTodos';

class Home extends Component { 

  constructor(props){
    super(props);
    this.state = {
      isOpen: [false,false,false],
      value: {},
      data : [
        {
          id:1,
          name: 'Todos 1',
          dropdown: false,
          status: 'todo',
        },
        {
          id:2,
          name: 'Todos 2',
          dropdown: false,
          status: 'todo',
        }
      ],
    }
    this._highValue = this._highValue.bind(this);
  }

  _highValue(obj){
    return obj.reduce((a, b) => obj[a] > obj[b] ? a : b);
  }

  _handleOpen(bool,idx){
    this.setState(
      prevState => {
        prevState.isOpen[idx] = bool
        return {
          ...prevState,
        };
      }
    );
  }

  _handleOpenDropdown(dropdown,id){
    this.setState( prevState=>{
      const newData = prevState.data.filter(el => el.id === id);
      const index = prevState.data.findIndex(el => el.id === id);
      
      prevState.data[index] = {...newData[0], dropdown:!dropdown } 
      return {
        ...prevState,
      };
    });
  }

  _handleSelectDropdown(select,id){
    this.setState(prevState => {
      const newData = prevState.data.filter(el => el.id === id);
      const index = prevState.data.findIndex(el => el.id === id);

      prevState.data[index] = { ...newData[0], dropdown: false, status: select.value };
      return {
        ...prevState,
      };
    });
  }

  _handleSubmit(type){
    this.setState({
      data:[...this.state.data,
        {
          id: this._highValue(this.state.data).id+1,
          name: this.state.value[type],
          dropdown: false,
          status:type,
        }
      ],
      value: {
        ...this.state.value, [type]: ''
      }
    });
  }

  _handleChange(e){
    this.setState({
      value: {
        ...this.state.value, [e.target.name]:e.target.value
      }
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
      {
        text: 'X',
        value: 'delete',
      },
    ];
    return(
      <div className="row m-0">
          {
            isOpen.map((item,id)=>{
              
              return (
                <div className="col-sm-4" key={id}>
                  <div className={styles['wrapper-card']}>
                  <h6>{status[id].text}</h6>
                  {
                    data.filter(el => el.status === status[id].value).map((item,idx)=>{
                      return (
                        <ListItem
                          key={idx}
                          isOpen={item.dropdown}
                          handleOpen={()=>this._handleOpenDropdown(item.dropdown,item.id)}
                          handleSelect={(e)=>this._handleSelectDropdown(e,item.id)}
                          item={item}
                          items={status} />
                      );
                    })
                  }
                  <InputTodos 
                    isOpen={item}
                    handleOpen={(e) => this._handleOpen(e,id)}
                    handleSubmit={() => this._handleSubmit(status[id].value)}
                    name={status[id].value}
                    value={this.state.value[status[id].value]}
                    handleChange={(e)=>this._handleChange(e)}
                    />
                </div>
              </div>
              );
            })
          }
      </div>
    );
  }
}

export default Home;