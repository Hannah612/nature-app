import { motion } from "framer-motion";
import { motionProps, SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import CarouselFade from "../../shared/CarouselFade";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const TreeImagesPage = ({setSelectedPage}: Props) => {
  return (
    <section id="friendlytrees" className="w-full py-20 bg-primary-100">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Trees)}
        >
            <motion.div 
                className="mx-auto bg-white bg-opacity-50 rounded-md w-5/6"
                {...motionProps}
            >
                <div className="md:w-3/5 px-2 pt-2">
                    <HText>FRIENDLY TREES</HText>
                    <p className="py-2 z-30">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </motion.div>

            <CarouselFade/>

        </motion.div>
    </section>
  )
}

export default TreeImagesPage;