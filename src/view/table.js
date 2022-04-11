import React from "react";
import {Button, Tag, Table} from "antd";
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    DeleteOutlined,
    FolderOpenOutlined,
    SyncOutlined
} from "@ant-design/icons";

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

export default function CardsTable() {
    return (
        <>
            <Table scroll={{ x: 1200 }} columns={columns} dataSource={data} />
        </>
    )
}