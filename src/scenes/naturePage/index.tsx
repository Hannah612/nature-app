import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const NatureSupporters = ({setSelectedPage}: Props) => {
  return <section
        id="naturalsupporters"
        className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0" //md:h-full = media query only when it's above medium screen 
    >
        <motion.div 
            className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.NaturePage)} 
        >
            
        </motion.div>
  </section>
}

export default NatureSupporters