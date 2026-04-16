import Image from "next/image";

import styles from "./Socialmediaicons.module.css";
import twitter from "../../share-utilities/imgs/twitter.svg"
import google from "../../share-utilities/imgs/google.svg"
import facebook from "../../share-utilities/imgs/facebook.svg"
import youtube from "../../share-utilities/imgs/youtube.svg"

function SocialMediaIcons(props) {
  return (
    <div className={!props.header ? styles.socialmedia_icons : styles.socialmedia_icons_header}>
      <Image className={!props.header ? styles.socialmedia_icons_option : styles.socialmedia_icons_option_header} src={twitter}  layout="" alt="section-img" />
      <Image className={!props.header ? styles.socialmedia_icons_option : styles.socialmedia_icons_option_header} src={google}  layout="" alt="section-img" />
      <Image className={!props.header ? styles.socialmedia_icons_option : styles.socialmedia_icons_option_header} src={facebook}  layout="" alt="section-img" />
      <Image className={!props.header ? styles.socialmedia_icons_option : styles.socialmedia_icons_option_header} src={youtube}  layout="" alt="section-img" />
    </div>
  );
}

export default SocialMediaIcons;
