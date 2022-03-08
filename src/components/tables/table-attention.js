import { MainContext } from '../../context/application/MainState';
import { Table, Tag, Space } from 'antd';
import './table-attention.css'
import { useContext } from 'react';

export const AttRequired = () => {

    const { state: {userPerm, dataSet}} = useContext(MainContext)

    const columns = [
    {
        title: 'Site',
        dataIndex: 'site',
        key: 'site',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Turbines',
        dataIndex: 'turbines',
        key: 'turbines',
    },
    {
        title: 'Repairs',
        dataIndex: 'repairs',
        key: 'repairs',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
        <>
            {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'on hold') {
                color = 'volcano';
            }
            if (tag === 'needs update') {
                color = 'pink';
            }
            if (tag === 'operational') {
                color = 'green';
            }
            return (
                <Tag color={color} key={tag}>
                {tag.toUpperCase()}
                </Tag>
            );
            })}
        </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
        <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
        </Space>
        ),
    },
    ];

    const californiaData = [
        {
            key: '1',
            site: 'Fresno Hills',
            turbines: 134,
            repairs: 23,
            tags: ['operational', 'needs update'],
        },
        {
            key: '2',
            site: 'Yosemite Region',
            turbines: 42,
            repairs: 2,
            tags: ['operational'],
        },
        {
            key: '3',
            site: 'Merced Valley',
            turbines: 75,
            repairs: 45,
            tags: ['on hold', 'needs update'],
        },
    ];

    const oregonData = [
        {
            key: '1',
            site: 'Portland Heights',
            turbines: 34,
            repairs: 23,
            tags: ['on hold'],
        },
        {
            key: '2',
            site: 'Bend District',
            turbines: 342,
            repairs: 28,
            tags: ['operational'],
        },
        {
            key: '3',
            site: 'Southern Region',
            turbines: 35,
            repairs: 15,
            tags: ['operational', 'needs update'],
        },
    ];

    return (
        userPerm === 1 && <Table className='attention-table' columns={columns} dataSource={dataSet === 'Cal' ? californiaData : oregonData } />
        )

}

// END of document
