# Marketplace in react

## About this project

This is the final project of the course. The topic was to create a makertplace that must have a **checkout** functionality. We had to implement it in react with a datastore in firebase.

## Getting started


### Requirements

- npm 8.19.2
- node v18.10.0

### Firebase setup

In order to run the app first you need to create a firebase firestore. I followed this documentation [link](https://firebase.google.com/docs/firestore?hl=es). Ones you have the credentials you need to set them in a `.env` file.

The firesore has the following documents:

- orders
    - buyer
    - items
- categories
- products


## Usage

```bash
$ npm install
$ npm start
```

After this go to `localhost:3000`

## License

[MIT](LICENCE.md)