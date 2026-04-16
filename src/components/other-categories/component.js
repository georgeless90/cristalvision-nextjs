import React from "react";

import styles from "./Othercategories.module.css";
import Mockup_service from "../../share-utilities/services/_mockup_service";
import CategoryCard from "../categoryCard/component";

function OtherCategories(props) {
  const [other_categories, setOther_categories] = React.useState([]);

  React.useEffect(() => {
    Mockup_service.getCategoryById(6).then((response) => {
      setOther_categories(response.categories);
    });
  }, []);

  return (
    <div className={styles.other_categories}>
      <div className={styles.other_categories_header}>
        <h3 className={styles.other_categories_header_title}>
          Otras categorias
        </h3>
        <div className={styles.other_categories_header_line}></div>
      </div>

      {other_categories && (
        <ul className={styles.other_categories_list}>
          {other_categories.map((category) => {
            return (
              <li className={styles.categories_list_item} key={category._id}>
                <CategoryCard infoCategory={category} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default OtherCategories;
