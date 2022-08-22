import React, { memo } from 'react'
import { ThemeProvider, useTheme } from "next-themes";
import { MaterialSymbolsBedtimeOutlineRounded } from './MaterialSymbolsBedtimeOutlineRounded'
import { MaterialSymbolsWbSunnyOutlineRounded } from './MaterialSymbolsWbSunnyOutlineRounded'

const ToggleDarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
    className="fixed z-50 w-10 h-10 bottom-10 right-10 bg-white dark:bg-gray-800 rounded-full shadow-lg"
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  >
    <div className="flex justify-center transition duration-300">
      {theme == "dark" ? (
        <MaterialSymbolsWbSunnyOutlineRounded size="18" />
      ) : (
        <MaterialSymbolsBedtimeOutlineRounded size="18" />
      )}
    </div>
  </button>
  )
}

export default memo(ToggleDarkModeButton)
