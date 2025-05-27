import { motion } from "framer-motion";

const TransactionCompleted = () => {
  return (
    <motion.div
      className="flex justify-center items-center rounded-full bg-green-600 h-20 w-20"
    >
      <div className="flex justify-center items-center text-white text-5xl">
        ✔
      </div>
    </motion.div>
  );
};

export default TransactionCompleted;
