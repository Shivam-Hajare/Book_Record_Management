import React from 'react'
import "./errorPage.css"
const ErrorPage = () => {
    return (
        <section class="page_404">
            <div class="container">
                <h1 className='errPageH1'>404</h1>
                <div className="errPageContains">
                <h4 className='errPageH5'>Look like you're lost
                    the page you are looking for not avaible!</h4>
                <button className='errPagebtn'>GO to Home</button>

                </div>
            </div>
        </section>
    )
}

export default ErrorPage