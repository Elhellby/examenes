import React, { useEffect, useState } from "react";
import axios from "axios";

import Cancel from '@mui/icons-material/Cancel';
import Save from "@mui/icons-material/Save";
import Article from "@mui/icons-material/Article";

import { useSaveBlogsMutation, useGetBlogsQuery } from '@/redux/services/blogsAPi'
import { Blog } from "@/types/blog";

const ViewBlog = (props: { isOpen: boolean, onClose: () => any, content:string, title:string }) => {

    const handleCancel = () => {
        props.onClose();
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto ${props.isOpen ? 'visible' : 'hidden'} `}>
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75"></div>
            <div className="bg-white rounded-lg p-8 w-11/12 h-4/5 md:w-3/4 md:h-auto z-10 relative">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                    <Article className="text-xl text-blue-600" /> {props.title}</h2>
                <div className="mb-4">
                    <textarea
                        name="content"
                        placeholder="Contenido"
                        className="input-field resize-none h-auto"
                        defaultValue={props.content||''}
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        className="btn-cancel w-full md:w-auto md:mr-4 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded"
                        onClick={() => handleCancel()}
                    >
                        <Cancel className="bg-transparent text-white" />   Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewBlog;
