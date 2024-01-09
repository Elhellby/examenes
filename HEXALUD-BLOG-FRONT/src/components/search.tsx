import { useAppDispatch } from '@/redux/hooks';
import { useLazyGetBlogsQuery,useGetBlogsQuery } from '@/redux/services/blogsAPi'
import { useState } from 'react';

export default function Search() {

    const dispatch=useAppDispatch()
    const [getBlogs] = useLazyGetBlogsQuery()
    const [search, setSearch] = useState()
    // const { isLoading, isFetching, data, error,refetch } = useGetBlogsQuery({ filter: search || '' })


    const handleSearch = (e: any) => {
        const { name, value } = e.target;
        setSearch(value);
    }

    const handleSubmit = async () => {
        // getBlogs({ filter: search || '' })
        dispatch(useGetBlogsQuery({ filter: search || '' }))
    }

    return (
        <>
            <input
                type="text"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
                placeholder="Buscar..."
                onChange={handleSearch}
            />
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none"
                onClick={handleSubmit}
            >
                Buscar
            </button>
        </>
    )
}
