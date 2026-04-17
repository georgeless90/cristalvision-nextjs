import Landing from "./landing";
import Mockup_service from "../share-utilities/services/_mockup_service";
export default function Home(props) {
  return (
    <>
      <Landing
        categoriesList={props.categoriesList}
      />
    </>
  );
}

export async function getServerSideProps() {
  const categoriesList = await Mockup_service.getAllCategories();
  return {
    props: {
      categoriesList: categoriesList
    },
  };
}
