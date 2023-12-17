import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSetting";
import toast from "react-hot-toast";

export function useUpdatingSetting() {
  const queryClient = useQueryClient();
  const { isLoading: isSetting, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
      toast.success("edit setting is Success");
    },
    onError: (err) => toast.error(err.message),
  });
  return { isSetting, updateSetting };
}

export default useUpdatingSetting;
