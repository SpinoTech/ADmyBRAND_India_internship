import React from 'react'

export default function InputComponent({onHandleChange,handleSubmit,contacts}) {
    return (
        
            <form onSubmit={handleSubmit} className='h-4/5 w-3/5 rounded-3xl flex flex-col justify-around items-center p-6 bg-blue-200 shadow-[0_0_20px_rgba(8,_112,_184,_0.7)]' >
               <h1 className="text-black font-bold text-xl p-3">Write A Post Please</h1>

                <input type="number" name="userId" className="w-4/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1 text-center" placeholder="userId" required onChange={onHandleChange} value={contacts.userId}/>

                <input type="text" name="title" className="w-4/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1 text-center" placeholder="Title " required onChange={onHandleChange} value={contacts.title}/>

                <input type="text" name="body" className="w-4/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1 text-center" placeholder="Body " required onChange={onHandleChange} value={contacts.body}/>


                <button type="submit" className="text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" disabled={contacts.userId===null || contacts.title.length<5 || contacts.body.length<10}>{contacts.userId===null?"Please Give An User Id":contacts.title.length<5?"write Title For The Post" : contacts.body.length<10?"Write Description For The Post":"Save The Post"}</button>
            </form>
       
    )
}
