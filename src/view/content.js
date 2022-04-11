import React from "react";
import {Col, Row} from "antd";
import CardsTable from './table';
import TopMenu from "./topMenu";
import Filter from "./filter";
import Statistics from "./statistics";

export default function Content() {
    return (
        <>
            <div className="mainDiv accordion">
                <Row gutter={[20,20]}>
                    <Col span={24}>
                        <div className="whiteDivMenu">
                            <TopMenu />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                        <div className="whiteDiv">
                            <Filter />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                        <div className="whiteDiv">
                            <Statistics />
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="whiteDiv">
                            <CardsTable />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}