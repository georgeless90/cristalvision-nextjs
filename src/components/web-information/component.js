import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHandshakeSimple,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Webinformation.module.css";

function WebInformation(props) {
  return (
    <div className={styles.web_information}>
      <div className={styles.web_information_item}>
        <div className={styles.web_information_cont_item}>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={styles.web_information_item_icon}
          />
        </div>
        <div className={styles.web_information_cont_text}>
          <span className={styles.web_information_item_title}>Única en la web</span><br></br>
          <span className={styles.web_information_item_text}>Gran rendimiento y conectividad</span>
        </div>
      </div>

      <div className={styles.web_information_item}>
        <div className={styles.web_information_cont_item}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={styles.web_information_item_icon}
          />
        </div>
        <div className={styles.web_information_cont_text}>
          <span className={styles.web_information_item_title}>
          cristalvision@gmail.com
          </span><br></br>
          <span className={styles.web_information_item_text}>Resolveremos tus dudas</span>
        </div>
      </div>

      <div className={styles.web_information_item}>
        <div className={styles.web_information_cont_item}>
          <FontAwesomeIcon
            icon={faHandshakeSimple}
            className={styles.web_information_item_icon}
          />
        </div>
        <div className={styles.web_information_cont_text}>
          <span className={styles.web_information_item_title}>Trabaja con nosotros</span><br></br>
          <span className={styles.web_information_item_text}>Desarrollo web, apps, machine learning y seo</span>
        </div>
      </div>
    </div>
  );
}

export default WebInformation;
