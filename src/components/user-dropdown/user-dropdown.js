import { useContext } from 'react';
import { MainContext } from '../../context/application/MainState';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export const DropDown = () => {
    const { dispatch } = useContext(MainContext)

    const menu = (
        <Menu>
            <Menu.Item key='0'onClick={() => dispatch({ type: 'SET_USER', payload: 'California Wind Farms'} )}>
                California Wind Farms
            </Menu.Item>
            <Menu.Item key='1' onClick={() => dispatch({ type: 'SET_USER', payload: 'Oregon Renewables'} )}>
                Oregon Renewables
            </Menu.Item>
            <Menu.Item key='2' onClick={() => dispatch({ type: 'SET_USER', payload: 'Local Contractor'} )}>
                Local Contractor
            </Menu.Item>
            <Menu.Item key='3' onClick={() => dispatch({ type: 'SET_USER', payload: 'Regional Contractor'} )}>
                Regional Contractor
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                User Select <DownOutlined />
            </a>
        </Dropdown>
    )
}
