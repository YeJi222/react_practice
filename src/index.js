import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Library from './demo/example_parent';
import Clock from './demo2(clock)/Clock'
import CommentList from './demo3(comment)/CommentList'
import Accomodate from './demo4(Hook)/Accommodate'
import ConfirmButton from './demo5(event)/ConfirmButton'
import LandingPage from './demo6(inline)/LandingPage';
import AttendanceBook from './demo7(list_key)/AttendanceBook';
import Calculator from './demo8(shared_state)/Calculator';
import ProfileCard from './demo9(composition_inheritance)/ProfileCard';
import DarkOrLight from './demo10(Context)/DarkOrLight';

/* demo
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);
*/

/* demo2(clock)
const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000);
*/

/* demo3(comment)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);
*/

/* demo4(Hook)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Accomodate />
  </React.StrictMode>
);
*/

/* demo5(event)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>
);
*/

/* demo6(inline)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
*/

/* demo7(list_key) 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AttendanceBook />
  </React.StrictMode>
);
*/

/* demo8(shared_state) 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);
*/

/* demo9(composition_inheritance) 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileCard />
  </React.StrictMode>
);
*/

/* demo10(Context) */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
