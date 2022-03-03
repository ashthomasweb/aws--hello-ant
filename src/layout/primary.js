
import { React, Component } from 'react'

import logo from '../assets/mill_logo.png'
import textLogo from '../assets/text-logo.png'


import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  // UserOutlined,
} from '@ant-design/icons';

import './primary.css'

const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

class SiderDemo extends Component {
  state = {
    collapsed: false,
    user: 'Ashley',
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" >
            <img src={logo} alt='Windmill logo'/>
            {!this.state.collapsed && (<img className='text-logo' src={textLogo} alt='Skyline text logo'/>)}
          </div>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<TeamOutlined />} style={{ marginTop: '30px'}}>
              Fleet
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Inspections
            </Menu.Item>
            <Menu.Item key="10" icon={<PieChartOutlined />}>
              Work Orders
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Analytics
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="header" />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>{this.state.user}</Breadcrumb.Item>
            </Breadcrumb>
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
