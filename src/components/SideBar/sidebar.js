import { React, Component } from 'react'
import logo from '../../assets/mill_logo.png'
import textLogo from '../../assets/text-logo.png'

import { Menu, Layout } from 'antd';

import { AppContext } from '../../App.js'

import './sidebar.css'

import {
        EnvironmentOutlined,
        PieChartOutlined,
        ScheduleOutlined,
        ToolOutlined,
} from '@ant-design/icons';
    

const { Sider } = Layout;

class SideBar extends Component {

    state = {
        collapsed: false,
        user: 'Ashley',
        currentPage: 'Dashboard',
    };
    
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
    
    render() {
        const { collapsed } = this.state;
        return (
            <AppContext.Consumer>
                {({currentCUser, setCurrentCUser, setCurrentPage}) => {
                    return (
                        <>
                            <Sider className={`sidebar-frame ${this.state.collapsed && 'collapsed'}`} collapsible collapsed={collapsed} onCollapse={this.onCollapse} >
                                <div onClick={() => setCurrentPage('Dashboard')} className={`logo ${this.state.collapsed && 'collapsed-logo'}`} >
                                    <img src={logo} alt='Windmill logo'/>
                                    {!this.state.collapsed && (<img className='text-logo' src={textLogo} alt='Skyline text logo'/>)}
                                </div>
                                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                                    <Menu.Item key="1" icon={<EnvironmentOutlined />} onClick={() => setCurrentPage('Fleet')} style={{ marginTop: '10px'}}>
                                    Fleet
                                    </Menu.Item>
                                    <Menu.Item key="2" onClick={() => setCurrentPage('Inspections')} icon={<ScheduleOutlined />}>
                                    Inspections
                                    </Menu.Item>
                                    <Menu.Item key="10" onClick={() => setCurrentPage('Work Orders')} icon={<ToolOutlined />}>
                                    Work Orders
                                    </Menu.Item>
                                    <Menu.Item key="9" onClick={() => setCurrentPage('Analytics')} icon={<PieChartOutlined />}>
                                    Analytics
                                    </Menu.Item>
                                </Menu>
                            </Sider>
                        </>
                    )
                }}
            </AppContext.Consumer>
        )
    }
}

export default SideBar

// END of document
