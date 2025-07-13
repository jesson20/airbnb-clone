import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'
function Home() {
  return (
    <div className="home">
        <Banner />
        <div className="home__section">
          <Card 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            title="Modern Living Room"
            description="Spacious living area with contemporary design."
            price="$120/night"
          />

          <Card 
            src="https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80"
            title="Gourmet Kitchen"
            description="Fully equipped kitchen with premium appliances."
            price="$90/night"
          />

          <Card 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            title="Cozy Bedroom"
            description="Relaxing bedroom with a queen-size bed."
            price="$100/night"
          />
        </div>

       <div className="home__section">
        <Card 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          title="Beach House Escape"
          description="Stunning beach house with ocean view."
          price="$200/night"
        />

       <Card 
          src="https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80"
          title="Rustic Cabin"
          description="Getaway in the woods with a fireplace."
          price="$85/night"
        />

        <Card 
          src="https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          title="City Apartment"
          description="Modern apartment in the heart of downtown."
          price="$110/night"
        />
      </div>



    </div>
  )
}

export default Home
