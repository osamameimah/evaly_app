import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import Styled from "../../../assets/css/style.module.css";
import { Link } from "react-router-dom";

const ProfileItem = () => {
  const links = [
    { href: "/dashboard/profile", label: "Profile" },
    { href: "/dashboard/change-password", label: "Change Password" },
    { href: "/dashboard/login", label: "Sign out" },
  ];

  return (
    <>
      <Menu.Items
        className={Styled.dropdown_items}
        aria-orientation="horizontal"
      >
        {links.map((link) => (
          <Menu.Item key={link.href} as={Fragment}>
            {({ active }) => (
              <Link
                to={link.href}
                className={`${Styled.dropdown_item} ${
                  active ? `${Styled.active}` : ""
                }`}
              >
                {link.label}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </>
  );
};
export default ProfileItem;
