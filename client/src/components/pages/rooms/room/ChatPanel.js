import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  container: {
    bottom: 0
    // position: "fixed" // remove this so we can apply flex design
  },
  bubbleContainer: {
    width: '100%',
    display: 'flex'
  },
  bubble: {
    border: '0.5px solid black',
    borderRadius: '10px',
    margin: '5px',
    padding: '10px',
    display: 'inline-block'
  }
}));

const ChatPanel = props => {
  const classes = useStyles();
  const dummyData = [
    {
      message: '1: This should be left',
      direction: 'left'
    },
    {
      message: '2: This should be right',
      direction: 'right'
    },
    {
      message: '3: This should be left again',
      direction: 'left'
    },
    {
      message: '1: This should be left',
      direction: 'left'
    },
    {
      message: '2: This should be right',
      direction: 'right'
    },
    {
      message: '3: This should be left again',
      direction: 'left'
    },
    {
      message: '1: This should be left',
      direction: 'left'
    },
    {
      message: '2: This should be right',
      direction: 'right'
    },
    {
      message: '2: This should be right',
      direction: 'right'
    },
    {
      message: '3: This should be left again',
      direction: 'left'
    },
    {
      message: '1: This should be left',
      direction: 'left'
    },
    {
      message: '2: This should be right',
      direction: 'right'
    },
    {
      message: '3: This should be left again',
      direction: 'left'
    },
    {
      message: '4: This should be right again',
      direction: 'right'
    }
  ];
  const messages = props.messages;
  console.log(messages);

  const chatBubbles = dummyData.map((obj, i = 0) => (
    <div className={`${classes.bubbleContainer} ${obj.direction}`} key={i}>
      <div key={i++} className={classes.bubble}>
        <div className={classes.button}>{obj.message}</div>
      </div>
    </div>
  ));
  return <div className={classes.container}>{chatBubbles}</div>;
};

export default ChatPanel;
