import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMessage } from "@fortawesome/free-solid-svg-icons";

import styles from "./_styles.module.css";
import Services from "../../share-utilities/services/_services";
import MockupService from "../../share-utilities/services/_mockup_service";
import Header from "../../components/header/component";
import TitleCreadCrumbs from "../../components/title_and_breadcrumbs/component";
import { useInputProps } from "../../share-utilities/hooks/handle-inputs/hook";
import WebInformation from "../../components/web-information/component";
import WebDescription from "../../components/web-description/component";
import CompanyInformation from "../../components/company_information/component";
import NotificationSystem from "../../components/notification_system/component";
import SocialMediaIcons from "../../components/social_media_icons/component";
import Footer from "../../components/footer/component";

function Contact(props) {
  const router = useRouter();

  const email = useInputProps("");
  const message = useInputProps("");

  const handleLogin = () => {
    let form = {
      email: email.value,
      text: message.value,
    };


    Services.createMessage(form)
      .then((response) => {
        if (response.status == 201) {
          router.push("/");
        }
      })
      
  };

  async function handleSubmit() {
    let form = {
      email: email.value,
      text: message.value,
    };

    const res = await fetch("/api/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <main className="page">
      <Head>
        <title>cristalvision.online | Pagina de contacto.</title>
        <meta name="description" content="" />
      </Head>
      <Header allCategories={props.categoriesList}/>
      <TitleCreadCrumbs title={"Contactanos por este medio"} breadCrumbs={[]} />
      <div className="page_body">
        <div className={styles.page_body_split}>
          <div className={styles.page_body_left}>
            <WebDescription />
            <NotificationSystem />
            <SocialMediaIcons />
          </div>

          <div className={styles.page_body_right}>
            <form className="form">
              <div className="card_form">
                <div className="input_component">
                  <div className="input_component_img">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="input_component_img_icon"
                    />
                  </div>

                  <div className="input_component_form">
                    <label
                      className="input_component_form_label"
                      for="contactName"
                    >
                      Correo electronico
                    </label>
                    <input
                      className="input_component_form_field"
                      placeholder="Escribe el correo electronico"
                      type="email"
                      {...email}
                      name="email"
                    />
                  </div>
                </div>
              </div>

              <div className="card_form">
                <div className="input_component">
                  <div className="input_component_img">
                    <FontAwesomeIcon
                      icon={faMessage}
                      className="input_component_img_icon"
                    />
                  </div>

                  <div className="input_component_form">
                    <label
                      className="input_component_form_label"
                      for="contactName"
                    >
                      Mensaje
                    </label>
                    <textarea
                      className="input_component_form_field"
                      placeholder="Mensaje"
                      type="text"
                      {...message}
                      name="message"
                    />
                  </div>
                </div>
              </div>

              <button
                className="form_button"
                type="button"
                onClick={handleSubmit}
              >
                <span className="form_button_text">Enviar</span>
              </button>
            </form>
          </div>
        </div>
        <WebInformation />
      </div>
      <Footer />
    </main>
  );
}

export default Contact; 


export async function getServerSideProps() {
  const categoriesList = await  MockupService.getAllCategories();

  return {
    props: {
      categoriesList: categoriesList,
    },
  };
}
