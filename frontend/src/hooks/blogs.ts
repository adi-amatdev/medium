import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";


export type BlogsTypes = {
    author: {
      name?: string ; 
      bio ?: string;

    };
    title: string;
    content: string;
    id: string;
    publishedDate?: string;
};

export const useBlog = ({id}:{id:string})=>{
    const [loading , setLoading]= useState(true);
    const [blog , setBlog]= useState();

    useEffect( ()=>{
        async function getBlog() {
            const response = await axios.get(`${BACKEND_URL}/blog/${id}`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            });
            const data = await response.data;
            setBlog(data.blog);
            setLoading(false);
        }
        getBlog();
    },[]);

    return {
        loading,
        blog
    }
}

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