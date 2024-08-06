import styles from "./contact.module.css";


const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
        <input type="text" placeholder="Name" />
          <input type="text" placeholder="Surname" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number (optional)" />
          <textarea cols="20" rows="5" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};



export default ContactPage;
