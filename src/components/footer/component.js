import Link from "next/link";

import styles from "./Footer.module.css";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_rights}>
        <span className={styles.footer_rights_text}>
          Copyright 2019 cristalvision.online. All Rights Reserved
        </span>
      </div>
      <div className={styles.footer_links}>
        <Link
          className={styles.footer_links_item}
          href="/politica-de-privacidad"
        >
          <span className={styles.footer_links_item_text}>
            Política de privacidad
          </span>
        </Link>
        <Link className={styles.footer_links_item} href="/politica-de-cookies">
          <span className={styles.footer_links_item_text}>
            Política de cookies
          </span>
        </Link>
        <Link className={styles.footer_links_item} href="/aviso-legal">
          <span className={styles.footer_links_item_text}>Aviso legal</span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
