import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ContactSingle({ list }) {
    console.log(list);
    const { id } = useParams()

    return (
        <div className='ContactSingle'>
            <div className='card'>
                <div className='card-body'>
                    {list.map(item =>
                        (item.id == id) &&
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                            <p>{item.phone}</p>
                        </div>

                    )


                    }
                </div>

            </div>
        </div>
    )
}

export default ContactSingle
