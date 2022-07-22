
import { switchRoutes } from "../src/utils/router"
import './style.css'

switchRoutes()

window.onpopstate = () => {
   switchRoutes()
}