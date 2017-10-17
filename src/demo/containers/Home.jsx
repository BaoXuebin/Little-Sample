import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

import '../styles/home.less';

const { Content, Sider } = Layout;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: false };
        this.toggleSider = this.toggleSider.bind(this);
    }

    toggleSider() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const collapsed = this.state.collapsed;
        return (
            <Layout style={{ height: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={this.toggleSider}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>所有组件</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content>
                        <Menu mode="horizontal">
                            <Menu.Item key="mail">
                                <Icon type="mail" />Navigation One
                            </Menu.Item>
                        </Menu>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Home;
