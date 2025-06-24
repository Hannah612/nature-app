import { SelectedPage, type ClassType } from "../../shared/types";
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Random text 1",
        image: image1,
    },
    {
        name: "Second Classes",
        image: image2,
    },
    {
        name: "Third Classes",
        description: "Random text 3",
        image: image3,
    },
    {
        name: "Fourth Classes",
        description: "Random text 4",
        image: image4,
    },
    {
        name: "Fifth Classes",
        description: "Random text 5",
        image: image5,
    },
    {
        name: "Sixth Classes",
        description: "Random text 6",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full py-20 bg-primary-100">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div 
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}} //amount = amount you need to see for animation to trigger 
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-50}, //initial state
                    visible: {opacity:1, x:0}, //while in view state
                }}
            >
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {/* list of items (pictures side scroll)*/}
                    {classes.map((item, index) => (
                        <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        ></Class>
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses;