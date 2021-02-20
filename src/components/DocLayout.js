import React from "react"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import GatsbyLogo from "../components/GatsbyLogo"
import { CssBaseline, Typography, Link, Paper } from "@material-ui/core"
import { MDXProvider } from "@mdx-js/react"
import { graphql, StaticQuery } from "gatsby"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
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
  header: { flexGrow: 0 },
  footer: { flexGrow: 0 },
  footerText: { color: theme.palette.text.disabled },
}))

const DocLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={(data) => (
        <div className={classes.root}>
          <CssBaseline />
          <SEO title="Privacy" />
          <div className={classes.header}>
            <div className={classes.row}>
              <GatsbyLogo width={30} />
              <Typography
                style={{
                  fontFamily: "Days One, Helvetica, Arial, sans-serif",
                  paddingLeft: 5,
                }}
                variant="h5"
              >
                Gatsby with Material-UI
              </Typography>
            </div>
          </div>
          <div className={classes.body}>
            <div className={classes.row}>
              <Paper style={{ width: 400, padding: "1rem" }}>
                <MDXProvider
                  components={{
                    h3: (props) => <Typography variant="h1" {...props} />,
                    p: (props) => (
                      <Typography
                        variant="body1"
                        style={{ marginBottom: "1rem" }}
                        {...props}
                      />
                    ),
                    a: (props) => <Link color="secondary" {...props} />,
                  }}
                >
                  {children}
                </MDXProvider>
              </Paper>
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
      )}
    />
  )
}

export default DocLayout
