import React, {Component} from 'react';

class backend extends Component {
    render() {
        return ( 
            <div class="container">
            <div class="text-center">
                <h1> SẢN PHẨM YÊU THÍCH</h1>
                <hr/>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="row mt-15">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Nhập từ khóa..." />
                                <span class="input-group-btn">
                                            <button class="btn btn-primary" type="button">
                                                <span class="fa fa-search mr-5"></span>Tìm
                                </button>
                                </span>
                            </div>
                        </div>
                        <button class="btn btn-primary dropdown-toggle" type="button">
                                Sản phẩm yêu thích nhất <span class="fa fa-caret-square-o-down ml-5"></span>
                        </button>
                    </div>
                    <div class="row mt-15">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th class="text-center">STT</th>
                                        <th class="text-center">Khách hàng</th>
                                        <th class="text-center">Tên shop</th>
                                        <th class="text-center">Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input type="text" class="form-control" />
                                        </td>
                                        <td>
                                            <select class="form-control">
                                                <option value="-1">lazada</option>
                                                <option value="0">shoppe</option>
                                                <option value="1">sendo</option>
                                            </select>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Phạm Tài Sang</td>
                                        <td class="text-center">
                                            <span class="label label-success">
                                                        lazada
                                                    </span>
                                        </td>
                                        <td class="text-center">
                                            <button type="button" class="btn btn-warning">
                                               Danh sách sản phẩm
                                            </button>
                                            &nbsp;
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default backend