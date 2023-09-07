import React from 'react'

export default function Card({ detail}) {
    // console.log(detail.userId)
    return (
        <div className="p-3 max-w-sm bg-white flex flex-row justify-center items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-[0_0_20px_rgba(8,_112,_184,_0.7)]">

            {/* <div className="flex flex-row items-center pb-10"> */}
                <img className="w-24 h-24 m-3 rounded-full shadow-lg" src="https://cdn-icons-png.flaticon.com/512/660/660611.png" alt="Bonnie" />
                <div className="flex flex-col items-center pb-10">
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{detail.userId}</h5>
                <span className="text-lg font-bold py-4 text-gray-200 dark:text-gray-400 flex flex-row items-center">{detail.title}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 flex flex-row items-center"> {detail.body}</span>
                </div>
            {/* </div> */}
        </div>
    )
}
