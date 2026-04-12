// import { useState } from "react"
// import { VscSignOut } from "react-icons/vsc"
// import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"

// import { sidebarLinks } from "../../../data/dashboard-links"
// import { logout } from "../../../services/operations/authAPI"
// import ConfirmationModal from "../../common/ConfirmationModal"
// import SidebarLink from "./SidebarLink"

// export default function Sidebar() {
//   const { user, loading: profileLoading } = useSelector(
//     (state) => state.profile
//   )
//   const { loading: authLoading } = useSelector((state) => state.auth)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   // to keep track of confirmation modal
//   const [confirmationModal, setConfirmationModal] = useState(null)

//   if (profileLoading || authLoading) {
//     return (
//       <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
//         <div className="spinner"></div>
//       </div>
//     )
//   }

//   return (
//     <>
//       <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10">
//         <div className="flex flex-col">
//           {sidebarLinks.map((link) => {
//             if (link.type && user?.accountType !== link.type) return null
//             return (
//               <SidebarLink key={link.id} link={link} iconName={link.icon} />
//             )
//           })}
//         </div>
//         <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />
//         <div className="flex flex-col">
//           <SidebarLink
//             link={{ name: "Settings", path: "/dashboard/settings" }}
//             iconName="VscSettingsGear"
//           />
//           <button
//             onClick={() =>
//               setConfirmationModal({
//                 text1: "Are you sure?",
//                 text2: "You will be logged out of your account.",
//                 btn1Text: "Logout",
//                 btn2Text: "Cancel",
//                 btn1Handler: () => dispatch(logout(navigate)),
//                 btn2Handler: () => setConfirmationModal(null),
//               })
//             }
//             className="px-8 py-2 text-sm font-medium text-richblack-300"
//           >
//             <div className="flex items-center gap-x-2">
//               <VscSignOut className="text-lg" />
//               <span>Logout</span>
//             </div>
//           </button>
//         </div>
//       </div>
//       {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
//     </>
//   )
// }

import { useState } from "react"
import { VscSignOut, VscMenu } from "react-icons/vsc"
import { FiMoon } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

import { sidebarLinks } from "../../../data/dashboard-links"
import { logout } from "../../../services/operations/authAPI"
import ConfirmationModal from "../../common/ConfirmationModal"
import SidebarLink from "./SidebarLink"

export default function Sidebar() {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  )
  const { loading: authLoading } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [confirmationModal, setConfirmationModal] = useState(null)
  const [collapsed, setCollapsed] = useState(false)

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[240px] place-items-center 
        border-r border-richblack-700 bg-richblack-800/60 backdrop-blur-lg">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <>
      {/* 🔥 ALWAYS VISIBLE MINI BAR (WHEN COLLAPSED) */}
      {collapsed && (
        <button
          onClick={() => setCollapsed(false)}
          className="
            fixed left-2 top-24 z-[200]
            flex h-12 w-12 items-center justify-center
            rounded-xl bg-richblack-800/80 backdrop-blur-lg
            border border-yellow-500/30
            text-yellow-50 shadow-lg
            hover:scale-105 transition
          "
        >
          <VscMenu size={22} />
        </button>
      )}

      {/* 🔥 MAIN SIDEBAR */}
      <AnimatePresence>
        {!collapsed && (
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              fixed md:static z-50
              flex h-[calc(100vh-3.5rem)]
              w-[260px]
              flex-col
              border-r border-yellow-500/20
              bg-richblack-800/70 backdrop-blur-xl
              py-8 shadow-xl
            "
          >

            {/* 🔥 TOP CONTROLS */}
            <div className="flex items-center justify-between px-4 mb-6">

              {/* COLLAPSE BUTTON */}
              <button
                onClick={() => setCollapsed(true)}
                className="text-richblack-300 hover:text-yellow-50 transition"
              >
                <VscMenu size={22} />
              </button>

              {/* MOON ICON (THEME READY) */}
              <FiMoon className="text-yellow-50" />

            </div>

            {/* 🔥 PROFILE MINI SECTION */}
            <div className="flex items-center gap-3 px-5 mb-8">
              <img
                src={user?.image}
                alt="user"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="min-w-0">
                <p className="text-white text-sm font-semibold truncate">
                  {user.firstName}
                </p>
                <p className="text-xs text-richblack-300 truncate">
                  {user.email}
                </p>
              </div>
            </div>

            {/* 🔥 LINKS */}
            <div className="flex flex-col gap-2 px-3 relative">

              {sidebarLinks.map((link) => {
                if (link.type && user?.accountType !== link.type) return null

                return (
                  <SidebarLink
                    key={link.id}
                    link={link}
                    iconName={link.icon}
                    collapsed={false}
                  />
                )
              })}

            </div>

            {/* 🔥 DIVIDER */}
            <div className="mx-auto my-6 h-[1px] w-10/12 bg-gradient-to-r from-transparent via-richblack-600 to-transparent" />

            {/* 🔥 SETTINGS + LOGOUT */}
            <div className="flex flex-col gap-2 px-3 mt-auto">

              <SidebarLink
                link={{ name: "Settings", path: "/dashboard/settings" }}
                iconName="VscSettingsGear"
                collapsed={false}
              />

              {/* LOGOUT */}
              <button
                onClick={() =>
                  setConfirmationModal({
                    text1: "Are you sure?",
                    text2: "You will be logged out of your account.",
                    btn1Text: "Logout",
                    btn2Text: "Cancel",
                    btn1Handler: () => dispatch(logout(navigate)),
                    btn2Handler: () => setConfirmationModal(null),
                  })
                }
                className="
                  group flex items-center gap-x-3 
                  rounded-lg px-4 py-3 
                  text-sm font-medium 
                  text-richblack-300
                  transition-all duration-300
                  hover:bg-red-500/10 hover:text-red-400
                "
              >
                <VscSignOut className="text-lg transition-transform duration-300 group-hover:rotate-12" />
                <span>Logout</span>
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {confirmationModal && (
        <ConfirmationModal modalData={confirmationModal} />
      )}
    </>
  )
}
