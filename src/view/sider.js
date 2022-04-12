import {Popover} from "antd";
import {Link} from "react-router-dom";
import {
    HomeOutlined,
    LogoutOutlined,
    MessageOutlined,
    QuestionCircleOutlined,
    SafetyOutlined,
    SettingOutlined,
    UserOutlined
} from "@ant-design/icons";
import React from "react";

export default function Sider() {
    return (
        <>
            <div className="navigation">
                <ul>
                    <li className="list active">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <Popover placement="right" content="Главная">
                                <span className="icon"><HomeOutlined /></span>
                            </Popover>
                            <span className="title">Главная</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <Popover placement="right" content="Профиль">
                                <span className="icon"><UserOutlined /></span>
                            </Popover>
                            <span className="title">Профиль</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <Popover placement="right" content="Сообщения">
                                <span className="icon"><MessageOutlined /></span>
                            </Popover>
                            <span className="title">Сообщения</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <Popover placement="right" content="Настройки">
                                <span className="icon"><SettingOutlined /></span>
                            </Popover>
                            <span className="title">Настройки</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <Popover placement="right" content="Помощь">
                                <span className="icon"><QuestionCircleOutlined /></span>
                            </Popover>
                            <span className="title">Помощь</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <a href="#">
                            <Popover placement="right" content="Пароль">
                                <span className="icon"><SafetyOutlined /></span>
                            </Popover>
                            <span className="title">Пароль</span>
                        </a>
                    </li>
                    <li className="list">
                        <b></b>
                        <b></b>
                        <Link to="/">
                            <Popover placement="right" content="Выйти">
                                <span className="icon"><LogoutOutlined /></span>
                            </Popover>
                            <span className="title">Выйти</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}