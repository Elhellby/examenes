"use client"

import ListaBlog from '@/components/listblog';
import Search from '@/components/search';
import AddBlog from '@/components/add';
import { useGetBlogsQuery } from '@/redux/services/blogsAPi'

export default function Home() {


  const { isLoading, isFetching, data, error } = useGetBlogsQuery({ filter: '' })

  return (
    <main className="flex flex-col items-center justify-between pt-8">


      <div className="flex items-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
        <Search />
      </div>


      <>
        {error ? (
          <p className='w-3/4 h-90vh p-5 mt-10 text-center font-bold text-lg text-red-500'>Ocurrio un error al cargar los datos</p>
        ) : isLoading || isFetching ? (
          <p className='w-3/4 h-90vh p-5 mt-10 text-center font-bold text-lg text-white'>Cargando...</p>
        ) : (
          <div className="w-3/4 h-90vh p-5 mt-10 bg-gray-700 bg-opacity-25">
            <ListaBlog items={data || []} />
          </div>
        )}
      </>


      <div className="relative min-h-screen flex justify-center items-center">
        <AddBlog />
      </div>

    </main>
  )
}
