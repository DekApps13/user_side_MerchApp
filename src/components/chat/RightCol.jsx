const RightCol = ()=>{
  const st_rc1 = {fontSize: '18px'}
  return(
    <>
      <div className="col-12 col-lg-3">


<div className="right-column">

    <div className="card shadow-sm mb-4">
        <div className="card-body">
            <h6 className="card-title">Sponsored</h6>
            <img src="/img/right1.jpg" alt="card-img" className="card-img mb-3"/>
            <p className="card-text text-justify"> <span className="h6">It might be time to visit
                    Iceland.</span> Iceland is so chill, and everything looks cool here. Also, we heard
                the people are pretty nice. What are you waiting for?</p>
            <a href="#" className="btn btn-outline-info card-link btn-sm">Buy a ticket</a>


        </div>

    </div>


    <div className="card shadow-sm mb-4">

        <div className="card-body">

            <h6 className="card-title ">Likes <a href="#" className="ml-1"><small>.View All</small> </a> </h6>
            <div className="row no-gutters d-none d-lg-flex">
                <div className="col-6 p-1">
                    <img src="/img/avatar-dhg.png" alt="img" width="80px" height="80px"
                        className="rounded-circle mb-4"/>
                    <img src="/img/avatar-fat.jpg" alt="img" width="80px" height="80px"
                        className="rounded-circle"/>



                </div>
                <div className="col-6 p-1 text-left">
                    <h6>Jacob Thornton @fat</h6>
                    <a href="#" className="btn btn-outline-info btn-sm mb-3"><i
                            className="fas fa-user-friends"></i>Follow </a>

                    <h6>Mark otto</h6>
                    <a href="#" className="btn btn-outline-info  btn-sm"><i
                            className="fas fa-user-friends"></i>Follow </a>

                </div>

            </div>

        </div>

        <div className="card-footer">

            <p className="lead" style={st_rc1}>Dave really likes these nerds, no one knows why
                though.</p>
        </div>



    </div>

    <div className="card shadow-sm">
        <div className="card-body">
            <p>&copy; 2018 Bootstrap



                <a href="#">About</a>
                <a href="#">Help</a>
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Cookies</a>
                <a href="#">Ads </a>
                <a href="#">Info</a>
                <a href="#">Brand</a>
                <a href="#">Blog</a>
                <a href="#">Status</a>
                <a href="#">Apps</a>
                <a href="#">Jobs</a>
                <a href="#">Advertise</a>

















            </p>
        </div>

    </div>









</div>




























</div>
    </>
  )
}

export default RightCol