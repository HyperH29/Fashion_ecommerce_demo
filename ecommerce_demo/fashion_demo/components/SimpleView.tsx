import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const SimpleView = () => {
    const controlsLeft = useAnimation();
    const controlsRight = useAnimation();
    const controlListLeft = useAnimation();
    const controlListRight = useAnimation();
    const [hovered, setHovered] = useState('');

    return (
        <motion.div className='flex bg-gray-300 h-screen overflow-hidden'>
            {/* Left div content */}
            <motion.div
                onHoverStart={() => {
                    controlsLeft.start({ opacity: 1 });
                    controlsRight.start({ opacity: 0 });
                    controlListLeft.start({ opacity: 1 })
                    controlListRight.start({ opacity: 0 })
                    setHovered('left');
                }}
                onHoverEnd={() => {
                    controlsLeft.start({ opacity: 1 });
                    controlsRight.start({ opacity: 1 });
                    controlListLeft.start({ opacity: 0 })
                    controlListRight.start({ opacity: 0 })

                    setHovered('');
                }}
                initial={{ flex: 1 }}
                whileHover={{ flex: 2.5, zIndex: 10 }} // Adjusted the flex value here
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className='flex-initial min-w-1/20 transition-all duration-500 h-screen relative bg-red-500 overflow-hidden'
            >
                <Image
                    src="/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.jpg"
                    alt="Image from Unsplash"
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <motion.div
                    animate={controlsLeft}
                    initial={{ opacity: 1 }}
                    className="absolute top-0 left-0 w-full p-4 bg-opacity-80 bg-black text-white z-10 flex"
                >
                    <span className="text-4xl mr-4">Women</span>
                    <motion.ul className="flex justify-center space-x-6" initial={{ opacity: 0 }} animate={controlListLeft}>
                        <li className="py-1 px-2 hover:bg-white hover:text-black"><Link href="#" className="hover:underline ">Shirts</Link></li>
                        <li className="py-1 px-2 hover:bg-white hover:text-black"><Link href="#" className="hover:underline">Pants</Link></li>
                        <li className="py-1 px-2 hover:bg-white hover:text-black"><Link href="#" className="hover:underline">Jackets</Link></li>
                        <li className="py-1 px-2 hover:bg-white hover:text-black"><Link href="#" className="hover:underline">Shoes</Link></li>
                        <li className="py-1 px-2 hover:bg-white hover:text-black"><Link href="#" className="hover:underline">Accessories</Link></li>
                    </motion.ul>
                </motion.div>
            </motion.div>

            {/* Right div content */}
            <motion.div
                onHoverStart={() => {
                    controlsRight.start({ opacity: 1 });
                    controlsLeft.start({ opacity: 0 });
                    controlListLeft.start({ opacity: 0 })
                    controlListRight.start({ opacity: 1 })
                    setHovered('right');
                }}
                onHoverEnd={() => {
                    controlsRight.start({ opacity: 1 });
                    controlsLeft.start({ opacity: 1 });
                    controlListLeft.start({ opacity: 0 })
                    controlListRight.start({ opacity: 0 })
                    setHovered('');
                }}
                initial={{ flex: 1 }}
                whileHover={{ flex: 2.5, zIndex: 9 }} // Adjusted the flex value here
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className='flex-initial min-w-1/20 transition-all duration-500 h-screen relative bg-blue-500 overflow-hidden'
            >
                <Image
                    src="/drake-s-takes-vKnRYW-mtek-unsplash.jpg"
                    alt="Image from Unsplash"
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <motion.div
                    animate={controlsRight}
                    initial={{ opacity: 0 }}
                    className="absolute top-0 left-0 w-full p-4 bg-opacity-80 bg-black text-white z-10 flex"
                >
                    <span className="text-4xl mr-4">Men</span>
                    <motion.ul className="flex justify-center  space-x-6" initial={{ opacity: 0 }} animate={controlListRight}>
                        <li className="py-1 px-2 hover:bg-white hover:text-black"><Link href="#" className="hover:underline ">Shirts</Link></li>
                        <li className="py-1 px-2 hover:bg-white hover:text-black"><Link href="#" className="hover:underline">Pants</Link></li>
                        <li className="py-1 px-2 hover:bg-white hover:text-black"><Link href="#" className="hover:underline">Jackets</Link></li>
                        <li className="py-1 px-2 hover:bg-white hover:text-black"><Link href="#" className="hover:underline">Shoes</Link></li>
                        <li className="py-1 px-2 hover:bg-white hover:text-black"><Link href="#" className="hover:underline">Accessories</Link></li>
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default SimpleView;
