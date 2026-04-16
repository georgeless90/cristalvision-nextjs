import styles from "./Webdescription.module.css";

function WebDescription(props) {
  return (
    <div className={styles.web_description}>
      <h3 className={styles.web_description_item_title}>Cristalvision</h3>
      <div className={styles.web_description_item_cont_text}>
        <p className={styles.web_description_item_text}>
          Tienda online que ofrece gafas, lentes y anteojos de la
          mejor calidad y al precio más competitivo del mercado
        </p>
      </div>
    </div>
  );
}

export default WebDescription;
