import { useState } from "react";
import Spinner from "./ui/Spinner";
import TransactionCompleted from "./ui/TransactionCompleted";
import { motion, useAnimate } from "framer-motion";

const TransactionLoader = ({ amount }: { amount: string }) => {
  const [payButton, setPayButton] = useState<boolean>(false);
  const [transCompleted, setTransCompleted] = useState<boolean>(false);
  const [scope, animate] = useAnimate();
  const sumbitHandler = async () => {
    setPayButton(!payButton);
    await new Promise((resolve) => {
      setTimeout(async () => {
        await animate(scope.current, {scaleX: 0, duration: 1});
        setTransCompleted(true);
        resolve(null);
      }, 3000);
    });
  };
  return (
    <div className="flex justify-center items-center h-screen bg-black/80 text-white">
      {!transCompleted ? (
        <motion.button
          ref={scope}
          onClick={sumbitHandler}
          className="flex justify-center items-center space-x-2 font-bold text-xl bg-gradient-to-r from-violet-500 to-blue-500 w-52 h-20 rounded-md"
          whileHover={{
            scale:1.1
          }}
          whileTap={{scale: 1}}
        >
          <motion.div className = 'flex space-x-2'>
            {payButton && <Spinner />}
            <div>Pay now ({amount})</div>
          </motion.div>
        </motion.button>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
          }}
        >
          <TransactionCompleted />
        </motion.div>
      )}
    </div>
  );
};

export default TransactionLoader;
