import { Button } from "@/components/ui/button";

import Link from "next/link";
const Navbar = () => {
  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
      <nav className="hidden gap-6 text-lg font-medium md:flex md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          className="flex items-center gap-2 text-lg font-semibold"
          href="#"
        >
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="#">
          Home
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="#">
          Activities
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="#">
          Progress
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="#">
          Settings
        </Link>
      </nav>
      <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="flex-1 ml-auto sm:flex-initial">
          <Button size="sm" type="submit" variant="outline">
            {/* <SearchIcon className="h-4 w-4 mr-2 shrink-0.5" /> */}
            <input type="search" className="outline-none bg-white" />
            Search
          </Button>
        </div>
        <Button className="rounded-full" size="icon" variant="ghost">
          <img
            alt="Avatar"
            className="rounded-full"
            height="32"
            src="/favicon.ico"
            style={{
              aspectRatio: "32/32",
              objectFit: "cover",
            }}
            width="32"
          />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
