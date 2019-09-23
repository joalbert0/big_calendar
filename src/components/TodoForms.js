import React from 'react';
import {Component} from 'react';

class TodoForm extends Component {
    constructor () {
      super();
      this.state = {
        title: '',
        responsible: '',
        description: '',
        priority: 'low'
      };
      this.handleInputChange = this.handleInputChange.bind(this); //pertenece a este componente p cambiar state
      this.handleSubmit = this.handleSubmit.bind(this);     //necesario para poder acceder al this
    }
  
    handleSubmit(e) {  //enevto envio
      e.preventDefault();   //previene recargue pantalla
      this.props.onAddTodo(this.state);
      this.setState({
        title: '',
        responsible: '',
        description: '',
        priority: 'low'
      });
    }
  
    handleInputChange(e) {
      const {value, name} = e.target; //valores input y nombre 
      console.log(value, name);
      this.setState({   //set state de Todofrom
        [name]: value
      });
    }
  
    render() {
      return (
        <div className="card">
           <form onSubmit={this.handleSubmit} className="card-body">  {/* on submit boton de envio de form */}
            <div className="form-group">
              <input
                type="text"
                name="title"
                className="form-control"
                value={this.state.title}
                onChange={this.handleInputChange}
                placeholder="Title"
                />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="responsible"
                className="form-control"
                value={this.state.responsible}
                onChange={this.handleInputChange}
                placeholder="Responsible"
                />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="description"
                className="form-control"
                value={this.state.description}
                onChange={this.handleInputChange}
                placeholder="Description"
                />
            </div>
            <div className="form-group">
              <select
                  name="priority"
                  className="form-control"
                  value={this.state.priority}
                  onChange={this.handleInputChange}
                >
                <option>low</option>
                <option>medium</option>
                <option>high</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      )
    }
  
  }