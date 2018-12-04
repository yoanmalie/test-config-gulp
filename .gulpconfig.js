// Miscellaneous
const options = {
  env_dev: process.argv.includes("--dev"),
}

// Project information
const project = {
  url: "http://mon-site.fr", // Project url
  vhost: "http://mon-site.local", // Local url if there vhost configured
}

// Theme directory to use
const themePath = "./themes/"
const themeName = "mon-theme"
const theme = themePath + themeName

// External libraries needed for the front end
const vendors = {}

// Paths configurations
const appDir = "web"
const paths = {
  source: theme,
  public: appDir,
  assets: "/assets",
  vendors: "/node_modules",
}
const css = {
  src: paths.source + paths.assets + "/css",
  dest: paths.public + paths.assets + "/css",
  entry: "/main",
  extensions: "scss",
  name: "styles",
  suffix: ".min",
  autoprefixer: ["last 2 versions", "not ie 10"],
}
const js = {
  src: paths.source + paths.assets + "/js",
  dest: paths.public + paths.assets + "/js",
  entry: "/main",
  extensions: "js",
  name: "app",
  suffix: ".min",
}

// Make things available for tasks files
export {
  options,
  project,
  themePath,
  themeName,
  theme,
  vendors,
  appDir,
  paths,
  css,
  js,
}
