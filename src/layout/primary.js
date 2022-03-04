
import { React, Component } from 'react'

import logo from '../assets/mill_logo.png'
import textLogo from '../assets/text-logo.png'

import { Layout, Menu, Breadcrumb, Typography } from 'antd';

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  // UserOutlined,
} from '@ant-design/icons';

import './primary.css'


const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

class SiderDemo extends Component {
  state = {
    collapsed: false,
    user: 'Ashley',
    currentPage: 'Welcome',
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider className={`sidebar-frame ${this.state.collapsed && 'collapsed'}`} collapsible collapsed={collapsed} onCollapse={this.onCollapse} >
          <div className={`logo ${this.state.collapsed && 'collapsed-logo'}`} >
            <img src={logo} alt='Windmill logo'/>
            {!this.state.collapsed && (<img className='text-logo' src={textLogo} alt='Skyline text logo'/>)}
          </div>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<TeamOutlined />} onClick={() => this.setState({currentPage: 'Fleet'})} style={{ marginTop: '10px'}}>
              Fleet
            </Menu.Item>
            <Menu.Item key="2" onClick={() => this.setState({currentPage: 'Inspections'})} icon={<DesktopOutlined />}>
              Inspections
            </Menu.Item>
            <Menu.Item key="10" onClick={() => this.setState({currentPage: 'Work Orders'})} icon={<PieChartOutlined />}>
              Work Orders
            </Menu.Item>
            <Menu.Item key="9" onClick={() => this.setState({currentPage: 'Analytics'})} icon={<FileOutlined />}>
              Analytics
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <div><Title className="nav-selection-frame-title" level={2}>{this.state.currentPage}</Title>
          <Breadcrumb className="user-info-display">
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>{this.state.user}</Breadcrumb.Item>
            </Breadcrumb></div>
          <Header className="frame-navigation" />
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              This is a mock application being built in the style of an existing application, using promotional material as a model.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>UI built with Ant Design</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo

// END of document
