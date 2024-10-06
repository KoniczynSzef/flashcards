import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = object & {
    containerClassName?: string;
    dotClassName?: string;
};

export default function RotatingLoader(props: Props) {
    const rotateVariants = {
        rotate: {
            rotate: 360,
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
            },
        },
    };

    return (
        <div
            className="flex items-center justify-center"
            role="presentation"
            aria-label="Dotted loading state indicator"
        >
            <motion.div
                className={cn("relative h-12 w-12", props.containerClassName)}
                variants={rotateVariants}
                animate="rotate"
            >
                <motion.div
                    className={cn(
                        "absolute left-0 top-0 h-4 w-4 rounded-full bg-red-500",
                        props.dotClassName,
                    )}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0 }}
                ></motion.div>
                <motion.div
                    className={cn(
                        "absolute right-0 top-0 h-4 w-4 rounded-full bg-red-500",
                        props.dotClassName,
                    )}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.2 }}
                ></motion.div>
                <motion.div
                    className={cn(
                        "absolute bottom-0 left-0 h-4 w-4 rounded-full bg-red-500",
                        props.dotClassName,
                    )}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.4 }}
                ></motion.div>
                <motion.div
                    className={cn(
                        "absolute bottom-0 right-0 h-4 w-4 rounded-full bg-red-500",
                        props.dotClassName,
                    )}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.6 }}
                ></motion.div>
            </motion.div>
        </div>
    );
}
