import "./LinkButton.css"

export const LinkButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) => {
  return (
    <button className="link-button" onClick={onClick}>
      {children}
    </button>
  )
}
