import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

const MiddleCol = () => {
  return (
    <>


      <div className="col-12 col-lg-6" >
        <div className="middle-column">
          <div className="card" >
            <div className="card-header bg-transparent">


              <form className="form-inline">
                <div className="input-group w-100">
                  <input type="text" name="message" id="message" placeholder="Message" className="form-control form-control-md" />
                  <div className="input-group-append">
                    <button type="button" className="btn btn-info"><FontAwesomeIcon icon={faPaperPlane}/></button>
                  </div>
                </div>
              </form>

            </div>

            <div className="card-body">

              <div className="media">

                <img src="/img/avatar-dhg.png" alt="img" width="55px" height="55px" className="rounded-circle mr-3" />
                <div className="media-body">
                  <h5>Dave Gamache</h5>
                  <p className="card-text text-justify">Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  
                  
                  <div className="row no-gutters mb-3">
                    <div className="col-6 p-1 text-center">
                      <img src="/img/adventure-alps-clouds-2259810.jpg" alt="" className="img-fluid mb-2" />
                      <img src="/img/aerial-view-architectural-design-buildings-2228123.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-6 p-1 text-center">
                      <img src="/img/celebration-colored-smoke-dark-2297472.jpg" alt="" className="img-fluid mb-2" />
                      <img src="/img/bodybuilding-exercise-fitness-2294361.jpg" alt="" className="img-fluid" />
                    </div>
                  </div>


                  <div className="media mb-3">
                    <img src="/img/avatar-dhg.png" alt="img" width="45px" height="45px" className="rounded-circle mr-2" />
                    <div className="media-body">
                      <p className="card-text text-justify">Jacon Thornton: Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.</p>
                    </div>
                  </div>


                  <div className="media">
                    <img src="/img/avatar-mdo.png" alt="img" width="45px" height="45px" className="rounded-circle mr-2" />
                    <div className="media-body">
                      <p className="card-text text-justify">Mark Otto: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    </div>
                  </div>


                </div>
                <small>5min</small>

              </div>
            </div>



            <hr />



            <div className="card-body">

              <div className="media">
                <img src="/img/avatar-fat.jpg" alt="img" width="55px" height="55px" className="rounded-circle mr-3" />

                <div className="media-body">
                  <h5>Jacob Thornton</h5>
                  <p className="text-justify">Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>



                </div>

                <small>14 min</small>

              </div>





            </div>



            <hr />



            <div className="card-body">

              <div className="media">

                <img src="/img/avatar-mdo.png" alt="img" width="55px" height="55px" className="rounded-circle mr-3" />
                <div className="media-body">
                  <h5>Mark Otto</h5>
                  <p className="text-justify">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                  <a href="/img/mid5.jpg" data-lightbox="id"><img src="/img/mid5.jpg" alt="" className="img-fluid shadow-sm img-thumbnail" />   </a>

                </div>

                <small className="text-muted">10 min</small>

              </div>




            </div>








          </div>









        </div>








      </div>













      <br /> <br /> <br /><br /> <br /> <br />


    </>
  )
}

export default MiddleCol