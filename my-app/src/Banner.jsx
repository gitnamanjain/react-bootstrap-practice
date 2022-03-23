import React from "react";

function Banner() {
    return (
        <div className="Banner">
            <h1>Album example</h1>
            <p style={{width:"50%", margin:"auto auto 2% auto"}}>
                Something short and leading about the collection below-its
                contents, the creator,etc. Make it short and sweet, but not too
                short so folks don't simply skip over it entirely.
            </p>
            <button class="btn btn-primary" type="submit">Main call to action</button>
            <button class="btn btn-secondary" type="submit" style={{marginLeft:"1rem"}}>Secondary action</button>
        </div>
    );
}

export default Banner;
