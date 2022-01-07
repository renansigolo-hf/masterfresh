// import Navbar from "./navbar";
// import Footer from "./footer";
import { AppBar, AppFooter } from "@hellofresh/scm-design-system";
import React from "react";

// const { Ingredients, DeliveryTruckMoving } = icons;

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* <Navbar /> */}
      <AppBar
        // ref={null}
        location={{
          country: "au",
          dc: "",
          dcs: [],
          parsedDcs: () => {
            return [];
          },
          parsedCountries: () => {
            return [{ value: "au", label: "Australia" }];
          },
        }}
        onChangeLocation={function noRefCheck() {
          console.log("onChangeLocation");
        }}
        onMenuClick={function noRefCheck() {
          console.log("onMenuClick");
        }}
      />

      <main>{children}</main>

      <div style={{ position: "fixed", bottom: 0, width: "100vw" }}>
        <AppFooter version="0.0.1" menuItems={[]} />
      </div>
    </>
  );
}
