import React, { useEffect } from 'react'
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from '../firebase/firebase';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch, useSelector } from 'react-redux';
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER, selectUserName } from '../../redux/slice/authSlice';
import { doc, getDoc } from 'firebase/firestore';
import ShowOnLogin, { ShowAdmin, ShowOnLogout } from '../hidenLinks/hidenLinks';



const MySwal = withReactContent(Swal);

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const name = useSelector(selectUserName) 

  const getUserFirestore = async (uid)=>{
    //console.log('uid: ', uid)
    const docRef = doc(db, `users/${uid}`)//esto devuelve la referencia a donde apuntar
    const docSnap = await getDoc(docRef)//esto devuelve "una vista" del contenido que haya en esa ref
    const data = {...docSnap.data(), uid}//con el .data() simplifico la lectura de la info del usuario
    return data //conseguimos el rol del usuario
  }
  
  const setUserWithFirestoreRole = (userFromFirebase)=>{
    //traer el usuaro por UID - usar un metodo getUserFirestore <--- no existe HAY QUE CREARLO!! = listo!
    //console.log(userFromFirebase.uid)
    getUserFirestore(userFromFirebase.uid).then((data)=>{
      //console.log('data: ', data)
      // Armar el objeto con el usuario y el rol = listo!
      dispatch(SET_ACTIVE_USER({
        email: data.email,
        userName: data.name,
        userID: data.uid,
        role: data.role,
      }))
    })
    //Armar el objeto con el usuario y el rol

  }

  //monitor sig in user
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //console.log('user header',user);

        if(!user.displayName){
          //const u1 = user.email.substring(0, user.email.indexOf('@'))
          //const uName = u1.charAt(0).toLocaleUpperCase() + u1.slice(1)
          //console.log('uName: ',uName);
          setUserWithFirestoreRole(user)
        }else{
          //setDisplayName(user.displayName)
          dispatch(SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName,
            userID: user.uid,
          }))
        }
      }
    });
  },[dispatch])

  const logoutUser = ()=>{
    signOut(auth).then(() => {
      MySwal.fire({
        title: "Are you sure?",
        text: "You want to log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirm",
      }).then((result) => {
        if (result.isConfirmed) {
          MySwal.fire({
            title: "Log out",
            text: "Have an excellent day!",
            icon: "success",
            confirmButtonText: "Ok",
          });
          dispatch(REMOVE_ACTIVE_USER())
        }
      });
      navigate('/')
    }).catch((error) => {
      MySwal.fire({
        title: 'Oops...',
        text: error.message,
        icon: "error",
        confirmButtonText: "Ok",
      })
    });
  }

  return (
    <div className='header__container'>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to='/' className='navbar__title'><Navbar.Brand><span className='navbar__title-span'>SF</span> e-commerce</Navbar.Brand></Link> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <ShowOnLogin>
            <ShowAdmin>
              <NavLink to='/admin' className={({isActive})=>(isActive ? 'navbar__admin isActive':'navbar__admin noActive')}><Navbar>Admin</Navbar></NavLink>
            </ShowAdmin>
          </ShowOnLogin>
            <NavLink to='/contact' className={({isActive})=>(isActive ? 'navbar__contact isActive':'navbar__contact noActive')}><Navbar>Contact us</Navbar></NavLink>
          </Nav>
          <Nav>
            <ShowOnLogin>
              <Link to='#' className='navbar__user'><Navbar><span className='navbar__user-hi'>Hi </span>{name}</Navbar></Link>
              <NavLink to='/' className='navbar__login noActive' onClick={logoutUser} ><Navbar>Logout</Navbar></NavLink>
              <NavLink to='/order-history' className={({isActive})=>(isActive ? 'navbar__order isActive':'navbar__order noActive')}><Navbar>My Orders</Navbar></NavLink>
              <NavLink to='/cart' className={({isActive})=>(isActive ? 'navbar__cart isActive':'navbar__cart noActive')}><Navbar><BsCart2 size={18}/>0</Navbar></NavLink>
            </ShowOnLogin>
            <ShowOnLogout>
              <NavLink to='/login' className={({isActive})=>(isActive ? 'navbar__login isActive':'navbar__login noActive')}><Navbar>Login</Navbar></NavLink>
              <NavLink to='/register' className={({isActive})=>(isActive ? 'navbar__login isActive':'navbar__login noActive')}><Navbar>Register</Navbar></NavLink>
            </ShowOnLogout>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header