// This are the customization rules for use by the @johnls/git-extra tool

const params = await ui.prompts([
  {
    name: "projectName",
    initial: args.projectName,
    message: "Project name?",
    regex: "[a-z-][a-z0-9-]*",
    error:
      "Name must be supplied and be in param-case (all lowercase, only hyphens)",
  },
  {
    name: "userName",
    initial: args.userName,
    message: "GitHub user name?",
    regex: "^[a-zd](?:[a-zd]|-(?=[a-zd])){0,38}$", // From https://github.com/shinnn/github-username-regex
    error: "Must be a valid GitHub user name",
  },
  {
    name: "copyrightOwner",
    message: "Copyright owner?",
  },
])

// TODO: Customizations.  See [git-extra](https://github.com/jlyonsmith/git-extra/tree/master/)
