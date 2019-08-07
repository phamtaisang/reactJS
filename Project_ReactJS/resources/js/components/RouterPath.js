import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import LoaiSanPham from "./admin/LoaiSanPham.js";
import SanPham from "./admin/SanPham.js";
import FrontEnd from "./FrontEnd.js";
import backend from "./backend.js";

class RouterPath extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={LoaiSanPham}/>
                    <Route exact path='/sanpham' component={SanPham}/>
                    <Route exact path='/FrontEnd' component={FrontEnd}/>
                    <Route exact path = '/backend' component ={backend}/>
                </Switch>
            </main>
        )
    }
}

export default RouterPath