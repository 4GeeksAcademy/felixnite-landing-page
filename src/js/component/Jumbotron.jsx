import React from 'react'

const Jumbotron = () => {
    return (
        <div className='p-4 bg-Light'>
            <h1>A warm welcome</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet metus vel tincidunt dapibus. Praesent est erat, ultrices scelerisque quam sed, vehicula pulvinar risus</p>
            <p className="Lead">
                <a className="btn btn-primary btn-lg" role="button">Call to action!</a>
            </p>
        </div>
    )
}

export default Jumbotron