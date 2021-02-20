import { createMuiTheme } from "@material-ui/core/styles"
import themeData from "./theme.json"

const themeName = "Custom Theme"

export default createMuiTheme({ ...themeData, themeName })
