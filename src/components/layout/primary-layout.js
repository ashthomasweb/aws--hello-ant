import { React, Component } from 'react'
import { Layout } from 'antd';
import MainFrame from '../main-frame/main-frame.js'
import SideMenu from '../side-menu/side-menu.js'
import './primary-layout.css'

class SiderDemo extends Component {
  render() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
          <SideMenu/>
          <MainFrame />
        </Layout>
    );
  }
}

export default SiderDemo

// END of document
