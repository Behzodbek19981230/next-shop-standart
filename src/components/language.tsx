// components/LanguageDropdown.tsx
import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { get } from "lodash";
import Image from "next/image"; // For optimized images
import languages from "@/components/common/languages";
import flagrussia from "@/assets/images/flags/russia.svg";

// i18n

const LanguageDropdown: React.FC = () => {
  // Declare a new state variable, which we'll call "selectedLang"
  const [selectedLang, setSelectedLang] = useState<string>("");

  useEffect(() => {
    const currentLanguage = localStorage.getItem("I18N_LANGUAGE") || "";
    setSelectedLang(currentLanguage);
  }, []);

  const changeLanguageAction = (lang: string) => {
    // Set language as i18n
    // i18n.changeLanguage(lang);
    localStorage.setItem("I18N_LANGUAGE", lang);
    setSelectedLang(lang);
  };

  const [isLanguageDropdown, setIsLanguageDropdown] = useState<boolean>(false);
  const toggleLanguageDropdown = () => {
    setIsLanguageDropdown(!isLanguageDropdown);
  };

  return (
    <React.Fragment>
      <Dropdown
        isOpen={isLanguageDropdown}
        toggle={toggleLanguageDropdown}
        className="ms-1 topbar-head-dropdown header-item"
      >
        <DropdownToggle
          className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
          tag="button"
        >
          <Image
            src={get(languages, `${selectedLang}.flag`) || flagrussia}
            alt="Header Language"
            height={25}
            width={25}
            className="rounded"
          />
        </DropdownToggle>
        <DropdownMenu className="notify-item language py-2">
          {Object.keys(languages).map((key) => (
            <DropdownItem
              key={key}
              onClick={() => changeLanguageAction(key)}
              className={`notify-item ${
                selectedLang === key ? "active" : "none"
              }`}
            >
              <Image
                src={get(languages, `${key}.flag`) || flagrussia}
                alt="Language Flag"
                className="me-2 rounded"
                height={18}
                width={18}
              />
              <span className="align-middle">
                {get(languages, `${key}.label`)}
              </span>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default LanguageDropdown;
