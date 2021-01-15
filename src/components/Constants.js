// const remoteApi = "http://localhost:8081/";

const remoteApi = "/";

export const version = "Version 1.0.0"


//Fetch Record
export const getRecord = remoteApi+"api/get-config";

//Authentication
export const authUrl = remoteApi+"authenticate";

//Admin Dashboard
export const getDashUrl = remoteApi+"api/dashboard";

//Bank
export const getBanksUrl = remoteApi+"api/get-banks";
export const getBankDashUrl = remoteApi+"api/bank-dashboard";
export const addBankUrl = remoteApi+"api/add-bank";
export const updateBankUrl = remoteApi+"api/update-bank";
export const getBankTxnUrl = remoteApi+"api/bank-atms-trans";

//Bank Commands
export const startBankUrl = remoteApi+"api/start-bank";
export const stopBankUrl = remoteApi+"api/stop-bank";

//ATM
export const getAtmsUrl = remoteApi+"api/get-atms";
export const addAtmUrl = remoteApi+"api/add-atm";
export const updateAtmUrl= remoteApi+"api/update-atm";


//ATM Commands
export const startAtmUrl = remoteApi+"api/start-atm";
export const stopAtmUrl = remoteApi+"api/stop-atm";
export const outOfServiceUrl = remoteApi+"api/send-go-out-of-service";
export const goInServiceUrl = remoteApi+"api/send-go-in-service";
export const fitDataUrl = remoteApi+"api/send-fit-data";
export const stateDataUrl = remoteApi+"api/send-state-data";
export const screenDataUrl = remoteApi+"api/send-screen-data";



//ConfigMaster 
export const getConfigUrl = remoteApi+"api/get-config";
export const addConfigUrl = remoteApi+"api/add-config-property";
export const updateConfigUrl = remoteApi+"api/update-config";
export const removeConfigUrl = remoteApi + "api/delete-config-property";


//Hsm
export const getHsmConfigUrl = remoteApi+"api/get-hsm-config";
export const addHsmUrl = remoteApi+"api/add-hsm"
export const updateHsmUrl = remoteApi+"api/update-hsm"