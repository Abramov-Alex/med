import React, { useState } from 'react';
import {
    Avatar,
    BackTop,
    Button,
    Col,
    DatePicker,
    Drawer,
    Input,
    Menu,
    Popover,
    Row,
    Select,
    Statistic,
    Table,
    Tag
} from "antd";
import {
    HomeOutlined,
    BarsOutlined,
    UserOutlined,
    MoreOutlined,
    MessageOutlined,
    SettingOutlined,
    QuestionCircleOutlined,
    SafetyOutlined,
    LogoutOutlined,
    CheckCircleOutlined,
    DeleteOutlined,
    AppstoreOutlined,
    IssuesCloseOutlined,
    StopOutlined,
    FolderOpenOutlined,
    CloseCircleOutlined,
    SyncOutlined,
    SnippetsTwoTone,
    BookTwoTone,
    FileTextTwoTone,
    CopyTwoTone,
    UpOutlined,
    CameraOutlined,
    FileSearchOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './resources/css/main.css';
import './index.css';
import logo from './resources/img/logo.png';

const { Search } = Input;
const { Option } = Select;

const onSearch = value => console.log(value);
function handleChange(value) {
    console.log(`selected ${value}`);
}
function onChange(date, dateString) {
    console.log(date, dateString);
}

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

const columns = [
    {
        title: 'Наименование',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Организация',
        dataIndex: 'shortname',
        key: 'shortname',
    },
    {
        title: 'Номер',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Статус',
        key: 'status',
        dataIndex: 'status',
    },
    {
        title: 'Действия',
        key: 'action',
        align: 'center',
        fixed: 'right',
        width: 255,
        render: () => (
            <>
                <Button type="link"><FolderOpenOutlined />Открыть</Button>
                <Button type="link" danger><DeleteOutlined />Удалить</Button>
            </>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'Наименование 1 ...',
        shortname: 'Организация 1 ...',
        number: '4682346134-234',
        status:
            [<>
                <Tag icon={<CheckCircleOutlined/>} color="green">
                    Сохранено
                </Tag>
            </>],
    },
    {
        key: '2',
        name: 'Наименование 2 ...',
        shortname: 'Организация 2 ...',
        number: '2347875563-764',
        status:
            [<>
                <Tag icon={<SyncOutlined spin />} color="blue">
                    Редактируется
                </Tag>
            </>],
    },
    {
        key: '2',
        name: 'Наименование 3 ...',
        shortname: 'Организация 3 ...',
        number: '2347875563-764',
        status:
            [<>
                <Tag icon={<CloseCircleOutlined/>} color="red">
                    Возврат
                </Tag>
            </>],
    },
    {
        key: '2',
        name: 'Наименование 4 ...',
        shortname: 'Организация 4 ...',
        number: '2347875563-764',
        status:
            [<>
                <Tag icon={<SyncOutlined spin />} color="blue">
                    Редактируется
                </Tag>
            </>],
    },
    {
        key: '2',
        name: 'Наименование 5 ...',
        shortname: 'Организация 5 ...',
        number: '2347875563-764',
        status:
            [<>
                <Tag icon={<SyncOutlined spin />} color="blue">
                    Редактируется
                </Tag>
            </>],
    },
    {
        key: '3',
        name: 'Наименование 6 ...',
        shortname: 'Организация 6 ...',
        number: '3473683568-234',
        status:
            [<>
                <Tag icon={<CloseCircleOutlined/>} color="red">
                    Возврат
                </Tag>
            </>],
    },
    {
        key: '4',
        name: 'Наименование 7 ...',
        shortname: 'Организация 7 ...',
        number: '9883493690-175',
        status:
            [<>
                <Tag icon={<CheckCircleOutlined/>} color="green">
                    Сохранено
                </Tag>
            </>],
    },
    {
        key: '5',
        name: 'Наименование 8 ...',
        shortname: 'Организация 8 ...',
        number: '9883493690-175',
        status:
            [<>
                <Tag icon={<CheckCircleOutlined/>} color="green">
                    Сохранено
                </Tag>
            </>],
    },
    {
        key: '6',
        name: 'Наименование 9 ...',
        shortname: 'Организация 9 ...',
        number: '1237904574-265',
        status:
            [<>
                <Tag icon={<SyncOutlined spin />} color="blue">
                    Редактируется
                </Tag>
            </>],
    },
    {
        key: '3',
        name: 'Наименование 10 ...',
        shortname: 'Организация 10 ...',
        number: '3473683568-234',
        status:
            [<>
                <Tag icon={<CloseCircleOutlined/>} color="red">
                    Возврат
                </Tag>
            </>],
    },
];

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

function App() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
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
            <Row>
                <Col span={24}>
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
                                <a href="#">
                                    <Popover placement="right" content="Выйти">
                                        <span className="icon"><LogoutOutlined /></span>
                                    </Popover>
                                    <span className="title">Выйти</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mainDiv accordion">
                        <Row gutter={[20,20]}>
                            <Col span={24}>
                                <div className="whiteDivMenu">
                                    <Menu selectedKeys="1" mode="horizontal">
                                        <Menu.Item key="1" icon={<SnippetsTwoTone />}>
                                            Раздел один
                                        </Menu.Item>
                                        <Menu.Item key="2" icon={<BookTwoTone />}>
                                            Раздел два
                                        </Menu.Item>
                                        <Menu.Item key="3" icon={<FileTextTwoTone />}>
                                            Раздел три
                                        </Menu.Item>
                                        <Menu.Item key="4" icon={<CopyTwoTone />}>
                                            Раздел четыре
                                        </Menu.Item>
                                    </Menu>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <div className="whiteDiv">
                                    <Row gutter={[20,10]}>
                                        <Col span={24}>
                                            <p className="nameDiv">Фильтрация</p>
                                        </Col>
                                        <Col span={24}>
                                            <span className="label">Поиск</span>
                                            <Search allowClear placeholder="поиск ..." onSearch={onSearch} enterButton />
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                            <span className="label">Фильтр 1</span>
                                            <Input allowClear placeholder="фильтр ..." />
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                            <span className="label">Фильтр 2</span>
                                            <Input allowClear placeholder="фильтр ..." />
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                            <span className="label">Выбор 1</span>
                                            <Select allowClear placeholder="выбор ..." style={{ width: "100%" }} onChange={handleChange}>
                                                <Option value="jack">111</Option>
                                                <Option value="lucy">222</Option>
                                                <Option value="Yiminghe">333</Option>
                                            </Select>
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                            <span className="label">Выбор 2</span>
                                            <Select allowClear placeholder="выбор ..." style={{ width: "100%" }} onChange={handleChange}>
                                                <Option value="jack">111</Option>
                                                <Option value="lucy">222</Option>
                                                <Option value="Yiminghe">333</Option>
                                            </Select>
                                        </Col>
                                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                            <span className="label">Дата 1</span>
                                            <DatePicker allowClear style={{ width: "100%" }} placeholder="дата ..." onChange={onChange} />
                                        </Col>
                                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                            <span className="label">Дата 2</span>
                                            <DatePicker allowClear style={{ width: "100%" }} placeholder="дата ..." onChange={onChange} />
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                            <span className="label">Выбор 3</span>
                                            <Select allowClear placeholder="выбор ..." style={{ width: "100%" }} onChange={handleChange}>
                                                <Option value="jack">111</Option>
                                                <Option value="lucy">222</Option>
                                                <Option value="Yiminghe">333</Option>
                                            </Select>
                                        </Col>
                                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                            <p/>
                                            <Button style={{width: "100%"}} type="primary" icon={<CheckCircleOutlined />}>
                                                Применить
                                            </Button>
                                        </Col>
                                        <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                            <p/>
                                            <Button style={{width: "100%"}} type="primary" danger icon={<DeleteOutlined />}>
                                                Очистить
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                                <div className="whiteDiv">
                                    <Row gutter={[20,10]}>
                                        <Col span={24}>
                                            <p className="nameDiv">Статистика</p>
                                        </Col>
                                        <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{textAlign: "center"}}>
                                            <Statistic
                                                title="Всего карт"
                                                value={248}
                                                precision={0}
                                                prefix={<AppstoreOutlined />}
                                                suffix="шт."
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{textAlign: "center"}}>
                                            <Statistic
                                                title="Подтверждено"
                                                value={172}
                                                precision={0}
                                                valueStyle={{ color: '#558d66' }}
                                                prefix={<CheckCircleOutlined />}
                                                suffix="шт."
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{textAlign: "center"}}>
                                            <Statistic
                                                title="Редактируется"
                                                value={51}
                                                precision={0}
                                                valueStyle={{ color: '#6495ed' }}
                                                prefix={<IssuesCloseOutlined />}
                                                suffix="шт."
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{textAlign: "center"}}>
                                            <Statistic
                                                title="Отклонено"
                                                value={25}
                                                precision={0}
                                                valueStyle={{ color: '#ff4d4f' }}
                                                prefix={<StopOutlined />}
                                                suffix="шт."
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className="whiteDiv">
                                    <Table scroll={{ x: 1200 }} columns={columns} dataSource={data} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Drawer width="50%" title="Профиль пользователя" placement="right" onClose={onClose} visible={visible}>
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
            </Drawer>
        </>
  );
}

export default App;
