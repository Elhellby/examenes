import React, { useEffect, useState } from "react";
import axios from "axios";

import Cancel from '@mui/icons-material/Cancel';
import Save from "@mui/icons-material/Save";
import Article from "@mui/icons-material/Article";

import { useSaveBlogsMutation, useGetBlogsQuery } from '@/redux/services/blogsAPi'
import { Blog } from "@/types/blog";

const Modal = (props: { isOpen: boolean, onClose: () => any }) => {

    const [createBlog, { isError, isSuccess, }] = useSaveBlogsMutation()
    const [isSave,setIsSave]=useState<boolean>(false)

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        content: "",
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCancel = () => {
        setFormData({
            title: "",
            author: "",
            content: "",
        });
        props.onClose();
    };

    const handleSave = () => {
        if (formData.author && formData.content && formData.title) {
            let newBlog = formData as Blog
            createBlog({ data: newBlog })
            handleCancel()
        }else{
            alert('Debes llenar todos los datos del Blog!!!')
        }
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto ${props.isOpen ? 'visible' : 'hidden'} `}>
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75"></div>
            <div className="bg-white rounded-lg p-8 w-11/12 h-4/5 md:w-3/4 md:h-auto z-10 relative">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                    <Article className="text-xl text-blue-600" /> Nuevo Artículo</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Título"
                        className="input-field"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        placeholder="Autor"
                        className="input-field"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        placeholder="Contenido"
                        className="input-field resize-none h-auto"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        className="btn-cancel w-full md:w-auto md:mr-4 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded"
                        onClick={() => handleCancel()}
                    >
                        <Cancel className="bg-transparent text-white" />   Cancelar
                    </button>
                    <button
                        className="btn-save w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                        onClick={handleSave}
                        
                    >
                        <Save />  Guardar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
