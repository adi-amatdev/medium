import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";


export const useBlogs = ()=>{
    const [loading , setLoading]= useState(true);
    const [blogs , setBlogs]= useState([]);

    useEffect( ()=>{
        async function getBlogs() {
            const response = await axios.get(`${BACKEND_URL}/blog/bulk`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            });
            const data = await response.data;
            setBlogs(data.blogs);
            setLoading(false);
        }
        getBlogs();
    },[]);

    return {
        loading,
        blogs
    }
}