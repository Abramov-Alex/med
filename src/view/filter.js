import {Button, Col, DatePicker, Input, Row, Select} from "antd";
import {CheckCircleOutlined, DeleteOutlined, PlusCircleOutlined} from "@ant-design/icons";
import React from "react";

const { Search } = Input;
const { Option } = Select;

const onSearch = value => console.log(value);
function handleChange(value) {
    console.log(`selected ${value}`);
}
function onChange(date, dateString) {
    console.log(date, dateString);
}

export default function Filter() {
    return (
        <>
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
                <Col xs={24} sm={12} md={{ span: 6, offset: 6 }} lg={{ span: 6, offset: 6 }} xl={{ span: 6, offset: 6 }}>
                    <p/>
                    <Button style={{width: "100%"}} type="default" icon={<PlusCircleOutlined />}>
                        Создать
                    </Button>
                </Col>
            </Row>
        </>
    )
}