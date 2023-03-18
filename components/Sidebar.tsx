import React from "react";
import Logo from "./svg/Logo";
import Link from "next/link";
import Dashboard from "./svg/Dashboard";
import Driver from "./svg/Driver";
import Bookings from "./svg/Bookings";
import Notifications from "./svg/Notifications";
import Settings from "./svg/Settings";
import PaymentDetails from "./svg/PaymentDetails";
import Transactions from "./svg/Transactions";
import CarReports from "./svg/CarReports";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between p-6 text-white bg-black w-60">
      <div className="flex flex-col space-y-5">
        <div>
          {/* LOGO */}
          <Link href={"/"} className="block px-2 py-6">
            <Logo />
          </Link>
          {/* END LOGO */}
        </div>
        <ul>
          <li>
            <Link
              href={"/"}
              className="relative flex flex-row px-4 py-3 rounded-md bg-primary"
            >
              <span className="absolute left-0 top-1/2 h-9 w-[6px] -translate-y-1/2 rounded-md bg-white"></span>
              <Dashboard className="mr-3" />
              Dashboard
            </Link>
            <Link
              href={"/"}
              className="relative flex flex-row px-4 py-3 transition duration-300 rounded-md hover:bg-primary"
            >
              <Driver className="mr-3" />
              Drivers
            </Link>
            <Link
              href={"/"}
              className="relative flex flex-row px-4 py-3 transition duration-300 rounded-md hover:bg-primary"
            >
              <Bookings className="mr-3" />
              Bookings
            </Link>
            <Link
              href={"/"}
              className="relative flex flex-row px-4 py-3 transition duration-300 rounded-md hover:bg-primary"
            >
              <Notifications className="mr-3" />
              Notifications
            </Link>
            <Link
              href={"/"}
              className="relative flex flex-row px-4 py-3 transition duration-300 rounded-md hover:bg-primary"
            >
              <Settings className="mr-3" />
              Settings
            </Link>
          </li>
        </ul>
        <hr className="my-2 ml-4" />
        <ul>
          <li>
            <Link
              href={"/"}
              className="relative flex flex-row px-4 py-3 transition duration-300 rounded-md hover:bg-primary"
            >
              Report
            </Link>
            <Link
              href={"/"}
              className="relative flex flex-row px-4 py-3 transition duration-300 rounded-md hover:bg-primary"
            >
              <PaymentDetails className="mr-3" />
              Payment Details
            </Link>
            <Link
              href={"/"}
              className="relative flex flex-row px-4 py-3 transition duration-300 rounded-md hover:bg-primary"
            >
              <Transactions className="mr-3" />
              Transactions
            </Link>
            <Link
              href={"/"}
              className="relative flex flex-row px-4 py-3 transition duration-300 rounded-md hover:bg-primary"
            >
              <CarReports className="mr-3" />
              Car Reports
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
