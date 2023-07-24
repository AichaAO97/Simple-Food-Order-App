import classes from './ContentArea.module.css';

export default function ContentArea(props) {
  return <div className={classes['content-area']}>{props.children}</div>;
}
