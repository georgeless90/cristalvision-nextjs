import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import styles from "./Dropdownlist.module.css";
import CategoriesTree from "../categories_tree/component";

function DropdownList(props) {
  const [showChildren, setShowChildren] = React.useState(false);
  const [index, setIndex] = React.useState(-1);

  React.useEffect(()=>{
    if(props.displayBlock){
      document.getElementById("dropdownlist").style.display =
          "block";
    }else{
      document.getElementById("dropdownlist").style.display =
          "none";
    }
  }, [props.displayBlock])

  const handleShowChildren = (index) => {
    setShowChildren(true);
    setIndex(index);
  };

  return (
    <ul id="dropdownlist" className={styles.dropdownlist}>
      {props.categoriesList.map((cat) => (
        <li className={styles.dropdownlist_item} key={cat._id}>
          <div className={styles.dropdownlist_item_div} onClick={() => handleShowChildren(cat._id)}>
            <span>{cat.name}</span>
            {cat.categories.length > 0 && (
              <FontAwesomeIcon
                icon={faAngleRight}
                className={styles.dropdownlist_item_icon}
              
              />
            )}
          </div>
 
          { cat.categories.length > 0 && (
            <CategoriesTree index={cat._id} showChildren={index == cat._id ? true : false} category={cat} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default DropdownList;
