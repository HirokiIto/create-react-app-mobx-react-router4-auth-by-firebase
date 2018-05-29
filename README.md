# create-react-app mobx react-router4 auth by firebase

[ripo](https://github.com/HirokiIto/create-react-app-mobx-react-router4-auth-by-firebase)

## Project Structure

```
.
├── docs                     # Notes
└── src                      # Application source code
    ├── assets               # logo, image, etc...
    ├── components           # Global Reusable Components
    ├── config               # Application Configuration
    ├── containers           # Global Reusable Container Components
    ├── index.css            # Application-wide styles (generally settings)
    ├── index.js             # Application bootstrap and rendering
    ├── routes.js            # Main route definitions
    ├── stores               # Mobx-specific pieces
    ├── utils                # utilities

```


## Installation

```bash
$ git clone https://github.com/HirokiIto/create-react-app-mobx-react-router4-auth-by-firebase.git <my-project-name>
$ cd <my-project-name>
```

```bash
$ npm install
```

Get apiKey, authDomain, etc... from [https://firebase.google.com/](https://firebase.google.com/) for connecting firebase
and input each item of firebase.js

```
.
└── src    
    └── config
        └── firebase.js

```
```
{
  apiKey: "...",
  authDomain: "....firebaseapp.com",
  databaseURL: "https://....firebaseio.com",
  projectId: "...",
  storageBucket: "....appspot.com",
  messagingSenderId: "..."
}
```

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ npm start
```

Serves your app at `http://localhost:8008`

## Demonstrate

[demo](https://hirokiito.github.io/create-react-app-mobx-react-router4-auth-by-firebase)

sign up components etc are not included in this demo

sign in
* mail: xxx@gmail.com
* pass: aaaaaa

## reference

* [mobx decorators](https://www.robinwieruch.de/create-react-app-mobx-decorators/)
* [firebase auth](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/)
* [GitHub ページを React でつくる (基礎編)](https://qiita.com/KoheiShingaiHQ/items/b4bf8dd47a99e5d14caf)
* [【GitHub超初心者入門】この前初めてGitHubを使い始めたエンジニア見習いが書くGitHubの使い方と実践～とりあえず一緒に動かしてみようぜ！～](https://qiita.com/nnahito/items/565f8755e70c51532459)
* [git pushでpermission deniedされ403エラーになってしまう](https://teratail.com/questions/73843)
* [既に git 管理しているファイルをあえて無視したい](https://qiita.com/usamik26/items/56d0d3ba7a1300625f92)

## Authors

* Hiroki Ito
