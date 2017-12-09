import 'bootstrap'
import './main.scss';

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./_header";


ReactDOM.render(
    <Header /> ,
    document.getElementById('header-placeholder')
  );