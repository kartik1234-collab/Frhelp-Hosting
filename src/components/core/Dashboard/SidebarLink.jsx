import { NavLink } from "react-router-dom"
import * as Icons from "react-icons/vsc"
import { motion } from "framer-motion"

export default function SidebarLink({ link, iconName, collapsed }) {
  const Icon = Icons[iconName]

  return (
    <NavLink
      to={link.path}
      title={collapsed ? link.name : ""}
      className={({ isActive }) =>
        `relative flex items-center rounded-lg px-3 py-3
        transition-all duration-300 group
        ${collapsed ? "justify-center" : "gap-3"}
        ${
          isActive
            ? "bg-yellow-500/20 text-yellow-50"
            : "text-richblack-200 hover:bg-richblack-700 hover:text-yellow-50"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {/* 🔥 ACTIVE INDICATOR */}
          {isActive && (
            <motion.div
              layoutId="activeBar"
              className="absolute left-0 top-0 h-full w-[4px] bg-yellow-400 rounded-r-lg"
            />
          )}

          {/* 🔥 ICON */}
          <Icon
            className={`text-lg transition-transform duration-300 ${
              collapsed ? "scale-110" : ""
            }`}
          />

          {/* 🔥 TEXT */}
          {!collapsed && (
            <span className="text-sm font-medium whitespace-nowrap">
              {link.name}
            </span>
          )}

          {/* 🔥 TOOLTIP (ONLY WHEN COLLAPSED) */}
          {collapsed && (
            <span className="
              absolute left-14 whitespace-nowrap
              bg-richblack-900 text-white text-xs px-2 py-1 rounded-md
              opacity-0 group-hover:opacity-100
              transition duration-200 z-50
            ">
              {link.name}
            </span>
          )}

          {/* 🔔 DEMO BADGE */}
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