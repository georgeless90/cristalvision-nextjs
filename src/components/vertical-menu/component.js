import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faStore,
  faAngleRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

import { useRouter } from "next/router";

import { Context } from "../../storage/context";

import styles from "./VerticalMenu.module.css";
import VerticalMenuChildren from "./children/component";

function VerticalMenu(props) {
  const { isAuth, removeAuth } = React.useContext(Context);

  const [token, setToken] = React.useState(false);
  const [index, setIndex] = React.useState(-1);
  const [showChildrenMenu, setShowChildrenMenu] = React.useState(false);

  let clicklInter = false;
  React.useEffect(() => {
    setToken(isAuth);

    window.addEventListener("click", (e) => {
      if (
        document.getElementById("verticalmenu_base") &&
        document.getElementById("verticalmenu_base").contains(e.target)
      ) {
        setTimeout(() => {
          if (!clicklInter && document.getElementById("verticalmenu"))
            props.onChange();
        }, 50);
      }
    });

    window.addEventListener("click", (e) => {
      if (
        document.getElementById("verticalmenu") &&
        document.getElementById("verticalmenu").contains(e.target)
      ) {
        clicklInter = true;
      } else {
        clicklInter = false;
      }
    });
  }, []);

  const router = useRouter();

  const handleLogOut = () => {
    removeAuth();
    router.push("/");
  };

  const handleShowChildren = (category) => {
    setShowChildrenMenu(true);
    setIndex(category._id);
  };

  const scrollAuto = () => {
    const body = document.body;
    body.style.overflowY = "auto";
  };

  return (
    <div id="verticalmenu_base" className={styles.vertical_menu_base}>
      <div id="verticalmenu" className={styles.vertical_menu}>
        {token ? (
          <div className={styles.vertical_menu_auth}>
            <Link href="/profile">Profile</Link>
            <Link href="/cart">Buy cart</Link>
            <button className={styles.button} onClick={handleLogOut}>
              LogOut
            </button>
          </div>
        ) : (
          <div className={styles.vertical_menu_public}>
            <div className={styles.vertical_menu_public_header}>
              <span className={styles.vertical_menu_public_header_text}>
                Cristalvision
              </span>
            </div>
            <div className={styles.vertical_menu_public_close}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className={styles.vertical_menu_public_close_icon}
                onClick={props.onChange}
              />
            </div>

            {props.categoriesList.map((category) => (
              <div className={styles.vertical_menu_item} key={category._id}>
                <div
                  className={styles.vertical_menu_link}
                  key={category._id}
                  onClick={() => handleShowChildren(category)}
                >
                  <FontAwesomeIcon
                    icon={faStore}
                    className={styles.vertical_menu_link_icon}
                  />
                  <span>{category.name}</span>

                  {category.categories.length > 0 && (
                    <FontAwesomeIcon
                      icon={faPlus}
                      className={styles.vertical_menu_link_arrow_icon}
                    />
                  )}
                </div>

                {showChildrenMenu &&
                  index == category._id &&
                  category.categories.length > 0 && (
                    <div className={styles.vertical_menu_link_children}>
                      <VerticalMenuChildren subcategoryInfo={category} />
                    </div>
                  )}
              </div>
            ))}

            <div className={styles.vertical_menu_link}>
              <FontAwesomeIcon
                icon={faStore}
                className={styles.vertical_menu_link_icon}
              />
              <Link className={styles.header__actions_link} href="/" onClick={scrollAuto}>
                Acerca de nosotros
              </Link>
            </div>

            <div className={styles.vertical_menu_link}>
              <FontAwesomeIcon
                icon={faStore}
                className={styles.vertical_menu_link_icon}
              />
              <Link className={styles.header__actions_link} href="/contacto" onClick={scrollAuto}>
                Contactanos
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VerticalMenu;
