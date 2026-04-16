import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.css";
import { Context } from "../../storage/context";
import Mockup_service from "../../share-utilities/services/_mockup_service";
import VerticalMenu from "../vertical-menu/component";
import SocialMediaIcons from "../social_media_icons/component";
import DropdownList from "../dropdown_list/component";

function Header(props) {
  const { isAuth, removeAuth } = React.useContext(Context);

  const [token, setToken] = React.useState(false);
  const [showVerticalMenu, setShowVerticalMenu] = React.useState(false);
  const [displayBlockCategories, setdisplayBlockCategories] =
    React.useState(false);

  React.useEffect(() => {
    setToken(isAuth);
    listenSCroll();
  }, [isAuth]);

  const router = useRouter();

  const listenSCroll = () => {
    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset > 160) {
        document.getElementById("header__nav").style.background =
          "rgba(140, 0, 0, 0.68)";
        document.getElementById("header__nav").style.boxShadow =
          "0 8px 6px -6px rgb(0 0 0 / 40%)";
      } else {
        document.getElementById("header__nav").style.background = "#8C0000";
        document.getElementById("header__nav").style.boxShadow = "none";
      }
    });
  };

  const handleLogOut = () => {
    //removeAuth();
    router.push("/");
  };

  const handleVerticalMenu = () => {
    const body = document.body;
    if (!showVerticalMenu) {
      setShowVerticalMenu(true);
      body.style.overflowY = "hidden";
    } else {
      setShowVerticalMenu(false);
      body.style.overflowY = "auto";
    }
  };

  const handleSeaarch = () => {};

  const handleShowAllCategories = () => {
    !displayBlockCategories
      ? setdisplayBlockCategories(true)
      : setdisplayBlockCategories(false);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header_mobile}>
          <div className={styles.header_mobile_up}>
            <FontAwesomeIcon
              icon={faBars}
              className={styles.header_mobile_menuicon}
              onClick={handleVerticalMenu}
            />

            <Link className={styles.header_mobile_title} href="/">
              <span className={styles.header_mobile_title_text}>
                Cristalvision
              </span>
            </Link>
          </div>

          <div className={styles.header_mobile_search}>
            <input
              className={styles.header_mobile_search_input}
              placeholder="Nombre del producto"
            />
            <button className={styles.header_mobile_search_button}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={styles.header_mobile_search_button_icon}
                onClick={handleSeaarch}
              />
            </button>
          </div>
        </div>

        <div className={styles.header_desktop}>
          <div className={styles.header_desktop_up}>
            <div className={styles.header_desktop_up_item}>
              <span className={styles.header_desktop_up_item_text}>
                Bienvenido/a a Cristalvision
              </span>
            </div>
            <div className={styles.header_desktop_up_item}>
              <span className={styles.header_desktop_up_item_text}>
                Tienda online
              </span>
            </div>
            <div className={styles.header_desktop_up_item}>
              <SocialMediaIcons header={true} />
            </div>
          </div>
          <div className={styles.header_desktop_medium}>
            <Link className={styles.header_desktop_medium_title} href="/">
              <span className={styles.header_desktop_medium_title_text}>
                Cristalvision
              </span>
            </Link>
            <div className={styles.header_desktop_medium_search}>
              <div className={styles.header_mobile_search}>
                <input
                  className={styles.header_mobile_search_input}
                  placeholder="Nombre del producto"
                />
                <button className={styles.header_mobile_search_button}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={styles.header_mobile_search_button_icon}
                    onClick={handleSeaarch}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {token ? (
        <div className={styles.header__actions_auth}>
          <Link className={styles.header__actions_link} href="/profile">
            Profile
          </Link>
          <Link className={styles.header__actions_link} href="/cart">
            Buy cart
          </Link>
          <button className={styles.button} onClick={handleLogOut}>
            LogOut
          </button>
        </div>
      ) : (
        <nav id="header__nav" className={styles.header__nav}>
          <ul className={styles.header__actions}>
            <li>
              <div
                className={styles.header__actions_link_categories}
                onClick={handleShowAllCategories}
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className={styles.header__actions_link_categories_icon_menu}
                />
                Todas las categorías
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={
                    styles.header__actions_link_categories_dropdown_icon
                  }
                />
              </div>
              {
                <DropdownList
                  displayBlock={displayBlockCategories}
                  categoriesList={props.allCategories}
                />
              }
            </li>
            <li>
              <Link className={styles.header__actions_link} href="/">
                Acerca de nosotros
              </Link>
            </li>
            <li>
              <Link className={styles.header__actions_link} href="/contacto">
                Contactanos
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {showVerticalMenu && (
        <VerticalMenu
          categoriesList={props.allCategories}
          onChange={handleVerticalMenu}
        />
      )}
    </>
  );
}

export default Header;
