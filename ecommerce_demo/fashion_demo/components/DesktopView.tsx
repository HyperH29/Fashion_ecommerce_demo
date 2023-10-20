import { motion } from "framer-motion";
// import ReactPlayer from "react-player";

const DesktopView = () => {
    return (
        <motion.div className='flex bg-gray-300 h-screen overflow-hidden'>
            <motion.div
                initial={{ width: "50%" }}
                animate={{ width: "50%" }} // Added this line
                whileHover={{ width: "100%", zIndex: 10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className='absolute top-0 left-0 h-screen flex-shrink-0 transition-z-index duration-500 bg-red-400'
            >
                {/* <ReactPlayer url="https://www.youtube.com/watch?v=yblJCIn_Mzc" width="100%" height="100%" className="h-screen" playing /> */}
                {/* Additional content for men's section */}
            </motion.div>

            <motion.div
                initial={{ width: "50%", left: "50%" }}
                animate={{ width: "50%", left: "50%" }} // Added this line
                whileHover={{ width: "100%", zIndex: 10, left: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className='absolute top-0 left-1/2 h-screen flex-shrink-0 transition-z-index duration-500'
            >
                {/* <ReactPlayer url="https://www.youtube.com/watch?v=yblJCIn_Mzc" width="100%" height="100%" className="h-screen" playing /> */}
                {/* Additional content for women's section */}
            </motion.div>
        </motion.div>
    );
};

export default DesktopView;
