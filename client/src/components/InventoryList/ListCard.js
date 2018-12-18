import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ListCard extends Component {
  constructor() {
    super();
    this.delete = React.createRef();
    this.state = {
      deleteShowing: false
    };
  }
  render() {
    return (
      <React.Fragment>
        <tr>
          <td className="table__item-list--container">
            <Link className="table__item-list--link" key={this.props.id} to={`/inventory/${this.props.id}`}>
                 <p className="table__item-list--name">
                {" "}
                {this.props.name}{" "}
              </p>
            </Link>
            <p className="table__item-list--description">
              {" "}
              {this.props.smallDescription}{" "}
            </p>
          </td>
          <td className="table__item-list--container">
            {" "}
            {this.props.lastOrdered}{" "}
          </td>
          <td className="table__item-list--container">
            {" "}
            {this.props.address}{" "}
          </td>
          <td className="table__item-list--container">
            {" "}
            {this.props.quantity}{" "}
          </td>
          <td className="table__item-list--container">
            {" "}
            {this.props.instock ? ( <span>In Stock</span>
                ) : (
                  <span>Not In Stock</span>
                )}{" "}
          </td>
          <td
            className="table__item-list--container"
            onClick={() => {
              // console.dir(this.delete.current.style.display);
              if (!this.state.deleteShowing) {
                this.delete.current.style.display = "flex";
                this.setState({
                  deleteShowing: true
                });
              } else {
                this.delete.current.style.display = "none";
                this.setState({
                  deleteShowing: false
                });
              }
            }}
          >
            {" "}
            <img src="/assets/icons/Row Menu.svg" alt="menu icon"/>{" "}
          </td>
        </tr>
        <div
className="deleteModal"
ref={this.delete}
style={{ display: "none" }}
>
<div className="deleterow">
<Link to={`/inventory/${this.props.id}`}>View Product</Link>
</div>
<div className="deleterow">Replenish Stock</div>
<div
className="deleterow"
onClick={() => this.props.delete(this.props.id)}
>
Remove
</div>
</div>
      </React.Fragment>
    );
  }
}
