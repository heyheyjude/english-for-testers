import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import classesCss from "../BookPage.module.scss";
import levelStyles from "../../../styles/LevelStyles.module.scss";
import Button from "../../../components/Buttons/Button";
import { useSelector } from "react-redux";

export default function GroupMenu({className}) {
  const [isOpen, setIsOpen] = useState(false);
  const { currentGroup, mode, vocabularyMode } = useSelector((store) => store.book);

  return (
    <div className={cx(classesCss.GroupMenu, className)}>
      <Button
        className={cx(
          classesCss.GroupMenuToggle,
          levelStyles[`Level${currentGroup + 1}`]
        )}
        onClick={() => setIsOpen(!isOpen)}
        label={currentGroup + 1}
      />

      <div
        className={cx(classesCss.PopUpMenu, { [classesCss.Active]: isOpen })}
      >
        {new Array(6).fill(null).map((group, index) => {
          return (
            <NavLink
              key={"group" + index}
              to={{pathname:`/${mode}/${index + 1}/1`, state:{vocabularyMode}}}
              className={cx(
                classesCss.BookLink,
                levelStyles[`Level${index + 1}`]
              )}
              activeClassName={classesCss.Active}
              isActive={(match, location) => {
                const [, urlGroup] = location.pathname.match(
                  /\/([0-9])\/[0-9]*/
                );
                return Number(urlGroup) === index + 1;
              }}
            >
              {index + 1}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
