import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

class Modal extends Component {
  state = defaultState;

  handleChange = async(event) => {        
    const { name, value, pattern } = event.target;
    const regex = new RegExp(pattern);
    const isValid =  await regex.test(value);     
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: { value, isValid }
      }
    })
    this.validate()
  }

  validate = () => {
    const { fields } = this.state;
    const validation =  Object.keys(fields).reduce((a, c) => (fields[c].isValid ? ++a : a), 0);
    if(validation === 9) {
      this.setState({
        enabled: true
      });
    } else {
      this.setState({
        enabled: false
      });
    }
  }

  formSubmit = (event) => {
    event.preventDefault();  
    const { enabled, fields } = this.state;
    if(enabled) {
      this.setState(defaultState);
      this.props.handleClose();
      const warehouse = {
        id: fields.id.value,
        address: {
          street: fields.street.value,
          city: `${fields.city.value}, ${fields.country.value}`,
          postalCode: fields.postalCode.value
        },
        contact: {
          manager: fields.manager.value,
          phoneNumber: fields.phoneNumber.value,
          email: fields.email.value
        },
        inventoryType: fields.inventoryType.value,
        inventory: []
      }  
      const init = {
        method: 'POST',
        body: JSON.stringify(warehouse),
        headers: {
          'content-type': 'application/json'
        }
      };

      fetch("http://localhost:8080/warehouses", init)
        .then(() => {this.props.fetchWarehouses()})
        .catch(err => {
          console.log(err);
        });
    }    
  }
  
  submited = () => {    
    this.setState({
      submited: true
    })
  }

  render() {
    const { isOpen } = this.props;
    const { submited } = this.state;
    const { 
      id,
      street,
      city,
      country,
      postalCode,
      manager,
      phoneNumber,
      email, 
      inventoryType 
    } = this.state.fields;
    
    const flex = isOpen  => {
      return {
        position: 'fixed',
        display: isOpen ? 'flex' : 'none',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        backgroundColor: 'rgba(57,57,57,0.6)',
      }
    };

    return (
      <div style={{ ...flex(isOpen)}}>
        <div className="modal-layer" onClick={this.props.handleClose} />
        <div className="form-container">
          <button onClick={this.props.handleClose} className="form-container__close-button">
            <img className="form-container__close-icon" src="/Assets/Icons/Close.svg" alt="Close button" />
            <span className="form-container__close-text">close</span>
          </button>
          <h2 className="form-container__header">
            Add a new storage location
          </h2>
          <form className="form-container__form" onSubmit={event => this.formSubmit(event)}>
            <label className="form-container__label form-container__label--warehouse">
              <span className="form-container__label-header">
                Warehouse Name
              </span>
            <input className="form-container__input" type="text" name="id" value={id.value} onChange={(event) => {this.handleChange(event)}} placeholder="ex. 1" pattern="^[0-9]+" />
              {!id.isValid && submited && <span className="form-container__input-error">
                  Warehouse Number is required
                </span>}
            </label>
            <div className="form-container__info">
              <div className="form-container__sub-info">
                <h5 className="form-container__sub-header">Address</h5>
                <label className="form-container__label">
                  <span className="form-container__label-header">
                    Street Number & Name
                  </span>
                  <input className="form-container__input" type="text" name="street" value={street.value} onChange={(event) => {this.handleChange(event)}} placeholder="123 King St" pattern="^\d+\s[A-z]+\s[A-z]+" />
                  {!street.isValid && submited && <span className="form-container__input-error">
                      a street is required
                    </span>}
                </label>
                <label className="form-container__label">
                  <span className="form-container__label-header">City</span>
                  <input className="form-container__input" type="text" name="city" value={city.value} onChange={(event) => {this.handleChange(event)}} placeholder="Toronto" pattern="^(?!\s*$).+" />
                  {!city.isValid && submited && <span className="form-container__input-error">
                      a city is required
                    </span>}
                </label>
                <label className="form-container__label">
                  <span className="form-container__label-header">
                    Country
                  </span>
                  <select type="country" className="form-container__input form-container__input--select" name="country" size="1" value={country.value} onChange={(event) => this.handleChange(event)} pattern="^(?!\s*$).+">
                    <option value="">-- country --</option>
                    <option value="Canada">Canada</option>
                    <option value="USA">USA</option>
                    <option value="Japan">Japan</option>
                    <option value="Russia">Russia</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Uruguay">Uruguay</option>
                  </select>
                  {!country.isValid && submited && <span className="form-container__input-error">
                      a country is required
                    </span>}
                </label>
                <label className="form-container__label">
                  <span className="form-container__label-header">
                    Postal Code
                  </span>
                  <input className="form-container__input" type="text" name="postalCode" value={postalCode.value} onChange={(event) => this.handleChange(event)} placeholder="M6A 3P2" pattern="^[abceghjklmnprstvxyABCEGHJKLMNPRSTVXY][0-9][abceghjklmnprstvwxyzABCEGHJKLMNPRSTVWXYZ] {0,1}[0-9][abceghjklmnprstvwxyzABCEGHJKLMNPRSTVWXYZ][0-9]$" />
                  {!postalCode.isValid && submited && <span className="form-container__input-error">
                      a postal code is required
                    </span>}
                </label>
              </div>
              <div className="form-container__sub-info">
                <h5 className="form-container__sub-header">
                  Contact Information
                </h5>
                <label className="form-container__label">
                  <span className="form-container__label-header">
                    Warehouse Manager's Name
                  </span>
                  <input className="form-container__input" type="text" name="manager" value={manager.value} onChange={(event) => this.handleChange(event)} placeholder="Gary Smith" pattern="^(?!\s*$).+" />
                  {!manager.isValid && submited && <span className="form-container__input-error">
                      a name is required
                    </span>}
                </label>
                <label className="form-container__label">
                  <span className="form-container__label-header">
                    Phone Number
                  </span>
                  <input className="form-container__input" type="text" name="phoneNumber" value={phoneNumber.value} onChange={(event) => this.handleChange(event)} placeholder="416-123-4567" pattern="\+?1?\s*\(?-*\.*(\d{3})\)?\.*-*\s*(\d{3})\.*-*\s*(\d{4})$" />
                  {!phoneNumber.isValid && submited && <span className="form-container__input-error">
                      a phone number is required
                    </span>}
                </label>
                <label className="form-container__label">
                  <span className="form-container__label-header">
                    Email Address
                  </span>
                  <input className="form-container__input" type="email" name="email" value={email.value} onChange={(event) => this.handleChange(event)} placeholder="123@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                  {!email.isValid && submited && <span className="form-container__input-error">
                      a email address is required
                    </span>}
                </label>
                <label className="form-container__label">
                  <span className="form-container__label-header">
                    Inventory type
                  </span>
                  <select className="form-container__input form-container__input--select" name="inventoryType" size="1" value={inventoryType.value} onChange={(event) => this.handleChange(event)} pattern="/^(?!\s*$).+/i">
                    <option value="">Paper, Plants</option>
                    <option value="Records">Records</option>
                    <option value="Paper">Paper</option>
                    <option value="Plants">Plants</option>
                    <option value="Brainstation Classroom Items">
                      Brainstation Classroom Items
                    </option>
                  </select>
                  {!inventoryType.isValid && submited && <span className="form-container__input-error">
                      a inventory type is required
                    </span>}
                </label>
              </div>
            </div>
            <button onClick={() => this.submited()} className="form-container__save-location" type="submit">
              Save location
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const defaultState = {
  enabled: false,
  submited: false,
  fields: {
    id: {
      value: '',
      isValid: false
    },
    street: {
      value: '',
      isValid: false
    },
    city: {
      value: '',
      isValid: false
    },
    country: {
      value: '',
      isValid: false
    },
    postalCode: {
      value: '',
      isValid: false
    },
    manager: {
      value: '',
      isValid: false
    },
    phoneNumber: {
      value: '',
      isValid: false
    },
    email: {
      value: '',
      isValid: false
    },
    inventoryType: {
      value: '',
      isValid: false
    }
  }
}

export default Modal;

