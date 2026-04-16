import React from "react";
import Image from "next/image";

import styles from "./Product-card-left.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useLimitLengthText } from "../../share-utilities/hooks/limit-length-text/hook";

function ProductLeft(props) {
  return (
    <div className={styles.product_card}>
      <div className={styles.product_card_images}>
        <Image
          className={styles.product_card_images_img}
          src={props.infoProduct.photosList[0]}
          width={100}
          height={100}
          alt="section-img"
        />
      </div>
      <div className={styles.product_card_info}>
        <div className={styles.product_card_info_name}>
          <span className={styles.product_card_info_name_text}>
            {useLimitLengthText("name-left", props.infoProduct.name)}
          </span>
        </div>
        <div className={styles.product_card_info_price}>
          <span className={styles.product_card_info_price_text}>
            ${props.infoProduct.price}
          </span>
        </div>
        <div className={styles.product_card_info_description}>
          <span className={styles.product_card_info_description_text}>
            {useLimitLengthText("description-left", props.infoProduct.description)}
          </span>
        </div>
        <div className={styles.product_card_actions}>
          <a
            className={styles.product_card_actions_button_buy}
            target="_blank"
            href={props.infoProduct.affiliateLink}
            rel="noopener noreferrer nofollow"
          >
            <FontAwesomeIcon
                icon={faCartPlus}
                className={styles.product_card_actions_button_buy_img}
              />
            <span>Comprar en Amazon</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductLeft;
