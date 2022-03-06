import { React, Component } from 'react'
import { Layout } from 'antd';
import MainFrame from '../main-frame/main-frame.js'
import SideBar from '../sidebar/sidebar'
import './primary-layout.css'

class SiderDemo extends Component {
  render() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
          <SideBar/>
          <MainFrame />
        </Layout>
    );
  }
}

export default SiderDemo

// END of document
