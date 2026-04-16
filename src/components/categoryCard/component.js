import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./Category-card.module.css";
import { useLimitLengthText } from "../../share-utilities/hooks/limit-length-text/hook";

function Category(props) {
  const router = useRouter();

  const handleGoScreen = () => {
    router.push(props.infoCategory.pathUrl);
  };


  return (
    <div className={styles.category_card} >
      <div className={styles.category_card_images}>
        <Image
          className={styles.category_card_images_img}
          src={props.infoCategory.photo}
          width={100}
          height={100}
          alt="section-img"
        />
      </div>
      <div className={styles.category_card_info}>
        <div className={styles.category_card_info_name}>
          <span className={styles.category_card_info_name_text}>
            {props.infoCategory.name}
          </span>
        </div>
        <div className={styles.category_card_info_description}>
          <span className={styles.category_card_info_description_text}>
            {useLimitLengthText("description-category",props.infoCategory.description)}
          </span>
        </div>
        <div className={styles.category_card_info_price}>
          <span className={styles.category_card_info_price_text}>
            {props.infoCategory.price}
          </span>
        </div>
      </div>
      <div className={styles.category_card_actions}>
        <div
          className={styles.category_card_actions_button_buy}
          onClick={handleGoScreen}
        >
          <span className={styles.category_card_actions_button_text}>Ver categoria</span>
        </div>
      </div>
    </div>
  );
}

export default Category;
