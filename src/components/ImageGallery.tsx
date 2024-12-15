import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/nature.jpg",
  "/urban.jpg",
  "/street.jpg",
  // Add more image paths as needed
];

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <motion.div
            key={src}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={300}
              height={300}
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <motion.img
              src={selectedImage}
              alt="Selected image"
              className="max-w-full max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
