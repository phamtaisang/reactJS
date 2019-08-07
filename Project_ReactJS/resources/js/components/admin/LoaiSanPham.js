import React, {Component} from 'react';
import ThemLoai from './Add/ThemLoai';
import ListLoai from './List/ListLoai';
import Search from './Search/Search'
class LoaiSanPham extends Component {
    constructor(props){
        super(props);
        this.state = {
            mucluc : [],
            MucLucEditing : null,
            goiFormThem : false,
            search : '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onFormThem = this.onFormThem.bind(this);
        this.onClickForm = this.onClickForm.bind(this);
        this.CloseForm = this.CloseForm.bind(this);
        this.Search = this.Search.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }
    fetchData () {
        fetch('/api/mucluc')
        .then(response => response.json())
        .then(mucluc => this.setState({ mucluc }));
    }
    onSubmit(){
        this.fetchData();
    }
    onDelete(){
        this.fetchData();
    }
    onEdit(item){
        this.setState({
            MucLucEditing : item
        })
        this.onFormThem();
    }
    onFormThem(){
        this.setState({
            goiFormThem : true
        });
    }
    onClickForm(){
       this.setState({
            goiFormThem : true,
            MucLucEditing:null     
       });

    }
    CloseForm(){
        this.setState({
            goiFormThem : false,
        })
    }
    Search(txt){
        this.setState({
            search : txt,
        });
    }
    render() {
        let filteredCatalog = this.state.mucluc.filter(
            (item) =>{
             return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        )
       var motMucLuc =filteredCatalog.map((data,i)=>{
           return <ListLoai key={data.id} index={i} 
           mucluc = {data}
           onDelete = {this.onDelete}
           onEdit = {this.onEdit}
           />
        });
        var form = this.state.goiFormThem;
        var elmform = form ?  
                    <ThemLoai CloseForm={this.CloseForm} 
                    MucLucEditing={this.state.MucLucEditing} 
                    onSubmit = {this.onSubmit}/>:'';
        return (
        <div>
        <div className="text-center">
            <h1>DANH MỤC</h1>
            <hr/>
        </div>
        <div className="row">
           {elmform}
            <div className={form ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                 {form ? '' :<button type="button" className="btn btn-primary" onClick={this.onClickForm}>
                    <span className="fa fa-plus mr-5"></span>Thêm Danh Mục
                 </button>}
                <Search Search = {this.Search}/>
               
                <div className="row mb-2">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">STT</th>
                                    <th className="text-center">Tên</th>
                                    <th className="text-center">Trạng Thái</th>
                                </tr>
                            </thead>
                                    {motMucLuc}
                            </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

        )
    }
}

export default LoaiSanPham