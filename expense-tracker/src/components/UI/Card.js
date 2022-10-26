import "./Card.css";

function Card(props) {
  // be aware of the space after 'card '
  const classes = "card " + props.className;
  // children prop automatically passed prop and containse content between opening and closing element
  return <div className={classes}>{props.children}</div>;
}

export default Card;
