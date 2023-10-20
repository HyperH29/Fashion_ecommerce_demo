import { motion, useAnimation } from "framer-motion";
import ReactPlayer from "react-player";




const MobileView: React.FC = () => {
    const controls = useAnimation();

    const handleDragEnd = (e: MouseEvent, info: PanInfo) => {
        // Logic to determine if the user swiped enough to change the section
        if (info.offset.x < -100) { // adjust this threshold as needed
            controls.start({ x: "-100%" }); // move to women's section
        } else if (info.offset.x > 100) {
            controls.start({ x: "0%" }); // move back to men's section
        }
    };

    return (
        <motion.div
            className="flex"
            drag="x"
            animate={controls}
            onDragEnd={handleDragEnd}
            initial={{ x: 0 }}
        >
            <div>
                <ReactPlayer url="https://www.youtube.com/watch?v=yblJCIn_Mzc" />
                {/* Additional content for men's section */}
            </div>

            <div>
                <ReactPlayer url="https://www.youtube.com/watch?v=yblJCIn_Mzc" />
                {/* Additional content for women's section */}
            </div>
        </motion.div>
    );
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
};

export default MobileView;