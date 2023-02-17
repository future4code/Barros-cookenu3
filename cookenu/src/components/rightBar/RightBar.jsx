import './rightBar.scss'

const RightBar = () => {
    
  return (
    <div className='rightBar'>
      <div className='container'>
        <div className='item'>
          <span>Suggestions For You</span>
          <div className='user'>
            <div className='userInfo'>
              <img src="" alt="as"/>
              <span>Juliano Manzano</span>
            </div>
            <div className='buttons'>
              <button type="">follow</button>
              <button type="">dimiss</button>
            </div>
          </div>

          <div className='user'>
            <div className='userInfo'>
              <img src="" alt="as"/>
              <span>Juliano Manzano</span>
            </div>
            <div className='buttons'>
              <button type="">follow</button>
              <button type="">dimiss</button>
            </div>
          </div>

        </div> 
        
        <div className='item'>
          <span>Latest Activities</span> 
          <div className='user'>
            <div className='userInfo'>
              <img src="" alt="as"/>
              <p>
                <span>Juliano Manzano</span>
                change their cover picture
              </p>
              
            </div>
            <span>1 min ago</span>
          </div> 

          <div className='user'>
            <div className='userInfo'>
              <img src="" alt="as"/>
              <p>
                <span>Juliano Manzano</span>
                change their cover picture
              </p>
              
            </div>
            <span>1 min ago</span>
          </div>

          <div className='user'>
            <div className='userInfo'>
              <img src="" alt="as"/>
              <p>
                <span>Juliano Manzano</span>
                change their cover picture
              </p>
              
            </div>
            <span>1 min ago</span>
          </div>

          <div className='user'>
            <div className='userInfo'>
              <img src="" alt="as"/>
              <p>
                <span>Juliano Manzano</span>
                change their cover picture
              </p>
              
            </div>
            <span>1 min ago</span>
          </div>

        </div>

        <div className='item'>
          <span>Online Friends</span>
          <div className='user'>
            <div className='userInfo'>
              <img src="" alt="as"/>
              <div className='online'/>
              <span>Juliano Manzano</span>             
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RightBar