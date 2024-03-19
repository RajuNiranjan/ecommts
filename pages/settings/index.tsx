import dynamic from "next/dynamic";
import React, { useState } from "react";

const SettingsPage = dynamic(
  () => import("@/components/settings/settings_page"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full">
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
          </div>
        </div>
      </div>
    ),
  }
);

const Settings = () => {
  return <SettingsPage />;
};

export default Settings;
