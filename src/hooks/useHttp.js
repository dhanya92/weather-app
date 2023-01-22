import axios from "axios";
import { useState, useCallback } from "react";
import { useErrorHandler } from "react-error-boundary";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleError = useErrorHandler();
  const sendReq = useCallback(
    async (requestConfig, applyData) => {
      setIsLoading(true);
      try {
        const res = await axios({
          method: requestConfig.method ? requestConfig.method : "GET",
          url: requestConfig.url,
        });
        applyData(res.data);
      } catch (error) {
        handleError(error);
      }
      setIsLoading(false);
    },
    [handleError]
  );

  return {
    isLoading,
    sendReq,
  };
};

export default useHttp;
