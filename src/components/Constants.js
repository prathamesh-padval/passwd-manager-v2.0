// const remoteApi = "http://localhost:8081/";

const remoteApi = "https://passwd-manager.herokuapp.com/";

export const version = "Version 1.0.0"


//Fetch Record   https://passwd-manager.herokuapp.com/api/fetch-records
export const getRecordURL = remoteApi+"api/fetch-records";

//Add Record
export const addRecordURL = remoteApi+"api/add-record";

//login
export const loginURL = remoteApi+"api/login";

//Register
export const register = remoteApi+"api/register";
