import { React, Component } from 'react'
import { Layout } from 'antd';
import MainFrame from '../MainFrame/main-frame.js'
import SideBar from '../SideBar/sidebar'
import './primary.css'

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
