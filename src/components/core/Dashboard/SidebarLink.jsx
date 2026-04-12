// import * as Icons from "react-icons/vsc"
// import { useDispatch } from "react-redux"
// import { NavLink, matchPath, useLocation } from "react-router-dom"
// // import { resetCourseState } from "../../../slices/courseSlice"

// export default function SidebarLink({ link, iconName }) {
//   const Icon = Icons[iconName]
//   const location = useLocation()
//   const dispatch = useDispatch()

//   const matchRoute = (route) => {
//     return matchPath({ path: route }, location.pathname)
//   }

//   return (
//     <NavLink
//       to={link.path}
//     //   onClick={() => dispatch(resetCourseState())}
//       className={`relative px-8 py-2 text-sm font-medium ${
//         matchRoute(link.path)
//           ? "bg-yellow-800 text-yellow-50"
//           : "bg-opacity-0 text-richblack-300"
//       } transition-all duration-200`}
//     >
//       <span
//         className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-50 ${
//           matchRoute(link.path) ? "opacity-100" : "opacity-0"
//         }`}
//       ></span>
//       <div className="flex items-center gap-x-2">
//         {/* Icon Goes Here */}
//         <Icon className="text-lg" />
//         <span>{link.name}</span>
//       </div>
//     </NavLink>
//   )
// }

import { NavLink } from "react-router-dom"
import * as Icons from "react-icons/vsc"
import { motion } from "framer-motion"

export default function SidebarLink({ link, iconName, collapsed }) {
  const Icon = Icons[iconName]

  return (
    <NavLink
      to={link.path}
      className={({ isActive }) =>
        `relative flex items-center gap-3 rounded-lg px-4 py-3
        transition-all duration-300
        ${
          isActive
            ? "bg-yellow-500/20 text-yellow-50"
            : "text-richblack-200 hover:bg-richblack-700 hover:text-yellow-50"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {/* 🔥 ACTIVE INDICATOR BAR */}
          {isActive && (
            <motion.div
              layoutId="activeBar"
              className="absolute left-0 top-0 h-full w-[4px] bg-yellow-400 rounded-r-lg"
            />
          )}

          {/* ICON */}
          <Icon className="text-lg min-w-[20px]" />

          {/* TEXT */}
          {!collapsed && (
            <span className="text-sm font-medium">{link.name}</span>
          )}

          {/* 🔔 NOTIFICATION BADGE (DEMO) */}
          {link.name === "Enrolled Courses" && !collapsed && (
            <span className="
              ml-auto rounded-full bg-pink-500 px-2 py-[2px] 
              text-[10px] font-bold text-white
            ">
              3
            </span>
          )}
        </>
      )}
    </NavLink>
  )
}
