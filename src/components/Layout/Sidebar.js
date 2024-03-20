import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { LibraryIcon } from "../../icons";
import { ListItem } from "./ListItem";
import { PillButton } from "./PillButton";
import { LibraryCard } from "./LibraryCard";

export const Sidebar = () => {
  return (
    <aside>
      <div className="text-sm">
        <ul className="bg-primaryBlack p-6 flex flex-col gap-5 mb-1 text-gray-400 rounded">
          <ListItem icon={faHouse} />
          <ListItem icon={faSearch} />
        </ul>
        <div className="bg-primaryBlack p-6 rounded">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex text-gray-400 justify-between">
                <div className="flex items-center gap-2">
                  <LibraryIcon className="fill-gray-400 w-[22px] h-[22px]" />
                  <h3>Your Library</h3>
                </div>
                <div className="flex gap-4">
                  <i>
                    <FontAwesomeIcon className="text-lg" icon={faPlus} />
                  </i>
                  <i>
                    <FontAwesomeIcon className="text-lg" icon={faArrowRight} />
                  </i>
                </div>
              </div>
              <div className="ml-[-5px] flex gap-2">
               <PillButton title="Playlists" />
               <PillButton title="Albums" />
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <FontAwesomeIcon className="text-sm text-gray-400" icon={faSearch} />
                <div>
                  <button className="text-gray-400 text-sm pr-1">Recents</button>
                  <FontAwesomeIcon className="text-sm text-gray-400" icon={faList} />
                </div>
              </div>
              <div className="pt-3 flex flex-col gap-2 ml-[-5px] overflow-visible">
                <LibraryCard />
                <LibraryCard />
                <LibraryCard />
                <LibraryCard />
                <LibraryCard />
                <LibraryCard />
                <LibraryCard />
                <LibraryCard />
                <LibraryCard />
                <LibraryCard />
                <LibraryCard />
                <LibraryCard />
                <LibraryCard />
                <LibraryCard />
                <LibraryCard />
                <LibraryCard />
                <LibraryCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
