import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

// register

export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${serverURL}/register`,user,"")
}


// login

export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${serverURL}/login`,user,"")
}


// add project
export const addProjectApi = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/addproject`,reqBody,reqHeader)
}

// get home project
export const getHomeProjectApi = async()=>{
    return await commonAPI("GET",`${serverURL}/homeproject`,"","")
}

// get User project
export const getUserProjectApi = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/userprojects`,"",reqHeader)
}

// get All project
export const getAllProjectApi = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/allprojects`,"",reqHeader)
}

// edit project
export const editProjectApi = async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/projects/edit/${id}`,reqBody,reqHeader)
}
