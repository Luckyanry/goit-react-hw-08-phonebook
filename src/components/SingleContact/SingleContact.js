import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import "./SingleContact.css";

const SingleContact = ({ name, number, deleteContact }) => {
  return (
    <li className="Contact">
      <h4>{name}</h4>
      <p>{number}</p>
      <button className="DelBtn" type="button" onClick={deleteContact}>
        &#10008;
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);

  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteContact: () => dispatch(contactsOperations.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleContact);

SingleContact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};
