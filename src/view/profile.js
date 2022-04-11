import React from 'react';
import {Avatar, Button, Col, Popover, Row} from "antd";
import {CameraOutlined, FileSearchOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";

export default function Profile() {
    return (
        <>
            <Row gutter={[20,20]}>
                <Col span={8}>
                    <div className="whiteDivDrawer" style={{textAlign: "center"}}>
                        <Avatar size={170} icon={<UserOutlined />} />
                        <br/><br/>
                        <p className="namePerson">Абрамов Алескей Анатольевич</p>
                        <Popover placement="top" content="Фото">
                            <Button size="large" type="primary" shape="circle" icon={<CameraOutlined />} style={{marginRight: 10}} />
                        </Popover>
                        <Popover placement="top" content="Настройки">
                            <Button size="large" type="primary" shape="circle" icon={<SettingOutlined />} style={{marginRight: 10}} />
                        </Popover>
                        <Popover placement="top" content="Инструкции">
                            <Button size="large" type="primary" shape="circle" icon={<FileSearchOutlined />} />
                        </Popover>
                    </div>
                </Col>
                <Col span={16}>
                    <div className="whiteDivDrawer">
                        <p className="nameDiv">Персональная информация</p>
                    </div>
                </Col>
                <Col span={24}>
                    <div className="whiteDivDrawer">
                        <p className="nameDiv">Рабочая информация</p>
                    </div>
                </Col>
            </Row>
        </>
    )
}