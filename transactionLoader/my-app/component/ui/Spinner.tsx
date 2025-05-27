import { motion } from 'framer-motion'

function Spinner() {
    return (
        <motion.div
            style={{
                width: '25px',
                height: '25px',
                borderRadius: '50%',
                border: '5px solid #f3f3f3',
                borderTop: '5px solid #3498db',
                animation: 'spin 2s linear infinite'
            }}
            animate={{
                rotate: [0, 360]
            }}
            transition={{
                duration: 1,
                ease: 'linear',
                repeat: Infinity
            }}
        />
    );
}


export default Spinner;