import React, { Component } from "react";
import axios from "axios";
import update from "immutability-helper";

type Props = {};

interface ToDo {
  id: string;
  title: string;
  done: boolean;
};

type State = {
  toDoList: ToDo[];
  inputValue: string;
};

const axiosInstance = axios.create({baseURL: `http://${window.location.hostname}:${process.env.REACT_APP_RAILS_API_PORT}/api/v1`})

class ToDoListContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      toDoList: [],
      inputValue: "",
    };
  }

  loadToDoList = () => {
    axiosInstance
      .get('to_dos')
      .then((res) => {
        this.setState({ toDoList: res.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount = () => {
    this.loadToDoList();
  };

  handleChange = (e: any) => {
    this.setState({ inputValue: e.target.value });
  };

  createToDo = (e: any) => {
    if (e.key === "Enter" && !(e.target.value === "")) {
      axiosInstance
        .post('to_dos', { to_do: { title: e.target.value } })
        .then((res) => {
          const toDoList = update(this.state.toDoList, {
            $splice: [[0, 0, res.data]],
          });

          this.setState({
            toDoList: toDoList,
            inputValue: "",
          });
        })
        .catch((error) => console.log(error));
    }
  };

  updateToDo = (e: any, id: string) => {
    axiosInstance
      .put(`to_dos/${id}`, { to_do: { done: e.target.checked } })
      .then((res) => {
        const toDoListIndex = this.state.toDoList.findIndex(
          (x) => x.id === res.data.id
        );
        const toDoList = update(this.state.toDoList, {
          [toDoListIndex]: { $set: res.data },
        });
        this.setState({
          toDoList: toDoList,
        });
      })
      .catch((error) => console.log(error));
  };

  removeToDo = (id: string) => {
    axiosInstance
      .delete(`to_dos/${id}`)
      .then((res) => {
        const toDoListIndex = this.state.toDoList.findIndex((x) => x.id === id);
        const toDoList = update(this.state.toDoList, {
          $splice: [[toDoListIndex, 1]],
        });
        this.setState({
          toDoList: toDoList,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <div className="taskContainer">
        <input
          className="newTask"
          type="text"
          placeholder="Input a New Task and Press Enter"
          maxLength={75}
          onKeyPress={this.createToDo}
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        </div>
        <div className="wrapItems">
          <ul className="listItems">
            {this.state.toDoList.map((listItem: ToDo) => {
              return (
                <li className="item" key={listItem.id}>
                  <input
                    className="itemCheckbox"
                    type="checkbox"
                    checked={listItem.done}
                    onChange={(e) => this.updateToDo(e, listItem.id)}
                  />
                  <label className="itemDisplay">{listItem.title}</label>
                  <span
                    className="removeItemButton"
                    onClick={(e) => this.removeToDo(listItem.id)}
                  >
                    x
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ToDoListContainer;
