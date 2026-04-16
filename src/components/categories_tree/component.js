import React from "react";
import Link from "next/link";

import styles from "./Categoriestree.module.css";

function CategoriesTree(props) {

  React.useEffect(() => {
    if (props.showChildren) {
      document.getElementById(`${props.index}`).style.display = "grid";
    } else {
      document.getElementById(`${props.index}`).style.display = "none";
    }
  }, [props.showChildren]);

  const categoriesOne = (list) => (
    <ul id={props.index} className={styles.categories_tree_list}>
      {list.map((catOne) => (
        <li className={styles.categories_tree_list_one} key={catOne._id}>
          <Link
            className={styles.categories_tree_list_one_title}
            href={`${catOne.pathUrl}`}
          >
            <span className={styles.categories_tree_list_one_title_text}>
              {catOne.name}
            </span>
          </Link>
          {catOne.categories.length > 0 && categoriesTwo(catOne.categories)}
        </li>
      ))}
    </ul>
  );

  const categoriesTwo = (list) => (
    <ul className={styles.categories_tree_list_two}>
      {list.map((catTwo) => (
        <li key={catTwo._id}>
          <Link
            className={styles.categories_tree_list_two_title}
            href={`${catTwo.pathUrl}`}
          >
            <span className={styles.categories_tree_list_two_title_text}>
              {catTwo.name}
            </span>
          </Link>

          {catTwo.categories.length > 0 && categoriesThree(catTwo.categories)}
        </li>
      ))}
    </ul>
  );

  const categoriesThree = (list) => (
    <ul className={styles.categories_tree_list_three}>
      {list.map((catThree) => (
        <li key={catThree._id} >
          <Link href={`${catThree.pathUrl}`} className={styles.categories_tree_list_three_title}>
            <span className={styles.categories_tree_list_three_title_text}>
              {catThree.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {categoriesOne(props.category.categories)}
    </>
  );
}

export default CategoriesTree;
