{
  "name": "<%= name %>",
  "scripts": {
    "build": "shx mkdir -p dist && shx cp -r src/* dist"
  },
  "tcb": {
    "type": "webapp"
  },
  "tcb:webapp": {},
  "devDependencies": {
    "shx": "0.3.4"
  }
}
