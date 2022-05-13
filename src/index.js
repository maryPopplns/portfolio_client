import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import Blog from './components/blog/Blog';
import Navbar from './components/navbar/Navbar';
import reportWebVitals from './reportWebVitals';
import ContactMe from './components/contactMe/ContactMe';
import Projects from './components/projects/Projects';
import Homepage from './components/homepage/Homepage';
import ReadBlog from './components/readBlog/ReadBlog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path='blog' element={<Blog />} />
            <Route path='blog/:blogID' element={<ReadBlog />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contactMe' element={<ContactMe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
