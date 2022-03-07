import { Typography, Breadcrumb } from 'antd'
import { useContext } from 'react'
import { MainContext } from '../../context/application/MainState.js'
import { DropDown } from '../user-dropdown/user-dropdown.js'

const { Title } = Typography

export const MainHeader = () => {
    const { state: {currentPage, user} } = useContext(MainContext)
    return (
        <div className="page-header">
            <Title className="nav-selection-frame-title" level={2}>{currentPage}</Title>
            <Breadcrumb className="user-info-display">
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>{user}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="user-select-menu">
                <DropDown  />
            </div>
        </div>
    )
}

// END of document
