import classes from './ContentArea.module.css';
import mealsImage from '../../../images/meals.jpg';

export default function ContentArea(props) {
  return (
    <div className={classes['content-area']}>
      <img src={mealsImage} alt="meals_image" className={classes.img}></img>

      <div className={classes['background-filling']}></div>

      {props.children}
    </div>
  );
}
