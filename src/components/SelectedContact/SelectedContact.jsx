import {useEffect, useState} from 'react';

export default function SelectedContact({selectedContactId, setSelectedContactId}) {
        const [contact, setContact] = useState(null);

        useEffect(()=>{
            async function fetchSingleUser(userId){
                try{
                    const res = await fetch(
                        `https://jsonplaceholder.typicode.com/users/${userId}`
                    );
                    const json = await res.json();
                    console.log(json);
                    setContact(json);
                }catch(err){
                    console.log(err);
                }
            } 
            fetchSingleUser(selectedContactId)
        }, [])

    return (
        <div>
        <p> Selected Contact is {contact?.name}</p>
        <p>website: {contact?.website}</p>
        <p>username: {contact?.username}</p>
        <button onClick={()=>setSelectedContactId(null)}>Close</button>
        </div>
    )
}

