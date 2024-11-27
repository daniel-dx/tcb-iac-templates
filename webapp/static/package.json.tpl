{
  "name": "<%= name %>",
  "scripts": {
    "build": "shx mkdir -p dist && shx cp -r src/* dist"
  },
  "tcb:webapp": {
    publicPath: ""
  },
  "devDependencies": {
    "shx": "0.3.4"
  }
}
