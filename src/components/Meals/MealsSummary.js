import classes from './MealsSummary.module.css';

const MealsSummary = () =>{
   return (
    <section className={classes.summary}>
        <h2>Good Food Delivered to you!</h2>
        <p>
            Get your Food! We offer a nice Selection of generic dishes.
        </p>
        <p>
            Nothing special, but hey its cheap and gets the job done!
        </p>
    </section>
   )
};

export default MealsSummary;