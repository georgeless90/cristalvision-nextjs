import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faAngleDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Titlebreadcrumbs.module.css";

function TitleBreadCrumbs(props) {
  return (
    <div className={styles.component}>
      <div className={styles.component_child}>
        <div className={styles.title}>
          <h1  className="title_text">{props.title}</h1>
        </div>

        <div className={styles.breadcrumbs}>
          {props.breadCrumbs.length > 0 && (
            <Link className={styles.breadcrumbs_link} href="/">
              Inicio
            </Link>
          )}

          {props.breadCrumbs.map((item) => (
            <div key={item._id}>
              {props.breadCrumbs.length > 1 && item._id == 0 ? (
                <Link
                  className={styles.breadcrumbs_link}
                  href={`${item.pathUrl}`}
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={styles.breadcrumbs_arrow}
                  />
                  {item.name}
                </Link>
              ) : (
                <span className={styles.breadcrumbs_text}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={styles.breadcrumbs_arrow}
                  />
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TitleBreadCrumbs;
