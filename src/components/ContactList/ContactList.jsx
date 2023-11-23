import React, {useEffect, useState} from 'react'
import ContactRow from '../ContactRow/ContactRow';

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

export default function ContactList({ setSelectedContactId }) {
    const [contacts, setContacts] = useState(dummyContacts);
    useEffect(()=>{
        // call API for data
        async function fetchUsers() {
            try{
                const res = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                const json = await res.json();
                console.log(json);
                setContacts(json);
            }catch(err){
                console.log(err);
            }
        }

        fetchUsers();
    }, [])
    return (
    <table>
        <thead>
            <tr> 
                <th colSpan="3">Contact List </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>
            {contacts.map((contact)=> (
               <ContactRow 
                contact={contact} 
                setSelectedContactId={setSelectedContactId}
                key={contact.id}
            />
            ))}
        </tbody>
    </table>
  )
}
