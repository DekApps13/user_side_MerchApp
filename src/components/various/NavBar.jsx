import { Link } from 'react-router-dom';

const NavBar = () => {
  const st_nav1 = { backgroundColor: '#3097D1' }
  const st_nav2 = { color: '#CBE4F2', fontSize: '22px' }
  return (
    <nav className="navbar navbar-expand-md navbar-dark mb-4" style={st_nav1}>
      <a href="index.html" className="navbar-brand"><img src="/img/brand-white.png" alt="logo" className="img-fluid" width="80px" height="100px" /></a>

      <button className="navbar-toggler" data-toggle="collapse" data-target="#responsive"><span className="navbar-toggler-icon"></span></button>


      <div className="collapse navbar-collapse" id="responsive">
        <ul className="navbar-nav mr-auto text-capitalize">
          <li className="nav-item"><Link to="/" className="nav-link active">Inicio</Link></li>
          <li className="nav-item"><Link to="/register" className="nav-link">Registrate</Link></li>
          <li className="nav-item"><Link to="/login" className="nav-link">Log In</Link></li>
          <li className="nav-item"><Link to="/queryChat" className="nav-link ">Haz tu Consulta!!</Link></li>
          <li className="nav-item"><Link to="/listChat" className="nav-link ">Listado de Consultas</Link></li>
          <li className="nav-item"><Link to="/logout" className="nav-link ">Log Out</Link></li>
        </ul>

        <form action="" className="form-inline ml-auto d-none d-md-block">
          <input type="text" name="search" id="search" placeholder="Search" className="form-control form-control-sm" />
        </form>
        <a href="#modalview" className="text-decoration-none" style={st_nav2} data_toggle="modal"><i className="far fa-bell ml-3 d-none d-md-block"></i></a>
        <img src="/img/avatar-dhg.png" alt="" className="rounded-circle ml-3 d-none d-md-block" width="32px" height="32px" />
      </div>
    </nav>
  )
}

export default NavBar