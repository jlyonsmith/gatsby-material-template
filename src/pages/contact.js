import React from "react"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import GatsbyLogo from "../components/GatsbyLogo"
import {
  CssBaseline,
  Typography,
  Paper,
  Button,
  Grid,
  TextField,
} from "@material-ui/core"
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

const ContactPage = () => {
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
          <SEO title="Contact" />
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
                <form
                  action="mailto:info@mydomain.com"
                  method="get"
                  enctype="application/x-www-form-urlencoded"
                >
                  <Grid container spacing={2}>
                    <Grid item xs="12">
                      <Typography variant="h5">Contact</Typography>
                      <Typography variant="body">
                        We would love to hear from you. Please fill out the
                        following form to send us an email using your locally
                        configured email program.
                      </Typography>
                    </Grid>
                    <Grid item xs="12">
                      <TextField
                        id="subject"
                        name="subject"
                        label="Subject"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs="12">
                      <TextField
                        id="body"
                        name="body"
                        multiline
                        label="Message"
                        variant="outlined"
                        rows={4}
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item container xs="12" justify="flex-end">
                      <Button
                        type="submit"
                        name="Send"
                        variant="contained"
                        color="primary"
                      >
                        Send
                      </Button>
                    </Grid>
                  </Grid>
                </form>
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

export default ContactPage
