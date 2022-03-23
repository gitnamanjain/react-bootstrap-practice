import React from 'react'

function Cards() {
  return (
    <div className='Cards' >

      <div className="row row-cols-1 row-cols-md-3 g-4" >
        <div className="col">
          <div className="card h-40">
            <img src="https://liferay.github.io/lexiconcss/images/thumbnail_placeholder.gif" className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-40">
            <img src="https://liferay.github.io/lexiconcss/images/thumbnail_placeholder.gif" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-40">
            <img src="https://liferay.github.io/lexiconcss/images/thumbnail_placeholder.gif" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cards