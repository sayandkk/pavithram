import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader = ({ isLoading }: PreloaderProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Logo animation */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="flex flex-col items-center"
          >
            <img 
              src="/logo.png" 
              alt="Pavithram Loading" 
              className="w-24 h-24 object-contain drop-shadow-2xl mb-6" 
            />
            {/* Elegant loading bar */}
            <div className="w-48 h-1 bg-accent/20 rounded-full overflow-hidden relative">
                <motion.div 
                    className="absolute top-0 bottom-0 left-0 bg-accent rounded-full"
                    initial={{ width: "0%", x: "0%" }}
                    animate={{ width: ["0%", "100%", "0%"], x: ["0%", "0%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
