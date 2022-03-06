import { React, useContext } from 'react'
import { Layout, Breadcrumb, Typography, Button } from 'antd';
import { Link, Outlet } from 'react-router-dom'
import { MainContext } from '../../context/application/MainState'
import MainState from '../../context/application/MainState';
import './main-frame.css'

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

const MainFrame = () => {
    
    const { state: {currentPage, user}, dispatch } = useContext(MainContext)

    return (
        <MainState>
            <Layout className="site-layout">
                <div><Title className="nav-selection-frame-title" level={2}>{currentPage}</Title>
                <Breadcrumb className="user-info-display">
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>{user}</Breadcrumb.Item>
                </Breadcrumb></div>
                <Header className="frame-navigation" >
                    <Link to="/expenses">Expenses</Link>
                    <Link style={{margin: '0 0 0 10px' }} to="/invoices">Invoices</Link>
                    <Button style={{margin: '0 10px'}} onClick={() => console.log(user)}>{user}</Button>
                    <Button onClick={() => dispatch({ type: 'SET_USER', payload: 'Ash'} )}>Change</Button>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    This is a mock application being built in the style of an existing application, using promotional material as a model.<br/><br/>
                    Now with Context, BrowserRouter, a Reducer, and a cleanly packaged Provider/Consumer component.
                </div>
                </Content>
                <Outlet />
                <Footer style={{ textAlign: 'center' }}>UI built with Ant Design</Footer>
            </Layout>
        </MainState>
    )
}

export default MainFrame

// END of document
