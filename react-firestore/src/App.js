import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const {title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, //Document snapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      boards
    });
  }
  //refreshes and shows changes when board collections update
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  render() {
    return (
      <div className="App">
        not something inaapropriate
      </div>
    );
  }
}

export default App;
