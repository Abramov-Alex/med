import React, { useState } from 'react';
import {BackTop, Col, Drawer, Popover, Row} from "antd";
import {
    BarsOutlined,
    MoreOutlined,
    UpOutlined,
    UserOutlined
} from "@ant-design/icons";
import logo from "../resources/img/logo.png";
import Profile from "./profile";

window.onload = function(){
    let menuToggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation')
    let main = document.querySelector('.mainDiv')
    menuToggle.onclick = function(){
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
        main.classList.toggle('accordion');
    }
    // add active class in selected list item
    let list = document.querySelectorAll('.list');
    for (let i = 0; i < list.length; i++) {
        list[i].onclick = function() {
            let j = 0;
            while(j < list.length) {
                list[j++].className = 'list';
            }
            list[i].className = 'list active';
        }
    }
};

const style = {
    height: 70,
    width: 70,
    lineHeight: '67px',
    borderRadius: 35,
    backgroundColor: '#79b58b',
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
};

export default function Header() {
    const showDrawer = () => {
        setVisible(true);
    };
    const [visible, setVisible] = useState(false);
    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <BackTop>
                <div style={style}><UpOutlined /></div>
            </BackTop>
            <Row>
                <Col span={24}>
                    <div className="beforeHeader"/>
                    <div className="header">
                        <Popover placement="right" content="Меню">
                            <div className="fakeToggle">
                                <div className="toggle active">
                                    <MoreOutlined name="menu-outline" className="open" />
                                    <BarsOutlined name="close-outline" className="close" />
                                </div>
                            </div>
                        </Popover>
                        <Row>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <div style={{ padding: '0 0 0 100px'}}>
                                    <p style={{marginTop: "13px"}}>
                                        <img src={logo} className="logo" alt="?"/>
                                        <span className="nameOne">ИАС</span>
                                        <span className="nameTwo">ХУЯС</span>
                                    </p>
                                </div>
                            </Col>
                            <Col xs={0} sm={0} md={12} lg={12} xl={12}>
                                <div style={{ padding: '0 100px 0 0' }}>
                                    <p style={{marginTop: "18px", textAlign: "right"}}>
                                        <span className="phone"> +7 800 555-35-35</span>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Popover placement="bottom" content="Профиль" onClick={showDrawer}>
                            <div className="profile">
                                <UserOutlined />
                            </div>
                        </Popover>
                    </div>
                </Col>
            </Row>
            <Drawer width="50%" title="Профиль пользователя" placement="right" onClose={onClose} visible={visible}>
                <Profile />
            </Drawer>
        </>
    )
}