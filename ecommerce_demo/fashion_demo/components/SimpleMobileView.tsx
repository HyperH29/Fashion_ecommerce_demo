import { motion, useAnimation } from "framer-motion";
type PanInfo = {
    point: {
        x: number;
        y: number;
    };
    offset: {
        x: number;
        y: number;
    };
    velocity: {
        x: number;
        y: number;
    };

}
const SimpleView = () => {
    const leftControls = useAnimation();
    const rightControls = useAnimation();

    const handleDragEndLeft = (e: MouseEvent, info: PanInfo) => {
        if (info.offset.x > 150) { // dragged to the right
            leftControls.start({ flex: 19 });
            rightControls.start({ flex: 1 });
        } else {
            resetDivs();
        }
    };

    const handleDragEndRight = (e: MouseEvent, info: PanInfo) => {
        if (info.offset.x < -150) { // dragged to the left
            rightControls.start({ flex: 19 });
            leftControls.start({ flex: 1 });
        } else {
            resetDivs();
        }
    };

    const resetDivs = () => {
        leftControls.start({ flex: 1 });
        rightControls.start({ flex: 1 });
    };

    return (
        <motion.div className='flex bg-gray-300 h-screen overflow-hidden'>

            <motion.div
                initial={{ flex: 1 }}
                animate={leftControls}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEndLeft}
                whileHover={{ flex: 19, zIndex: 10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className='flex-initial min-w-1/20 transition-all duration-500 h-screen bg-red-500'
            >
                {/* Left div content */}
                Left
            </motion.div>

            <motion.div
                initial={{ flex: 1 }}
                animate={rightControls}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEndRight}
                whileHover={{ flex: 19, zIndex: 9 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className='flex-initial min-w-1/20 transition-all duration-500 h-screen bg-blue-500'
            >
                {/* Right div content */}
                Right
            </motion.div>

        </motion.div>
    );
};

export default SimpleView;
