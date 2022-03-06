import { React, useContext } from 'react'
import { Menu, Layout } from 'antd';
import { MainContext } from '../../context/application/MainState'
import { Link } from 'react-router-dom'
import logo from '../../assets/mill_logo.png'
import textLogo from '../../assets/text-logo.png'
import {
    EnvironmentOutlined,
    PieChartOutlined,
    ScheduleOutlined,
    ToolOutlined,
} from '@ant-design/icons';
import './sidebar.css'

const { Sider } = Layout;

const SideBar = () => {
      
    const { state: {collapsed}, dispatch } = useContext(MainContext)

    return (
        <Sider className={`sidebar-frame ${collapsed && 'collapsed'}`} collapsible collapsed={collapsed} onCollapse={() => dispatch({ type: "TOG_COLLAPSE" })} >
            <div onClick={() => dispatch({ type: 'SET_PAGETITLE', payload: 'Dashboard' })} className={`logo ${collapsed && 'collapsed-logo'}`} >
                <img src={logo} alt='Windmill logo'/>
                {!collapsed && (<img className='text-logo' src={textLogo} alt='Skyline text logo'/>)}
            </div>
            <Menu theme="light" mode="inline">
                <Menu.Item key="1" icon={<EnvironmentOutlined />} onClick={() => dispatch({ type: 'SET_PAGETITLE', payload: 'Fleet' })} style={{ marginTop: '10px'}}>
                    <Link to="/invoices">Fleet</Link>
                </Menu.Item>
                <Menu.Item key="2" onClick={() => dispatch({ type: 'SET_PAGETITLE', payload: 'Inspections' })} icon={<ScheduleOutlined />}>
                    <Link to="/expenses">Inspections</Link>
                </Menu.Item>
                <Menu.Item key="10" onClick={() => dispatch({ type: 'SET_PAGETITLE', payload: 'Work Orders' })} icon={<ToolOutlined />}>
                    <Link to="/invoices">Work Orders</Link>
                </Menu.Item>
                <Menu.Item key="9" onClick={() => dispatch({ type: 'SET_PAGETITLE', payload: 'Analytics' })} icon={<PieChartOutlined />}>
                    <Link to="/expenses">Analytics</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default SideBar

// END of document
