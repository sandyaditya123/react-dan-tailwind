import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 14,
    },
  },
};

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.85, y: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

function AboutPage({
  onBack,
  memberName,
  memberDesc,
  memberImage,
  accentColor,
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="flex min-h-screen flex-col items-center justify-center bg-slate-100 px-4"
    >
      {/* 1. Foto Avatar */}
      <motion.img
        variants={avatarVariants}
        src={memberImage}
        alt={memberName}
        className="mb-4 h-36 w-36 rounded-full object-cover object-top transition-transform duration-300 hover:rotate-12"
      />

      {/* 2. Judul */}
      <motion.h1
        variants={itemVariants}
        className="text-3xl font-semibold text-slate-800"
      >
        About {memberName}
      </motion.h1>

      {/* 3. Deskripsi */}
      <motion.p
        variants={itemVariants}
        className="mt-2 max-w-lg text-center text-slate-600"
      >
        {memberDesc}
      </motion.p>

      {/* 4. Tombol Kembali */}
      <motion.button
        variants={itemVariants}
        onClick={onBack}
        className={`mt-4 mb-20 rounded-lg px-4 py-2 text-lg font-medium text-white transition-colors duration-300 hover:cursor-pointer ${accentColor}`}
      >
        Kembali
      </motion.button>
    </motion.div>
  );
}

export default AboutPage;
