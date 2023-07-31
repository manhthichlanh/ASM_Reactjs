import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function ToastMessage(message) {
  const options = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };
  return {
    success() {
      toast.success(message, options);
    },
    warn() {
      toast.warning(message, options);
    },
    nomal() {
      toast(message, options);
    },
    error() {
      toast.error(message, options);
    },
    info() {
      toast.info(message, options);
    },
  };
}
