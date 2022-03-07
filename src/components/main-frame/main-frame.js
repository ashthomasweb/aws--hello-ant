import { React, useContext } from 'react'
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom'
import { MainContext } from '../../context/application/MainState'
import { MainHeader } from '../main-header/main-header.js'
import { DashBoard } from '../../routes/dashboard.js'
import './main-frame.css'

const { Footer } = Layout;

const MainFrame = () => {
    
    const { state: { currentPage } } = useContext(MainContext)

    return (
        <Layout className="site-layout">
            <MainHeader />
            {currentPage === 'Dashboard' && (<DashBoard />)}
            <Outlet />
            <Footer style={{ textAlign: 'center' }}>UI built with Ant Design, hosted with AWS Amplify</Footer>
        </Layout>
    )
}

export default MainFrame

// END of document
