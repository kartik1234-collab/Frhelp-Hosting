// import { useEffect, useState } from "react"
// import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
// import { BsChevronDown } from "react-icons/bs"
// import { useSelector } from "react-redux"
// import { Link, matchPath, useLocation } from "react-router-dom"

// import logo from "../../assets/Logo/LogoFullLight.png"
// import { NavbarLinks } from "../../data/navbar-links"
// import { apiConnector } from "../../services/apiconnector"
// import { categories } from "../../services/apis"
// import { ACCOUNT_TYPE } from "../../utils/constants"
// import ProfileDropdown from "../core/Auth/ProfileDropDown"
// import AIChatWidget from "./AIChatWidget"
// function Navbar() {
//     const { token } = useSelector((state) => state.auth)
//     const { user } = useSelector((state) => state.profile)
//     const { totalItems } = useSelector((state) => state.cart)
//     const location = useLocation()

//     const [subLinks, setSubLinks] = useState([])
//     const [loading, setLoading] = useState(false)

//     useEffect(() => {
//         ;(async () => {
//         setLoading(true)
//         try {
//             const res = await apiConnector("GET", categories.CATEGORIES_API)
//             setSubLinks(res.data.data)
//         } catch (error) {
//             console.log("Could not fetch Categories.", error)
//         }
//         setLoading(false)
//         })()
//     }, [])

//     // console.log("sub links", subLinks)

//     const matchRoute = (route) => {
//         return matchPath({ path: route }, location.pathname)
//     }

//     return (
//         <div
//         className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
//             location.pathname !== "/" ? "bg-richblack-800" : ""
//         } transition-all duration-200`}
//         >
//         <div className="flex w-11/12 max-w-maxContent items-center justify-between">
//             {/* Logo */}
//             <Link to="/">
//             <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
//             </Link>
//             {/* Navigation links */}
//             <nav className="hidden md:block">
//             <ul className="flex gap-x-6 text-richblack-25">
//                 {NavbarLinks.map((link, index) => (
//                 <li key={index}>
//                     {link.title === "Catalog" ? (
//                     <>
//                         <div
//                         className={`group relative flex cursor-pointer items-center gap-1 ${
//                             matchRoute("/catalog/:catalogName")
//                             ? "text-yellow-25"
//                             : "text-richblack-25"
//                         }`}
//                         >
//                         <p>{link.title}</p>
//                         <BsChevronDown />
//                         <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
//                             <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
//                             {loading ? (
//                             <p className="text-center">Loading...</p>
//                             ) : subLinks.length ? (
//                             <>
//                                 {subLinks
//                                 ?.filter(
//                                     (subLink) => subLink?.courses?.length > 0
//                                 )
//                                 ?.map((subLink, i) => (
//                                     <Link
//                                     to={`/catalog/${subLink.name
//                                         .split(" ")
//                                         .join("-")
//                                         .toLowerCase()}`}
//                                     className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
//                                     key={i}
//                                     >
//                                     <p>{subLink.name}</p>
//                                     </Link>
//                                 ))}
//                             </>
//                             ) : (
//                             <p className="text-center">No Courses Found</p>
//                             )}
//                         </div>
//                         </div>
//                     </>
//                     ) : (
//                     <Link to={link?.path}>
//                         <p
//                         className={`${
//                             matchRoute(link?.path)
//                             ? "text-yellow-25"
//                             : "text-richblack-25"
//                         }`}
//                         >
//                         {link.title}
//                         </p>
//                     </Link>
//                     )}
//                 </li>
//                 ))}
//             </ul>
//             </nav>
//             {/* Login / Signup / Dashboard */}
//             <div className="hidden items-center gap-x-4 md:flex">
//             {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
//                 <Link to="/dashboard/cart" className="relative">
//                 <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
//                 {totalItems > 0 && (
//                     <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
//                     {totalItems}
//                     </span>
//                 )}
//                 </Link>
//             )}
//             {token === null && (
//                 <Link to="/login">
//                 <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//                     Log in
//                 </button>
//                 </Link>
//             )}
//             {token === null && (
//                 <Link to="/signup">
//                 <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//                     Sign up
//                 </button>
//                 </Link>
//             )}
//             {token !== null && <ProfileDropdown />}
//             </div>
//             <button className="mr-4 md:hidden">
//             <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
//             </button>
//         </div>
//         <AIChatWidget/>
//         </div>
//     )
// }

// export default Navbar
import { useEffect, useState } from "react"
import { BsChevronDown } from "react-icons/bs"
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai"
import { HiMenuAlt3 } from "react-icons/hi"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

import logo from "../../assets/Logo/LogoFullLight.png"
import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiconnector"
import { categories } from "../../services/apis"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropdown from "../core/Auth/ProfileDropDown"

function Navbar() {
  const { token }      = useSelector((state) => state.auth)
  const { user }       = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const location       = useLocation()

  const [subLinks, setSubLinks]   = useState([])
  const [loading, setLoading]     = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [catalogOpen, setCatalogOpen] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        setSubLinks(res.data.data)
      } catch (e) { console.log("Could not fetch Categories.", e) }
      setLoading(false)
    })()
  }, [])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 18)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  useEffect(() => { setMobileOpen(false); setCatalogOpen(false) }, [location])

  const matchRoute = (route) => matchPath({ path: route }, location.pathname)
  const isActive   = (path) => !!matchRoute(path)

  return (
    <>
      <style>{`
        /* ── Shared nav link hover ── */
        .n-link {
          position:relative; padding:6px 12px; border-radius:8px;
          font-size:14px; font-weight:500; cursor:pointer;
          color:rgba(175,178,191,0.9);
          transition:color 0.22s ease, background 0.22s ease;
          text-decoration:none; display:inline-flex; align-items:center; gap:5px;
        }
        .n-link::after {
          content:"";
          position:absolute; bottom:0; left:50%; right:50%;
          height:2px; border-radius:2px;
          background:linear-gradient(90deg,#06b6d4,#a855f7);
          transition:left 0.3s cubic-bezier(0.4,0,0.2,1),
                     right 0.3s cubic-bezier(0.4,0,0.2,1);
          box-shadow:0 0 8px rgba(6,182,212,0.5);
        }
        .n-link:hover, .n-link.active {
          color:#fff;
          background:rgba(6,182,212,0.06);
        }
        .n-link:hover::after, .n-link.active::after {
          left:10%; right:10%;
        }
        /* chevron rotation */
        .catalog-trigger:hover .chev { transform:rotate(180deg); }
        .chev { transition:transform 0.22s ease; }

        /* ── Dropdown ── */
        .cat-drop {
          opacity:0; visibility:hidden; pointer-events:none;
          transform:translateY(8px) scale(0.97);
          transition:all 0.22s cubic-bezier(0.4,0,0.2,1);
          position:absolute; top:calc(100% + 10px); left:50%;
          translate:-50% 0;
          width:230px;
          background:rgba(6,10,24,0.97);
          backdrop-filter:blur(20px);
          border:1px solid rgba(6,182,212,0.15);
          border-radius:14px; padding:8px;
          box-shadow:0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(6,182,212,0.05);
          z-index:1000;
        }
        .catalog-trigger:hover .cat-drop,
        .catalog-trigger:focus-within .cat-drop {
          opacity:1; visibility:visible; pointer-events:all;
          transform:translateY(0) scale(1);
        }
        .cat-item {
          display:block; padding:9px 12px; border-radius:8px;
          font-size:13.5px; color:rgba(255,255,255,0.6);
          text-decoration:none;
          border-left:2px solid transparent;
          transition:all 0.18s ease;
        }
        .cat-item:hover {
          color:#22d3ee;
          background:rgba(6,182,212,0.07);
          border-left-color:#06b6d4;
          padding-left:16px;
        }
        /* arrow tip */
        .drop-arrow {
          position:absolute; top:-5px; left:50%; translate:-50% 0;
          width:10px; height:10px;
          background:rgba(6,10,24,0.97);
          border-top:1px solid rgba(6,182,212,0.15);
          border-left:1px solid rgba(6,182,212,0.15);
          transform:rotate(45deg);
          border-radius:2px;
        }

        /* ── Signup btn glow ── */
        .signup-btn {
          padding:8px 22px; border-radius:8px; border:none;
          background:linear-gradient(135deg,#06b6d4,#a855f7);
          color:#fff; font-size:14px; font-weight:600; cursor:pointer;
          transition:all 0.25s ease;
          box-shadow:0 0 18px rgba(6,182,212,0.25), 0 0 18px rgba(168,85,247,0.15);
          position:relative; overflow:hidden;
        }
        .signup-btn::after {
          content:"";
          position:absolute; top:0; left:-100%; width:60%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent);
          animation:shine 3s ease-in-out infinite;
        }
        .signup-btn:hover {
          transform:translateY(-1px);
          box-shadow:0 0 32px rgba(6,182,212,0.45), 0 0 32px rgba(168,85,247,0.3);
        }
        @keyframes shine {
          0%{left:-100%} 100%{left:200%}
        }

        /* ── Cart badge ── */
        .cart-badge {
          position:absolute; top:-6px; right:-7px;
          width:18px; height:18px; border-radius:50%;
          background:linear-gradient(135deg,#06b6d4,#a855f7);
          display:flex; align-items:center; justify-content:center;
          font-size:10px; font-weight:700; color:#fff;
          box-shadow:0 0 8px rgba(6,182,212,0.5);
        }

        /* ── Mobile menu ── */
        @keyframes mob-in {
          from{opacity:0;transform:translateY(-8px)}
          to{opacity:1;transform:translateY(0)}
        }
        .mob-menu { animation:mob-in 0.28s cubic-bezier(0.34,1.2,0.64,1) both; }
        .mob-link {
          display:block; padding:14px 0;
          border-bottom:1px solid rgba(255,255,255,0.04);
          font-size:15px; font-weight:500;
          color:rgba(175,178,191,0.85);
          text-decoration:none;
          transition:color 0.2s;
        }
        .mob-link:hover, .mob-link.active { color:#22d3ee; }
      `}</style>

      <nav style={{
        position:"sticky", top:0, zIndex:999, width:"100%",
        transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)",
        background: scrolled ? "rgba(0,5,14,0.9)" : "rgba(0,8,20,0.8)",
        backdropFilter: scrolled ? "blur(22px)" : "blur(10px)",
        WebkitBackdropFilter: scrolled ? "blur(22px)" : "blur(10px)",
        borderBottom: `1px solid ${scrolled ? "rgba(6,182,212,0.18)" : "rgba(255,255,255,0.05)"}`,
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.5), 0 0 60px rgba(6,182,212,0.04)" : "none",
      }}>
        {/* top aurora line when scrolled */}
        {scrolled && (
          <div style={{
            position:"absolute", top:0, left:0, right:0, height:"1px",
            background:"linear-gradient(90deg, transparent, rgba(6,182,212,0.5), rgba(168,85,247,0.4), transparent)",
          }} />
        )}

        <div style={{
          maxWidth:"1260px", margin:"0 auto", padding:"0 28px",
          height:"62px", display:"flex", alignItems:"center", justifyContent:"space-between",
        }}>

          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" width={144} height={29} loading="lazy"
              style={{ transition:"filter 0.3s", filter:scrolled ? "brightness(1.1)" : "brightness(1)" }} />
          </Link>

          {/* ── Desktop Nav — HIDDEN on mobile, visible md+ ── */}
          <ul style={{
            display:"flex", alignItems:"center", gap:"4px",
            listStyle:"none", margin:0, padding:0,
          }} className="hidden md:flex">
            {NavbarLinks.map((link, i) => (
              <li key={i}>
                {link.title === "Catalog" ? (
                  <div className="catalog-trigger" style={{ position:"relative" }}>
                    <div className={`n-link ${isActive("/catalog/:catalogName") ? "active" : ""}`}>
                      {link.title}
                      <BsChevronDown className="chev" style={{ fontSize:"11px" }} />
                    </div>
                    <div className="cat-drop">
                      <div className="drop-arrow" />
                      {loading ? (
                        <div style={{ padding:"14px", textAlign:"center", color:"rgba(255,255,255,0.3)", fontSize:"13px" }}>
                          Loading...
                        </div>
                      ) : subLinks?.filter(s => s?.courses?.length > 0).length ? (
                        subLinks.filter(s => s?.courses?.length > 0).map((s, j) => (
                          <Link key={j} to={`/catalog/${s.name.split(" ").join("-").toLowerCase()}`} className="cat-item">
                            {s.name}
                          </Link>
                        ))
                      ) : (
                        <div style={{ padding:"14px", textAlign:"center", color:"rgba(255,255,255,0.3)", fontSize:"13px" }}>
                          No Courses Found
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path} className={`n-link ${isActive(link?.path) ? "active" : ""}`}>
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* ── Auth Area — desktop ── */}
          <div style={{ display:"flex", alignItems:"center", gap:"12px" }} className="hidden md:flex">
            {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
              <Link to="/dashboard/cart" style={{ position:"relative", display:"flex" }}>
                <AiOutlineShoppingCart
                  style={{ fontSize:"22px", color:"rgba(175,178,191,0.8)", transition:"color 0.2s", cursor:"pointer" }}
                  onMouseEnter={e => e.currentTarget.style.color="#22d3ee"}
                  onMouseLeave={e => e.currentTarget.style.color="rgba(175,178,191,0.8)"}
                />
                {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
              </Link>
            )}
            {token === null && (
              <Link to="/login" style={{ textDecoration:"none" }}>
                <button style={{
                  padding:"8px 20px", borderRadius:"8px",
                  background:"transparent", cursor:"pointer",
                  border:"1px solid rgba(255,255,255,0.1)",
                  color:"rgba(255,255,255,0.7)", fontSize:"14px", fontWeight:500,
                  transition:"all 0.22s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(6,182,212,0.4)"; e.currentTarget.style.color="#22d3ee"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.1)"; e.currentTarget.style.color="rgba(255,255,255,0.7)"; }}
                >
                  Log in
                </button>
              </Link>
            )}
            {token === null && (
              <Link to="/signup" style={{ textDecoration:"none" }}>
                <button className="signup-btn shimmer-btn">Sign up</button>
              </Link>
            )}
            {token !== null && <ProfileDropdown />}
          </div>

          {/* ── Hamburger — ONLY on mobile (md:hidden) ── */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background:"none", border:"none", cursor:"pointer",
              color:"rgba(175,178,191,0.8)", padding:"4px",
              display:"flex", alignItems:"center",
            }}
          >
            {mobileOpen
              ? <AiOutlineClose  fontSize={24} />
              : <HiMenuAlt3 fontSize={24} />
            }
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div className="mob-menu md:hidden" style={{
            background:"rgba(0,5,14,0.97)",
            backdropFilter:"blur(20px)",
            borderTop:"1px solid rgba(6,182,212,0.1)",
            padding:"12px 28px 24px",
          }}>
            {NavbarLinks.map((link, i) => (
              <div key={i}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      onClick={() => setCatalogOpen(!catalogOpen)}
                      style={{
                        display:"flex", alignItems:"center", justifyContent:"space-between",
                        padding:"14px 0", borderBottom:"1px solid rgba(255,255,255,0.04)",
                        color:"rgba(175,178,191,0.85)", fontSize:"15px", fontWeight:500, cursor:"pointer",
                      }}
                    >
                      {link.title}
                      <BsChevronDown style={{ transform:catalogOpen?"rotate(180deg)":"rotate(0)", transition:"transform 0.2s" }} />
                    </div>
                    {catalogOpen && (
                      <div style={{ paddingLeft:"16px" }}>
                        {subLinks?.filter(s => s?.courses?.length > 0).map((s, j) => (
                          <Link key={j} to={`/catalog/${s.name.split(" ").join("-").toLowerCase()}`}
                            className="mob-link" style={{ paddingLeft:"0", fontSize:"14px" }}>
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={link?.path} className={`mob-link ${isActive(link?.path) ? "active" : ""}`}>
                    {link.title}
                  </Link>
                )}
              </div>
            ))}

            <div style={{ display:"flex", gap:"10px", marginTop:"20px", flexWrap:"wrap" }}>
              {token === null ? (
                <>
                  <Link to="/login" style={{ flex:1, textDecoration:"none" }}>
                    <button style={{
                      width:"100%", padding:"11px", borderRadius:"8px",
                      background:"transparent", border:"1px solid rgba(255,255,255,0.1)",
                      color:"rgba(255,255,255,0.75)", fontSize:"14px", fontWeight:500, cursor:"pointer",
                    }}>Log in</button>
                  </Link>
                  <Link to="/signup" style={{ flex:1, textDecoration:"none" }}>
                    <button className="signup-btn" style={{ width:"100%", padding:"11px" }}>Sign up</button>
                  </Link>
                </>
              ) : (
                <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                  {user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
                    <Link to="/dashboard/cart" style={{ position:"relative" }}>
                      <AiOutlineShoppingCart style={{ fontSize:"22px", color:"rgba(175,178,191,0.8)" }} />
                      {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                    </Link>
                  )}
                  <ProfileDropdown />
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar

