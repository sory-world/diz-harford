import { NavLink } from "react-router"

export const Link = ({ children, to }: { children: React.ReactNode; to: string }) => {
  return (
    <NavLink
      className="link"
      style={({ isActive }) => ({
        fontWeight: isActive ? 500 : 400,
      })}
      to={to}
    >
      {children}
    </NavLink>
  )
}
