import { useQuery } from "@tanstack/react-query";
import { getSetting } from "../../services/apiSetting";

export function useSetting() {
  const {
    isLoading,
    error,
    data: settingData,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSetting,
  });
  return { isLoading, error, settingData };
}
