"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {/* Container */}
            <div>
                {/* text container */}
                <div>
                    {/* biography container */}
                    <div className="">

                    </div>
                    {/* skills container */}
                    <div className="">

                    </div>
                    {/* experience container */}
                    <div className="">

                    </div>
                </div>
                {/* svg container */}
                <div className="hidden">

                </div>
            </div>
        </motion.div>
    );
}

export default AboutPage;