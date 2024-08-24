import React from 'react'

const PaginationArea = ({ pageNumber, paginate, currentPage, next, prev }) => {


    return (
        <>
            <nav className=' py-3' aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-sm ">
                    <li onClick={prev}>
                        <a className="flex items-center justify-center px-3 h-8 leading-tight text-black  border border-gray-300  cursor-pointer hover:bg-[#eeeaea]">
                            Previous
                        </a>
                    </li>
                    {pageNumber.map((item, i) => (
                        <li onClick={()=>paginate(item)} className={currentPage == i + 1 ? "flex items-center justify-center px-3 h-8 leading-tight text-[#fff]  border border-gray-300  cursor-pointer  bg-black " : "flex items-center justify-center px-3 h-8 leading-tight text-black  border border-gray-300  cursor-pointer"}>
                        
                                {item + 1}
                            
                        </li>
                    ))}


                    <li onClick={next}>
                        <a  className="flex items-center justify-center px-3 h-8 leading-tight text-black  border border-gray-300  cursor-pointer hover:bg-[#eeeaea]" >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>

        </>



    )
}

export default PaginationArea