import React from "react";
import Image from "next/image";

import styles from "./Product-card.module.css";
import amazonImg from "../../share-utilities/imgs/amazon-two.png";
import { useLimitLengthText } from "../../share-utilities/hooks/limit-length-text/hook";

function BestProduct(props) {
  return (
    <div className={styles.product_card}>
      <div className={styles.product_card_images}>
        <Image
          className={styles.product_card_images_img}
          src={props.infoProduct.photosList[1]}
          width={100}
          height={100}
          alt="section-img"
        />
      </div>
      <div className={styles.product_card_info}>
        <div className={styles.product_card_info_name}>
          <span className={styles.product_card_info_name_text}>
            {useLimitLengthText("name", props.infoProduct.name)}
          </span>
        </div>
        <div className={styles.product_card_info_description}>
          <span className={styles.product_card_info_description_text}>
            {useLimitLengthText("description", props.infoProduct.description)}
          </span>
        </div>
        <div className={styles.product_card_actions}>
        <div className={styles.product_card_info_price}>
          <span className={styles.product_card_info_price_text}>
            ${props.infoProduct.price}
          </span>
        </div>
          <a
            className={styles.product_card_actions_button_buy}
            target="_blank"
            href={props.infoProduct.affiliateLink}
            rel="noopener noreferrer"
          >
            <Image
              className={styles.product_card_actions_button_buy_img}
              src={amazonImg}
              width={100}
              height={100}
              alt="section-img"
            />
            <span>Comprar en amazon</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BestProduct;
