import React from 'react';
import 'antd/dist/antd.min.css';
import './resources/css/main.css';
import './index.css';
import Header from './view/header';
import Sider from './view/sider';
import Content from './view/content'
import Login from "./view/login";

export default function App() {
    return (
        <>
{/*            <Login />*/}
            <Header />
            <Sider />
            <Content />
        </>
  );
}
