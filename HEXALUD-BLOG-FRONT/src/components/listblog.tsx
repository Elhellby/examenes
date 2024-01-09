
import { Blog } from '@/types/blog';
import { useEffect, useState } from 'react';
import ViewBlog from '@/components/viewBlog'

const itemList = (e: Blog, index: number) => {
    const [openModal, setOpenModal] = useState<boolean>(false)


    return (
        <div key={index.toString()}>
            <li className="mb-5 rounded-lg shadow-md p-3 bg-white">
                <h2 className="text-xl font-semibold mb-2">
                    <span className="text-white mt-2 inline-block bg-green-400 rounded-full text-center w-7 mr-5">{index.toString()}</span> {e.title}
                </h2>
                <div className='flow-root'>
                    <label className="text-sm text-gray-600 font-semibold mb-2 float-left"> {e.author}</label>
                    <label className="text-sm text-gray-600 font-semibold mb-2 float-right"> {e.creation_date.toString().split('T')[0]}</label>
                </div>
                <p className="text-gray-700">{e.content.substring(0, 70)} . . .</p>
                <a href="#" className="text-blue-500 mt-2 inline-block" onClick={() => setOpenModal(!openModal)}>Leer más</a>
            </li>
            <ViewBlog
                isOpen={openModal}
                onClose={() => { setOpenModal(!openModal) }}
                content={e.content}
                title={e.title} />
        </div>
    )
}

export default function ListaBlog(props: { items: Blog[] }) {

    return (
        <ul>
            {
                props.items.map((e: Blog, index: number) => (
                    itemList(e, index + 1)
                ))
            }
        </ul>
    )
}