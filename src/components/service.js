import axios from "axios";
import { fetchRecordUrl } from "../Constants";



let data= ""

const generateId = data =>
    data.reduce((acc, current) => Math.max(acc, current.ProductID), 0) + 1;

export const insertItem = item => {
    item.ProductID = generateId(data);
    item.inEdit = false;
    data.unshift(item);
    return data;
};

export const getItems = () => {
    const authJson = {
        userName : "prath"    
    };

    console.log(authJson)
     axios.request({
            method:"POST",
            data:authJson,
            url:fetchRecordUrl
        }).then((response)=>{
                console.log(response)

                data=response.data
        })
        console.log(data)
        return data;
};

export const updateItem = item => {
    let index = data.findIndex(record => record.ProductID === item.ProductID);
    data[index] = item;
    return data;
};

export const deleteItem = item => {
    let index = data.findIndex(record => record.ProductID === item.ProductID);
    data.splice(index, 1);
    return data;
};