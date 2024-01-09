
import { useEffect, useState } from 'react';
import Add from "@mui/icons-material/Add";
import Modal from '@/components/modal';



export default function AddBlog(props: {}) {
    const [openModal, setOpenModal] = useState<boolean>(false)

    return (

        <>
            <button className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full w-14 h-14 p-0 m-0 flex items-center justify-center shadow-lg focus:outline-none"
                onClick={() => { setOpenModal(!openModal) }}
            >
                <Add />

            </button>

            <Modal
                isOpen={openModal}
                onClose={() => { setOpenModal(!openModal) }}
            />
        </>
    )
}