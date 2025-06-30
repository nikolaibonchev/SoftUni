import { requests } from "../utility/api.js";

function createFurniture(data){
    return requests.postReq("data/catalog", data);
}

function getAllFurniture(){
    return requests.getReq(`data/catalog`);
}

function getFurnitureDetails(id){
    return requests.getReq(`data/catalog/${id}`);
}

function updateFurniture(id, data){
    return requests.putReq(`data/catalog/${id}`, data);
}

function deleteFurniture(id){
    return requests.delReq(`data/catalog/${id}`);
}

function getMyFurniture(userId){
    return requests.getReq(`data/catalog?where=_ownerId%3D%22${userId}%22`);
}

export const dataRequests = {
    createFurniture,
    getAllFurniture,
    getFurnitureDetails,
    updateFurniture,
    deleteFurniture,
    getMyFurniture
}