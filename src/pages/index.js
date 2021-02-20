import React from "react"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import GatsbyLogo from "../components/GatsbyLogo"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import SecurityIcon from "@material-ui/icons/Security"
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer"
import { graphql, navigate } from "gatsby"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.default,
  },
  body: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "2.5rem",
    paddingBottom: "2.5rem",
  },
  footer: { flexGrow: 0 },
  footerText: { color: theme.palette.text.disabled },
}))

const IndexPage = ({ data }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SEO title="Home" />
      <div className={classes.body}>
        <div className={classes.row}>
          <GatsbyLogo />
          <Typography
            style={{
              fontFamily: "Days One, Helvetica, Arial, sans-serif",
              paddingLeft: 5,
            }}
            variant="h2"
          >
            Gatsby with Material-UI
          </Typography>
        </div>
        <div className={classes.row}>
          <IconButton onClick={() => navigate("/privacy/")}>
            <SecurityIcon fontSize="large" />
          </IconButton>
          <span style={{ width: "2rem" }} />
          <IconButton onClick={() => navigate("/contact/")}>
            <QuestionAnswerIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
      <div className={classes.footer}>
        <footer className={classes.row}>
          <Typography variant="body2" className={classes.footerText}>
            {`Copyright (c) ${data.site.siteMetadata.title}, ${new Date(
              data.siteBuildMetadata.buildTime
            ).getFullYear()}`}
          </Typography>
        </footer>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    siteBuildMetadata {
      buildTime
    }
  }
`

export default IndexPage
