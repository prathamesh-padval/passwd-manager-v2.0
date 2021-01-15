
import Axios from "axios";
import {getRecordURL,addRecordURL} from './Constants';



export function getRecord(json){
    console.log(json)
    const token = sessionStorage.getItem("token");
    const header ={ Authorization: token, "Content-Type": "application/json" };
    return Axios.request(
        {
            method:"POST",
            url : getRecordURL,
            data : json,
            headers: header
        }
    ).then(res=>res)
}


export function addRecord(json){
    const token = sessionStorage.getItem("token");
    return Axios.request({
        method: "POST",
        data: json,
        url: addRecordURL,
        headers: { Authorization: token, "Content-Type": "application/json" },
    })
    .then(res => res)
        // .catch(err => alert(err));
}
