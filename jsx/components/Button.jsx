import React from 'react';
import StyleSheet from 'react-style';

const Style = StyleSheet.create({
  button: {
    display: 'inline-block',
    border: 'black solid 2px',
    margin: 5,
  },
  focussed: {
    backgroundColor: 'red'
  },
  notFocused: {
    backgroundColor: 'blue'
  }
});

var Button = React.createClass({

  render() {
    let focusStyle = Style.notFocused;
    if(this.props.focus) {
      focusStyle = Style.focussed;
    }
    return (
      <div styles={[Style.button, focusStyle]} ><span>{this.props.children}</span></div>
    );
  }

});

export default Button;
