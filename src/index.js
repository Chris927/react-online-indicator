import React from 'react';
import { EventEmitter } from 'fbemitter';

const emitter = new EventEmitter();
const store = {
  addListener: function(l) {
    return emitter.addListener('change', l);
  },
  isOnline: function() {
    return navigator.onLine;
  }
};

function _listener() {
  emitter.emit('change');
}

window.addEventListener('online', _listener);
window.addEventListener('offline', _listener);

function getState() {
  return { isOnline: store.isOnline() };
}

class Indicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = getState();
  }
  componentDidMount() {
    this.onChange = () => {
      this.setState(getState());
    };
    this.token = store.addListener(this.onChange);
  }
  componentWillUnmount() {
    this.token.remove();
  }
  render() {
    const indicator = this.state.isOnline ? 'class-online' : 'class-offline';
    return (
      <span className={ indicator }></span>
    )
  }
};

export default Indicator;
