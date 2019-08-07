// resources/js/components/Example.js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter , Link} from 'react-router-dom';
import RouterPath from './RouterPath';

export default class Index extends Component {
    render() {
        return (
         <HashRouter>
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
                            <div className="container">
                                <a className="navbar-brand js-scroll-trigger" href="#page-top">Trang Chủ</a>
                                <div className="collapse navbar-collapse" id="navbarResponsive">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/'}>Loại sản phẩm</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/sanpham'}>Sản phẩm </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/FrontEnd'}>FrontEnd</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/backend'}>backend</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div style={{ margin: '0px' }}><RouterPath/></div>
                </div>
            </HashRouter >
        )
    }
}

if (document.getElementById('index')) {
    ReactDOM.render(
        <Index/>,
        document.getElementById('index'));
}
