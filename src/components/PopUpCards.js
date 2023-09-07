import React from 'react'

export default function PopUpCards({details}) {
    return (

        <div className="max-w-sm  rounded-lg:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{details.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">Email : {details.email}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">Phone : {details.phone}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">Address : {details.address.street} / {details.address.city} / {details.address.zipcode}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">Company : {details.company.name}</p>
                <a className="mb-3 font-normal text-gray-700 dark:text-gray-700" href={details.website}>Website : {details.website}</a>

            </div>
        </div>

    )
}
