import Landing from "./landing";
import Services from "../share-utilities/services/_services";
import Mockup_service from "../share-utilities/services/_mockup_service";
export default function Home(props) {
  return (
    <>
      <Landing
        productsWoman={props.productsWoman}
        productsMan={props.productsMan}
        categoriesList={props.categoriesList}
      />
    </>
  );
}

export async function getServerSideProps() {
  const categoriesList = await Mockup_service.getAllCategories();
  const productsListWoman = await Services.listByCategoryNameGender(
    "general-vision",
    "f"
  );
  const productsListMen = await Services.listByCategoryNameGender(
    "general-vision",
    "m"
  );
  return {
    props: {
      categoriesList: categoriesList,
      productsWoman: productsListWoman.body,
      productsMan: productsListMen.body,
    },
  };
}
