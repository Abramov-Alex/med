import {Col, Row, Statistic} from "antd";
import {AppstoreOutlined, CheckCircleOutlined, IssuesCloseOutlined, StopOutlined} from "@ant-design/icons";
import React from "react";
import { RingProgress } from '@ant-design/plots';

const config1 = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.3,
    color: ['#F4664A', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
        title: {
            style: {
                color: '#363636',
                fontSize: '12px',
                lineHeight: '14px',
            },
            formatter: () => 'Чёт там 1',
        },
    },
};
const config2 = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.6,
    color: ['#6495ed', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
        title: {
            style: {
                color: '#363636',
                fontSize: '12px',
                lineHeight: '14px',
            },
            formatter: () => 'Чёт там 2',
        },
    },
};
const config3 = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.2,
    color: ['#F4664A', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
        title: {
            style: {
                color: '#363636',
                fontSize: '12px',
                lineHeight: '14px',
            },
            formatter: () => 'Чёт там 3',
        },
    },
};
const config4 = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.8,
    color: ['#79b58b', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
        title: {
            style: {
                color: '#363636',
                fontSize: '12px',
                lineHeight: '14px',
            },
            formatter: () => 'Чёт там 4',
        },
    },
};

export default function Statistics() {
    return (
        <>
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
                <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{textAlign: "center"}}>
                    <br/><br/>
                    <span className="ant-statistic-title">Показатель 1</span>
                    <br/><br/>
                    <RingProgress {...config1} />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{textAlign: "center"}}>
                    <br/><br/>
                    <span className="ant-statistic-title">Показатель 2</span>
                    <br/><br/>
                    <RingProgress {...config2} />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{textAlign: "center"}}>
                    <br/><br/>
                    <span className="ant-statistic-title">Показатель 3</span>
                    <br/><br/>
                    <RingProgress {...config3} />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{textAlign: "center"}}>
                    <br/><br/>
                    <span className="ant-statistic-title">Показатель 4</span>
                    <br/><br/>
                    <RingProgress {...config4} />
                </Col>
            </Row>
        </>
    )
}