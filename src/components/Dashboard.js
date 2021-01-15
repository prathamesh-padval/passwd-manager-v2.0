import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Grid,
    GridColumn as Column,
    GridToolbar
} from "@progress/kendo-react-grid";

import { MyCommandCell } from "./MyCommandCell.js";
import { insertItem, getItems, updateItem, deleteItem } from "./service.js";
import '@progress/kendo-theme-default/dist/all.css';
import './Login.css';
import { TestData } from './TestData.jsx';

export default class Dashboard extends React.Component {
    editField = "inEdit";
    state = {
        data: [...TestData],
        userName: "XYZ"
    };

    // componentDidMount() {
    //     this.setState({
    //         data: getItems()
    //     });
    // }

    getData = () => {
        const json = { userName: this.state.userName }
        // getRecord(json)
        //     .then(res => {
        //         if (res.status == 200) {
        //             console.log(res)
        //             this.setState({ data: res.data })
        //         }
        //         else {
        //             console.log("Error")
        //         }
        //     })
    }

    componentDidMount() {
        console.log(this.state.userName)
        this.getData();
    }


    CommandCell = props => (
        <MyCommandCell
            {...props}
            edit={this.enterEdit}
            remove={this.remove}
            add={this.add}
            discard={this.discard}
            update={this.update}
            cancel={this.cancel}
            editField={this.editField}
        />
    );

    // modify the data in the store, db etc
    remove = dataItem => {
        const data = deleteItem(dataItem);
        this.setState({ data });
    };

    add = dataItem => {
        dataItem.inEdit = true;

        //const data = insertItem(dataItem);
        // this.setState({
        //     data: data
        // });



        const data = [...this.state.data];

        // dataItem.inEdit = undefined;
         dataItem.id = this.generateId(data);

         data.unshift(dataItem);
         this.setState({
             data: [...this.state.data]
         });
         dataItem.createdBy = sessionStorage.getItem("username")

         console.log(dataItem)
         addRecord(dataItem).then(res => {
             if (res.status === 200) {
                 alert(res.data)
             }
             else {
                 alert("Error Occurred.")
             }
         })
             .catch(err => {
                 alert(err);
                 this.setState({
                     redirect: true
                 })
             })
    };

    update = dataItem => {
        dataItem.inEdit = false;
        const data = updateItem(dataItem);
        this.setState({ data });
    };

    // Local state operations
    discard = dataItem => {
        const data = [...this.state.data];
        data.splice(0, 1)
        this.setState({ data });
    };

    cancel = dataItem => {
        const originalItem = getItems().find(
            p => p.siteId === dataItem.siteId
        );
        const data = this.state.data.map(item =>
            item.siteId === originalItem.siteId ? originalItem : item
        );

        this.setState({ data });
    };

    enterEdit = dataItem => {
        this.setState({
            data: this.state.data.map(item =>
                item.siteId === dataItem.siteId ? { ...item, inEdit: true } : item
            )
        });
    };

    itemChange = event => {
        const data = this.state.data.map(item =>
            item.siteId === event.dataItem.siteId
                ? { ...item, [event.field]: event.value }
                : item
        );

        this.setState({ data });
    };

    addNew = () => {
        const newDataItem = { inEdit: true };

        this.setState({
            data: [newDataItem, ...this.state.data]
        });

        
    };

    render() {
        return (
            <div className="Login">
            <Grid
                style={{ height: "620px" , padding: "120px" }}
                data={this.state.data}
                onItemChange={this.itemChange}
                editField={this.editField}
            >
                <GridToolbar>
                    <button
                        title="Add new"
                        className="k-button k-primary"
                        onClick={this.addNew}
                    >
                        Add new
          </button>
                </GridToolbar>
                <Column field="siteId" title="Site Id" width="50px" editable={false} />
                <Column field="siteName" title="Site Name" width="200px" />
                <Column
                    field="sitePwd"
                    title="Site Password"
                    width="150px"
                />
              
                <Column cell={this.CommandCell} width="180px" />
            </Grid>
            </div>
        );
    }
}
