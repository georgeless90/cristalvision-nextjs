import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

import styles from "./Notificationsystem.module.css";
import { useInputProps } from "../../share-utilities/hooks/handle-inputs/hook";
import Services from "../../share-utilities/services/_services";

function NotificationSystem(props) {
  const router = useRouter();

  const email = useInputProps("");

  let handleMessageSubmit = () => {
    let form = {
      email: email.value,
      text: "notification",
    };

    Services.createMessage(form)
    .then((response) => {
      if (response.status == 201) {
        router.push("/");
      }
    })
  };

  return (
    <div className={styles.notification_system}>
      <div className={styles.notification_system_title}>
        <h3 className={styles.notification_system_title_text}>
          Únase a nuestro sitema de noticaciones ahora
        </h3>
      </div>
      <div className={styles.notification_system_description}>
        <p className={styles.notification_system_description_text}>
          Disfrute de nuestro sistema de notificaciones para mantenerse
          actualizado con las últimas noticias y ofertas especiales. Deja tu
          dirección de correo electrónico aquí!
        </p>
      </div>
      <div className={styles.notification_system_field_message}>
        <input
          className={styles.notification_system_field_message_input}
          type="email"
          {...email}
          name="email"
          placeholder="Dirección de correo electronico"
        />
        <button className={styles.notification_system_field_message_button}>
          <FontAwesomeIcon
            icon={faEnvelopeCircleCheck}
            className={styles.notification_system_field_message_icon}
            onClick={handleMessageSubmit}
          />
        </button>
      </div>
    </div>
  );
}

export default NotificationSystem;
