import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sed voluptatem animi ducimus tempore alias asperiores praesentium expedita reiciendis eum qui dolore debitis fuga sit vitae,
                    sapiente placeat molestiae quasi culpa?
                </p>
                <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Asperiores distinctio accusamus, similique recusandae excepturi amet.
                    Iure repellendus expedita cum nesciunt quo totam praesentium,
                     repudiandae soluta architecto culpa hic assumenda sit velit dolores illum ipsam, 
                     sequi debitis dicta voluptate at sapiente numquam deserunt odit. Enim, facilis laborum. Quisquam atque maxime ipsa! 
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox
