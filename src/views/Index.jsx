/**
 * 配置路由
 */
import React from 'react';
// 引入react-router
import { HashRouter, Route, NavLink } from 'react-router-dom';
// 引入布局组件
import Me from './me/Index.jsx';
import Home from './home/Index.jsx';

// 渲染
const Index = () =>
    <HashRouter>
        <div>
            <div className="nav">
                <NavLink to="/Home" activeClassName="select" exact>
                    首頁
                </NavLink>
                <NavLink to="/Me" activeClassName="selected" exact>
                    个人中心
                </NavLink>
            </div>
            <Route path="/Me" component={Me}/>
            <Route path="/Home" component={Home}/>
        </div>
    </HashRouter>

export default Index;