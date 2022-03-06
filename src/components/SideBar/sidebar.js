import { React, useContext } from 'react'
import logo from '../../assets/mill_logo.png'
import textLogo from '../../assets/text-logo.png'

import { Menu, Layout } from 'antd';

import { MainContext } from '../../context/application/MainState'

import './sidebar.css'

import {
        EnvironmentOutlined,
        PieChartOutlined,
        ScheduleOutlined,
        ToolOutlined,
} from '@ant-design/icons';

import MainState from '../../context/application/MainState';

const { Sider } = Layout;

const SideBar = () => {
        // state = {
        //     collapsed: false,
        //     user: 'Ashley',
        //     currentPage: 'Dashboard',
        // };
        
        // onCollapse = collapsed => {
        //     this.setState({ collapsed });
        // };
    
        // const { collapsed } = this.state;
        const { state: {collapsed}, dispatch } = useContext(MainContext)
        return (
            <MainState>
                <Sider className={`sidebar-frame ${collapsed && 'collapsed'}`} collapsible collapsed={collapsed} onCollapse={() => dispatch({ type: "TOG_COLLAPSE" })} >
                    <div onClick={() => dispatch({ type: 'SET_PAGETITLE', payload: 'Dashboard' })} className={`logo ${collapsed && 'collapsed-logo'}`} >
                        <img src={logo} alt='Windmill logo'/>
                        {!collapsed && (<img className='text-logo' src={textLogo} alt='Skyline text logo'/>)}
                    </div>
                    <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<EnvironmentOutlined />} onClick={() => dispatch({ type: 'SET_PAGETITLE', payload: 'Fleet' })} style={{ marginTop: '10px'}}>
                        Fleet
                        </Menu.Item>
                        <Menu.Item key="2" onClick={() => dispatch({ type: 'SET_PAGETITLE', payload: 'Inspections' })} icon={<ScheduleOutlined />}>
                        Inspections
                        </Menu.Item>
                        <Menu.Item key="10" onClick={() => dispatch({ type: 'SET_PAGETITLE', payload: 'Work Orders' })} icon={<ToolOutlined />}>
                        Work Orders
                        </Menu.Item>
                        <Menu.Item key="9" onClick={() => dispatch({ type: 'SET_PAGETITLE', payload: 'Analytics' })} icon={<PieChartOutlined />}>
                        Analytics
                        </Menu.Item>
                    </Menu>
                </Sider>
            </MainState>
        )
    }


export default SideBar

// END of document
