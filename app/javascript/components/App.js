import React from 'react';
// Routers
import { Routes, Route } from 'react-router-dom';

// Redux store
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

// Components
import Greeting from './Greeting';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Provider>
  );
};

export default App;

// import React from "react";
// import { useSelector } from "react-redux";

// const Message= ({prop}) => {

   
//   if(prop != undefined && prop != null) {
//     return (
//       <div className="message">
//         <h2>Greeting</h2>
//         <p><span>Text:</span> {prop.content}</p>
//         <p><span>Created at:</span> {prop.created_at}</p>
//       </div>
//     );
//   } else {
//     return (
//       <div className="message">
//         <h2>Greeting to you </h2>
//         <p>No greeting to tell you</p>
//       </div>
//     );
//   }
// }

// export default Message;
