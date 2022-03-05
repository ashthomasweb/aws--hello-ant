import { React, Component } from 'react'

import { Layout, Breadcrumb, Typography, Button } from 'antd';

import { AppContext } from '../../App.js'

import './main-frame.css'

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

class MainFrame extends Component {
    state = {
        collapsed: false,
        user: 'Ashley',
        currentPage: 'Dashboard',
      };

    render() {
        return (
        <AppContext.Consumer>
            {({currentCUser, setCurrentCUser}) => {
                return (
                <Layout className="site-layout">
                    <div><Title className="nav-selection-frame-title" level={2}>{this.state.currentPage}</Title>
                    <Breadcrumb className="user-info-display">
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>{this.state.user}</Breadcrumb.Item>
                    </Breadcrumb></div>
                    <Header className="frame-navigation" />
                    <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        This is a mock application being built in the style of an existing application, using promotional material as a model. Now with Context and basic Hooks.
                    </div>
                    <Button onClick={() => console.log(currentCUser)}>{currentCUser}</Button>
                    <Button onClick={() => setCurrentCUser(() => Math.random())}>Change</Button>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>UI built with Ant Design</Footer>
                </Layout>
            )}}
        </AppContext.Consumer>

        )
    }
}


export default MainFrame

// END of document
