import React, { useEffect, useState } from 'react'
import Card from './Card';
import InputComponent from './InputComponent';
import { fetchNotes, sendDataToApi } from '../apiCalls';

export default function Contact() {
  const [details, setDetails] = useState([]);
  const [contacts, setContacts] = useState({
    id: 0,
    userId: null,
    title: "",
    body: ""
  })
  const [alert, setAlert] = useState({ status: false, massege: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      fetchNotes().then(data => setDetails(data))
    } catch (error) {
      console.error(error)
    }
  }, [])
  // console.log(details)


  const onHandleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value)
    setContacts({ ...contacts, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setContacts({ ...contacts, "id": Math.floor(Math.random() * 100) + Date.now() })
    // starting loading
    setLoading(true);
    // showing alert
    await sendDataToApi(contacts)
      .then(data => {
        if (data.status === 201) {
          setAlert({ status: true, massege: `${data.data.userId} is posted successfully !!!` })

          // populating new post to exhisting post 
          setDetails([...details, contacts])

          // invisibling alert after 1.5s
          setTimeout(() => { setAlert({ status: false, massege: "" }) }, 1500)
        }
      })
      // stopping loading
      setLoading(false)

    setContacts({
      userId: null,
      title: "",
      body: ""
    })
  }

  return (
    <div className='h-full w-screen flex flex-col'>
      <div className='flex h-2/6 w-full flex justify-center items-center'>
        <InputComponent handleSubmit={handleSubmit} onHandleChange={onHandleChange} contacts={contacts} />
      </div>
      {
        alert.status && <div className="bg-indigo-200 text-center py-4 lg:px-4">
          <div className="p-2 bg-indigo-600 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
            <span className="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">Success</span>
            <span className="font-semibold mr-2 text-left flex-auto">{alert.massege}</span>
            <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
          </div>
        </div>
      }

      {
        loading ? (<div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
          <div className='absolute'>loading</div>
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white shadow-[0_0_50px_rgba(8,_112,_184,_0.7)]"></div>
        </div>) : (
          details.length === 0 ? <>
            <div className="bg-indigo-200 text-center py-4 lg:px-4">
              <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                <span className="flex rounded-full bg-red-600 uppercase px-2 py-1 text-xs font-bold mr-3">Empty Post</span>
                <span className="font-semibold mr-2 text-left flex-auto">Please Add Some Posts</span>
                <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
              </div>
            </div>
          </> :
            <div className='h-4/6 w-full grid grid-cols-2 md:grid-cols-4 gap-6 overflow-hidden overflow-y-scroll scrollbar-hide p-3 place-items-center'>
              {
                details.map((detail, index) => {
                  return <Card key={index} detail={detail} />
                })
              }
            </div>
        )}
    </div>

  )
}

