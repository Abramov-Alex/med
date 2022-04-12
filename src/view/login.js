import React from "react";
import {Link} from "react-router-dom";
import {Button, Col, Input, Row} from "antd";
import logo from "../resources/img/logo.png";

export default function Login() {
    return (
        <Row align="middle" style={{background: "white", height: "100vh"}}>
            <Col xs={{ span: 16, offset: 4 }} sm={{ span: 12, offset: 6 }} md={{ span: 9, offset: 4 }} lg={{ span: 9, offset: 5 }} xl={{ span: 5, offset: 7 }}>
                <div className="logindiv">
                    <Row justify="center" gutter={[20,20]}>
                        <Col span={24}>
                            <p style={{borderRadius: "10px 10px 0 0", padding: "20px", marginTop: "0", textAlign: "center", background: "darkseagreen"}}>
                                <img src={logo} className="logo" alt="?"/>
                                <span className="nameOne">ИАС</span>
                                <span className="nameTwo">ХУЯС</span>
                            </p>
                        </Col>
                        <Col span={16}>
                            <span className="label">Логин</span>
                            <Input size="large" allowClear placeholder="..."/>
                        </Col>
                        <Col span={16}>
                            <span className="label">Пароль</span>
                            <Input.Password size="large" allowClear placeholder="..."/>
                        </Col>
                        <Col span={16} style={{textAlign: "center"}}>
                            <Button type="link">Восстановить пароль</Button>
                        </Col>
                        <Col span={16}>
                            <Link to="/main">
                                <Button type="primary" size="large" style={{width: "100%"}}>ВОЙТИ</Button>
                            </Link>
                        </Col>
                        <Col span={16}>
                            <Button type="default" size="large" style={{width: "100%"}}>ЗАРЕГИСТРИРОВАТЬСЯ</Button>
                        </Col>
                    </Row>
                    <br/><br/>
                    <p className="loginInstruction">
                        ИНСТРУКЦИЯ
                    </p>
                </div>
            </Col>
            <Col xs={0} sm={0} md={7} lg={7} xl={7}>
                <p className="loginSystemName">Информационно-аналитическая система очередного бессмысленного сбора кала и мочи</p>
                <p style={{marginLeft: "29px"}}>
                    <span className="phoneLogin"> +7 800 555-35-35</span>
                </p>
            </Col>
        </Row>
    )
}