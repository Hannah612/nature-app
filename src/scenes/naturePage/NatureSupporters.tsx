import { motion } from "framer-motion";
import { motionProps, SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import VerticalTree from "../../assets/VerticalTree.jpg";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const NatureSupporters = ({setSelectedPage}: Props) => {
  const tab = `inline-block ml-10`;
  return <section
        id="naturalsupporters"
        className="gap-16 bg-gray-100 md:py-28 py-24 md:h-full md:pb-0" //md:h-full = media query only when it's above medium screen 
    >

        <motion.div 
            className=" md:flex w-5/6 md:h-5/6 mx-auto gap-5"
            onViewportEnter={() => setSelectedPage(SelectedPage.NaturePage)} 
        >
            <div>
            <HText>CHANGE YOUR LIFESTYLE</HText>
            <motion.div 
                className=" bg-white bg-opacity-50 md:w-100 md:h-50 rounded-md  md:mr-5 h-30  overflow-auto"
                {...motionProps}
            >
                <div className="px-2 pt-2 max-h-96"> {/* max-h has predefined values in typescipt, must use those*/}
                    <p>
                        <span className={tab}></span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        <span className={tab}></span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                    <p>
                        <span className={tab}></span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </div>
            </motion.div>
            </div>
            <img className="mx-auto w-50 rounded-full mt-4 md:m-70" alt="VerticalTree" src={VerticalTree}/>
        </motion.div>
  </section>
}

export default NatureSupporters;