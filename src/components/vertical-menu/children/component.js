import Link from "next/link";

import styles from "./Verticalmenuchildren.module.css";

function VerticalMenuChildren(props) {

  const scrollAuto = () => {
    const body = document.body;
    body.style.overflowY = "auto";
  };


  const categoriesOne = (list) => (
    <div className={styles.vertical_menu_link_children_item_list}>
      {list.map((catOne) => (
        <div
          className={styles.vertical_menu_link_children_item_list_one}
          key={catOne._id}
        >
          <Link  onClick={scrollAuto} className={styles.vertical_menu_link_children_item_list_title_one} href={`${catOne.pathUrl}`}>
            <span
              className={
                styles.vertical_menu_link_children_item_list_one_title_text
              }
            >
              {catOne.name}
            </span>
          </Link>

          {catOne.categories.length > 0 ? (
            categoriesTwo(catOne.categories)
          ) : (
            <div
              className={styles.vertical_menu_link_children_item_list_two}
            ></div>
          )}
        </div>
      ))}
    </div>
  );

  const categoriesTwo = (list) => (
    <div className={styles.vertical_menu_link_children_item_list_two}>
      {list.map((catTwo) => (
        <div key={catTwo._id}>
          <Link onClick={scrollAuto} className={styles.vertical_menu_link_children_item_list_title_two} href={`${catTwo.pathUrl}`}>
            <span>{catTwo.name}</span>
          </Link>

          {catTwo.categories.length > 0 && categoriesThree(catTwo.categories)}
        </div>
      ))}
    </div>
  );

  const categoriesThree = (list) => (
    <div className={styles.vertical_menu_link_children_item_list_three}>
      {list.map((catThree) => (
        <Link
          className={styles.vertical_menu_link_children_item_list_title_three}
          key={catThree._id} href={`${catThree.pathUrl}`}
          onClick={scrollAuto}
        >
          <span>{catThree.name}</span>
        </Link>
      ))}
    </div>
  );

  return (
    <div className={styles.vertical_menu_link_children_item}>
      {categoriesOne(props.subcategoryInfo.categories)}
    </div>
  );
}

export default VerticalMenuChildren;
