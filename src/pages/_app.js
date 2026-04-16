

import Context from "../storage/context"
import '../share-utilities/css/styles.css'
import next from "next"
import { images } from "../../next.config"

function MyApp({ Component, pageProps }) {
  return (

    <Context.Provider>
      <Component {...pageProps} />
    </Context.Provider>

  )
}


export default MyApp
