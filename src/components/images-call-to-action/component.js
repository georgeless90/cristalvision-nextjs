import Image from "next/image";

import styles from "./Imagescta.module.css";

function ImagesCta(props) {
  let oneUrl = "https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/a9AHtHHkMIaitHdv/NjA5NDNlNGIt-w186._SY116_CB604072774_.jpg";
  let twoUrl ="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Holiday/Outlet_GW_K_186x116_Oct_2022_v2._SY116_CB607454025_.jpg"
  let threeUrl ="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Holiday/Outlet_GW_PC_186x116_Oct_2022._SY116_CB607479754_.jpg"

  return (
    <div className={styles.imagescta}>
      <div className={styles.imagescta_one}>
        <Image
          className={styles.imagescta_one_img}
          src={oneUrl}
          width={100}
          height={100}
          alt="section-img"
        />
      </div>
      <div className={styles.imagescta_two}>
      <Image
          className={styles.imagescta_two_img}
          src={twoUrl}
          width={100}
          height={100}
          alt="section-img"
        />
      </div>
      <div className={styles.imagescta_three}>
      <Image
          className={styles.imagescta_three_img}
          src={threeUrl}
          width={100}
          height={100}
          alt="section-img"
        />
      </div>
    </div>
  );
}

export default ImagesCta;
