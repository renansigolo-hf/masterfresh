// import Navbar from "./navbar";
// import Footer from "./footer";
import { Container } from "@hellofresh/scm-design-system";
import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />

      <Container maxWidth="lg" style={{ minHeight: "calc(100vh - 56px)" }}>
        <main>{children}</main>
      </Container>

      <Footer />
    </>
  );
}
