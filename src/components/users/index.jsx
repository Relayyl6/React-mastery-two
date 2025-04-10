// import { useState, useEffect } from 'react';
import { useState, useEffect } from "react";


// function Users() {
//     const [usersList, setUsersList] = useState([]);
//     const [pending, setPending] = useState(false);
//     async function fetchAllUsers() {
//         try {
//             setPending(true)
//             const apiResponse = await fetch('https://dummyjson.com/users')
//             const result = await apiResponse.json()
//             if (result?.users) {
//                 setUsersList(result?.users);
//                 setPending(false)
//             } else {
//                 setUsersList([]);
//                 setPending(false)
//             }
//             console.log(result);
//         } catch(error) {
//             console.log(error);
//             setPending(false)
//         }
//         console.log(usersList);
//     }
//     if (pending) {
//         return (<h1>fetching users! Please hold on</h1>)
//     }
//     const handleFetchListOfUsers = () => {
//         fetchAllUsers();
//     }
//     return (
//         <>
//             <h1>Users List</h1>
//             <button onClick={handleFetchListOfUsers}>Fetch User list</button>
//             <ul>
//                 {
//                     usersList && usersList.length > 0 ? 
//                         usersList.map(userItem => (
//                             <li key={userItem?.id}>
//                                 <p>{userItem?.firstName} {userItem?.lastName}</p>
//                             </li>
//                     )) : (
//                         <h1>No users found! Please try again</h1> 
//                     )
//                 }
//             </ul>
//         </>
//     )
// }

// export default Users




function Users() {

    const [usersList, setUsersList] = useState([]);
    const [pending, setPending] = useState(false);

    async function fetchAllUsers() {
        try {
            setPending(true);
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();

            if (result?.users) {
                setUsersList(result?.users);
                setPending(false);
            } else {
                setUsersList([]);
                setPending(false);
            }

            console.log(usersList);
        } catch(error) {
            console.error(error)
        }
    }

    // useEffect(() => {
    //     fetchAllUsers()
    // }, [])
 
    if (pending) {
        return (
            <h1>Fetching User data, please wait</h1>
        )
    }

    // const handleFetchListOfUsers = () => {
    //     fetchAllUsers()
    // }

    return (
        <>
            <div>
                <h1>
                    All Users List
                </h1>

                <button onClick={fetchAllUsers}>Fetch Users List</button>

                <ul>
                    {
                        usersList && usersList.length > 0 ?
                        usersList.map((userItem key={userItem?.id}) => {
                            <li>
                                <p>
                                    {userItem?.firstName} {userItem?.lastName}
                                </p>
                            </li>
                        }) : (
                            <h1>No users found, please try again</h1>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default Users