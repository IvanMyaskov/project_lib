import styles from './comments.module.scss';
function Form () {
    return (
        <div className={styles.form}>
            <h2>Leave a comment</h2>
            <input type="text" name="name" placeholder="Your name" />
            <input type="email" name="email" placeholder="Your email" />
            <input type="text" name="message" placeholder="Your message" />

        </div>
    )

}
export default Form;