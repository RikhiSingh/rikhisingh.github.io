"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({link}) => {

    const pathName = usePathname();
    console.log(pathName);

    return ( 
        <Link href={link.url} className="">{link.title}</Link>
     );
}
 
export default NavLink;