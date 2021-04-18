// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import ReactDOM from "react-dom";

import App from "../src/main/App";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCalendarAlt)

ReactDOM.render(<App />, document.getElementById("app"));
