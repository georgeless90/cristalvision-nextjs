import React from "react";

import styles from "./Screenlist.module.css";
import Mockup_service from "../../share-utilities/services/_mockup_service";
import CategoryCard from "../categoryCard/component";

function ScreenList(props) {
  const [other_categories, setOther_categories] = React.useState([]);

  React.useEffect(() => {
    Mockup_service.getCategoryById(6).then((response) => {
      setOther_categories(response.categories);
    });
  }, []);

  return (
    <div className={styles.other_categories}>
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

export default ScreenList;
