import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {

    if (!this.props.book) {
      return (<h3>Choose a book</h3>)
    }

    return (
      <div>
        <h3>{this.props.book.title}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);