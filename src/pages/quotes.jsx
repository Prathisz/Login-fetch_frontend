// import React, { useEffect } from 'react'
// import jwt from 'jsonwebtoken';

// import { useHistory } from 'react-router-dom';


// function Dashboard() {
//     const history=useHistory()

//     async function populateQuotes(){
//         const req =await fetch('https://localhost:5000/api/quote',{
//             headers:{
//                 'x-access-token':localStorage.getItem('token')
//             }
//         })
    
//     const data=req.json()
//     console.log(data)
//     }

//     useEffect(()=>{
//         const token = localStorage.getItem('token')
//         if(token){
//             const user=jwt.decode(token)
//             if(!user){
//                 localStorage.removeItem('token')
//                 history.replace('/login')
//             }else{
//                 populateQuotes()
//             }
//         }
//     },[])
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   )
// }

// export default Dashboard

import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setAlbum(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Data from JsonPlaceHolder</h1>
      <div style={styles.albumContainer}>
        {album.length > 0 ? (
          album.map((item) => (
            <div key={item.id} style={styles.itemContainer}>
              <p style={styles.title}>{item.title}</p>
              <img src={item.thumbnailUrl} alt={item.title} style={styles.image} />
            </div>
          ))
        ) : (
          <p style={styles.loading}>Loading...</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
  },
  albumContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  itemContainer: {
    width: '250px',
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  },
  loading: {
    fontSize: '18px',
    fontStyle: 'italic',
    color: '#888',
  },
};
