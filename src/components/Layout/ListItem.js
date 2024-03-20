import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ListItem = ({icon}) => {
  return (
    <li className="flex items-center gap-3">
      <i>
        <FontAwesomeIcon className="text-lg" icon={icon} />
      </i>
      <Link to="/">Home</Link>
    </li>
  )
}
