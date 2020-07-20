# Quasar App (awesome-todo)

A Quasar Framework app

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app in dev mode for android
quasar dev -m cordova -T android

### Build the app in dev mode
quasar dev -m electron


### Build the app for production- android
- Build for production with quasar build -m cordova -T android

- Plug in your android device

- cd into src-cordova folder

- run on device with cordova run android

### Build the app for production- web
```bash
quasar build
quasar build -m electron
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).


### Firebase DB rules
{
  "rules": {
    "tasks":{
      "$uId": {
        ".read": "auth.uid == $uId",
        ".write": "auth.uid == $uId"
      }
    }
  }
}
