import React from "react";
import {Menu} from "antd";
import {BookTwoTone, CopyTwoTone, FileTextTwoTone, SnippetsTwoTone} from "@ant-design/icons";

export default function TopMenu() {
    return (
        <>
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
        </>
    )
}