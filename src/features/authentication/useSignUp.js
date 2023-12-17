import { useMutation } from "@tanstack/react-query";
import { SignUp as SignUpApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
export function useSignUp() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: SignUpApi,
    onSuccess: (user) => {
      toast.success("sign up user is success");
    },
    onError: (err) => {
      toast.error("Provided signUp is error");
    },
  });
  return { signUp, isLoading };
}
