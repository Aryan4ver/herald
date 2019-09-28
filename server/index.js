//import path from 'path';
const path = require('path');

//import fs from 'fs';
const fs = require('fs');

//import React from 'react';
const React = require('react');

//import express from 'express';
const express = require('express');

//import ReactDOMServer from 'react-dom/server';
const ReactDOMServer = require('react-dom/server');

//import App from '../src/App';
const App = require('../src/App');

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./public'));

app.get('/*', (req, res) => {
  const app = ReactDOMServer.renderToString(App);

  const indexFile = path.resolve('./public/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="app"></div>', `<div id="app">${app}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
