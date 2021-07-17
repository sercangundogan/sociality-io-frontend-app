import React, { useState, useEffect } from 'react'
// Icons
import Facebook     from '../assets/icons/card/FacebookLogo.svg';
import Twitter     from '../assets/icons/card/Twitter-logo.svg';
import Instagram     from '../assets/icons/card/Instagram-logo.svg';
import Delete       from '../assets/icons/card/delete.svg';
import Options      from '../assets/icons/card/options.svg';
import Cancel       from '../assets/icons/card/cancel.svg';
import Approve      from '../assets/icons/card/approve.svg';
import Likes        from '../assets/icons/card/likes.svg';
import Comments     from '../assets/icons/card/likes.svg';
import Shares       from '../assets/icons/card/shares.svg';
import Views        from '../assets/icons/card/views.svg';

function Card(props) {
    // React Staate
    const [post, setPost] = useState(props.post)
    const [postStatus, setPostStatus] = useState()
    const [postChannel, setPostChannel] = useState()
    
    // Component Did Mount
    useEffect(() => {
        setPost(props.post)

        // Edit Post Status Classes For Html
        const editPostStatusClasses = () => {
            let classes = "col-xs-1 card-left "
            // Determine Status
            if(post.status === 0){
                // Need Approval - Warning
                classes += "bg-warning"
            }
            else if(post.status === 1){
                // Scheduled - Success
                classes += "bg-success"
            }
            else if(post.status === 2){
                // Publishing - ?
                // classes += "bg-warning"
            }
            else if(post.status === 3){
                // Published - Secondary Light
                classes += "bg-secondary-light"
            }
            else {
                // Error - Danger
                classes += "bg-danger"
            }

            setPostStatus(classes)
        }

        // Edit Post Channel
        const editPostChannel = () => {
            if(post.account.channel === "twitter"){
                // Twitter
                setPostChannel(Twitter)
            }
            else if (post.account.channel === "instagrambusiness"){
                // Instagram
                setPostChannel(Instagram)
            }
            else {
                // Facebook
                setPostChannel(Facebook)
            }
        }
        
        // Call Functions
        editPostStatusClasses()
        editPostChannel()
    }, [post, props])
    

    // Getting Day, Month and Year with Time
    const getDayMonthYearTime = (dateString) => {
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
        let hour = date.getHours()
        let minutes = date.getMinutes()
        return `${day} ${monthName} ${year} - ${hour}:${minutes}`
    }

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

    // Replace Broken Images With Specified Image
    const replaceBrokenImage = (event) => {
        // Broken Image
        let image = event.target
        image.onerror = ""
        
        // Specified Image 
        const noPostImage = require("../assets/image/no-post-image.png")

        // Change Src of Image Element
        image.src = noPostImage.default
        return true;
    }

    return (
        <div className="card row-12">
            <div className={postStatus}> 
                    <img src={postChannel} alt="social media icon" /> 
            </div>
            <div className="col-xs-11 card-right">
                <div className="card-right-header">
                    {post.is_published
                        ? <p className="card-date">{getDayMonthYearTime(post.published_at)}</p> 
                        : <p className="card-date">{getDayMonthYear(post.published_at)}</p> }
                    <div className="icons">
                        {post.status === 1 
                            ? <img src={Cancel} alt="cancel icon" /> 
                            : null}
                        {post.status === 0 
                            ? <img src={Approve} alt="approve icon" /> 
                            : null}
                        <img src={Delete} alt="delete icon" />

                        <img src={Options} alt="options icon" />
                    </div>
                </div>
                
                <div className="row card-content">
                    <p>{post.entry.message}</p>
                </div>
                
                <div className="row card-image">
                    <img src={post.entry.image} alt="post_image" onError={replaceBrokenImage} />
                </div>

                <div className="icons-span">
                    <div>
                        <img src={Likes} alt="likes icon" />
                        <span>0</span>
                    </div>
                    <div>
                        <img src={Comments} alt="comments icon" />
                        <span>0</span>
                    </div>
                    <div>
                        <img src={Shares} alt="shares icon" />
                        <span>0</span>
                    </div>
                    <div>
                        <img src={Views} alt="views icon" />
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Card;