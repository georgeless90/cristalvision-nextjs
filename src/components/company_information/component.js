import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import styles from "./Companyinformation.module.css";

function CompanyInformation(props) {
  const [showCompanyInfo, setshowCompanyInfo] = React.useState(false);

  let handleOpenList = () => {
    !showCompanyInfo ? setshowCompanyInfo(true) : setshowCompanyInfo(false);
  };
  return (
    <>
      <div className={styles.company_information} onClick={handleOpenList}>
        <div className={styles.company_information_title}>
          <h3 className={styles.company_information_title_text}>
            Nuestra compañia
          </h3>
        </div>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={styles.company_information_dropdown_icon}
        />
      </div>
      {showCompanyInfo && (
        <div className={styles.company_information_dropdown}>
          <div className={styles.company_information_dropdown_item}>
            <Link
              className={styles.company_information_dropdown_item_text}
              href="/politica-de-privacidad"
            >
              Política de privacidad
            </Link>
          </div>

          <div className={styles.company_information_dropdown_item}>
            <Link
              className={styles.company_information_dropdown_item_text}
              href="/politica-de-cookies"
            >
              Política de cookies
            </Link>
          </div>

          <div className={styles.company_information_dropdown_item}>
            <Link
              className={styles.company_information_dropdown_item_text}
              href="/aviso-legal"
            >
              Aviso legal
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default CompanyInformation;
