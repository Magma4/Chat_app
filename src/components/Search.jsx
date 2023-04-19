import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Search for a user'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="userInfo">
          <span>Papi</span>
        </div>
      </div>
    </div>
  )
}

export default Search