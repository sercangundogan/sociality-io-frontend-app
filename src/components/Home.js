import React from 'react'
// React Hooks
import { useState, useEffect } from 'react'
// Assets
import Mask from "../assets/image/Mask.png"
// Data
import Data from "../assets/data.json"
// Card Component
import Card from "./Card"

function Home() {
    // React State
    const [dates, setDates] = useState([])
    const [posts, setPosts] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    
    // Getting Day, Month And Year
    const getDayMonthYear = (dateString) => {
        // Months
        const months = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December'
        }
        
        let date = new Date(dateString)
        let day = date.getDate()
        let year = date.getFullYear()
        let monthIndex = date.getMonth()
        let monthName = months[monthIndex]
        return `${day} ${monthName} ${year}`
    }

    // Component Did Mount
    useEffect(() => {   
        let dateList = []
        let postList = []
        // Getting Dates
        Object.keys(Data.posts_by_date).forEach(dateString => {
            let formatted = getDayMonthYear(dateString)
            dateList.push(formatted)
            Data.posts_by_date[dateString].forEach(post => {
                postList.push(post)
            })
        }) 
        // Setting State
        setDates(dateList)
        setPosts(postList)
        setIsLoaded(true)
    }, [])

    return (
        // If Data is Loaded
        isLoaded ? 
        <div className="main">
            <div className="main-header">
                <div className="main-info">
                    <ul>
                        <li id="published">Published</li>
                        <li id="scheduled">Scheduled</li>
                        <li id="needApproval">Need Approval</li>
                        <li id="error">Error</li>
                        <li id="notes">Notes</li>
                    </ul>
                </div>
                <div className="profile-image">
                    <img src={Mask} alt="profile_image" />
                </div>
            </div>
    
            <div className="container">
                { 
                    dates.slice(0).reverse().map(date => 
                        <div key={date} className="row-12 section">
                            <div className="col-xs-12">
                                <h3 >{date}</h3>
                            </div>
                            {
                                posts.map( post => 
                                    getDayMonthYear(post.published_at) === date 
                                    ?   <div key={post.account.username} className="col-xs-12 col-md-6 col-lg-4">
                                            <Card post={post} />
                                        </div>
                                    :   null
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
        // Else -> Data is Not Loaded.
        // Can be desing a loading component. 
        // For now it's symbolically created like this
        : <div>Loading</div>


    )
}

export default Home;