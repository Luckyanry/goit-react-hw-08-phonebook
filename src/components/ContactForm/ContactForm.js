import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import { addContact } from "../../redux/contacts/contactOperations";
import {
  filterSelector,
  itemsSelector,
} from "../../redux/contacts/contactsSelectors";
import "./ContactForm.css";

class ContactForm extends Component {
  formInitialState = {
    name: "",
    number: "",
  };

  state = {
    ...this.formInitialState,
    alert: false,
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  submitHandler = (e) => {
    const { name, number, alert } = this.state;
    e.preventDefault();

    const { contacts } = this.props;
    const isExists = contacts.find((contact) => contact.name === name);

    if (isExists) {
      this.toggleAlert(alert);
      return this.reset();
    }

    this.props.addContact(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ ...this.formInitialState });
  };

  toggleAlert = (status) => {
    this.setState({ alert: !status });
  };

  render() {
    const { name, number, alert } = this.state;
    const alertDelay = () => this.setState({ alert: !alert });

    return (
      <>
        <CSSTransition
          in={alert}
          classNames="Alert"
          timeout={1500}
          unmountOnExit
          onEntered={alertDelay}
        >
          <button
            onClick={this.toggleAlert}
            className="AlertBtn"
          >{`Contact already exists!`}</button>
        </CSSTransition>
        <form className="ContactsForm" onSubmit={this.submitHandler}>
          <label className="InputName">
            Name
            <br />
            <input
              className="InputForm"
              type="text"
              name="name"
              placeholder="Add name"
              value={name}
              onChange={this.inputHandler}
            />
          </label>
          <br />
          <label className="InputName">
            Number
            <br />
            <input
              className="InputForm"
              type="text"
              name="number"
              placeholder="Add phone number"
              value={number}
              onChange={this.inputHandler}
            />
          </label>
          <br />
          <button type="submit" className="SubmitBtn">
            Create contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: itemsSelector(state),
  filter: filterSelector(state),
});

const mapDispatchToProps = {
  addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      namber: PropTypes.string,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  addContact: PropTypes.func.isRequired,
};
