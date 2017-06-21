require('./styles/home.scss');;

import leftTmpl from './scripts/left.js';
import topTmpl from './scripts/header.js';
import hisTmpl from './scripts/history.js';
import userInfo from './scripts/getUserInfo.js';

const left = leftTmpl();
const top = topTmpl();
$('.app').html(left + top);
hisTmpl();
userInfo();
