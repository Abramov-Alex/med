import React from "react";
import {Button, Col, Input, Row} from "antd";
import logo from "../resources/img/logo.png";

export default function Login() {
    return (
        <>
            <Row justify="center" style={{background: "#e4ecfd", height: "100vh"}}>
                <Col span={5}>
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
                                <Button type="primary" size="large" style={{width: "100%"}}>ВОЙТИ</Button>
                            </Col>
                            <Col span={16}>
                                <Button type="default" size="large" style={{width: "100%"}}>ЗАРЕГИСТРИРОВАТЬСЯ</Button>
                            </Col>
                        </Row>
                        <br/><br/>
                        <p style={{fontWeight: 800, borderRadius: "0 0 10px 10px", padding: "35px", marginTop: "0", textAlign: "center", background: "darkseagreen", color: "white"}}>
                            ИНСТРУКЦИЯ
                        </p>
                    </div>
                </Col>
            </Row>
        </>
    )
}