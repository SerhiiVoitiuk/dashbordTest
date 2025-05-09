import Navigation from "@/components/Navigation";
import ProfileHeader from "@/components/ProfileHeader";
import React, { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <ProfileHeader />
      <Navigation />
      <div className="w-full px-[60px]">{children}</div>
    </main>
  );
};

export default Layout;
