import React from 'react'

const Home = ({handlelogout, email}) => {
  return (
    <section className="hero">
        <nav>
            <h2>Welcome {email}</h2>
            <button onClick={handlelogout}>Logout</button>
        </nav>
    </section>
  )
}

export default Home;