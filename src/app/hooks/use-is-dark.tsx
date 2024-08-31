import { useTheme } from "next-themes";

export const useIsDark = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark'

  if (isDark){
    return true
  } else {
    return false
  }
};