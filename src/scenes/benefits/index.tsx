import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { SelectedPage, type BenefitType } from "../../shared/types"
import {motion} from "framer-motion";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Testing Facilities box",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Testing Diverse Classes",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Training",
        description: "Testing Expert and Pro Training",
    },
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2} //stagger everything below this container 
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void; //set of a useState is usually void 
}

const Benefits = ({setSelectedPage}: Props) => {
  return <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20"
  >
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)} //trigger func when viewport is entered
    >
        <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}} //amount = amount you need to see for animation to trigger 
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50}, //initial state
                visible: {opacity:1, x:0}, //while in view state
            }}
        >
            <HText>MORE THAN JUST A GYM.</HText>
            <p className="my-5 text-sm">
                The discovery of the text's origin is attributed to Richard McClintock, a Latin scholar at Hampden–Sydney College. McClintock connected Lorem ipsum to Cicero's writing sometime before 1982 while searching for instances of the Latin word consectetur, which was rarely used in classical literature.[2] McClintock first published his discovery in a 1994 letter to a Before & After magazine editor,[8] contesting the editor's earlier claim that Lorem ipsum had no meaning.[2]
            </p>
        </motion.div>

        {/* Benefits */}
        <motion.div 
            className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}
        >
            {benefits.map((benefit: BenefitType) => ( //array of objects containing facilies, diverse classes, etc. modal on benefits page
                <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage} //Learn More button
                />
            ))}
        </motion.div>
        {/* Graphics and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* Graphic Image */}
            <img 
                className="mx-auto"
                alt="benefits-page-graphic"
                src={BenefitsPageGraphic}
            />
            {/* Description */}
            <div>
                {/* Title and little background images*/}
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once:true, amount:0.5}} //amount = amount you need to see for animation to trigger 
                            transition={{duration:0.5}}
                            variants={{
                                hidden:{opacity:0, x:50}, //initial state, from right 
                                visible: {opacity:1, x:0}, //while in view state
                            }}
                        >
                            <HText>
                                MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                <span className="text-primary-500">FIT</span>
                            </HText>
                        </motion.div> 
                    </div>
                </div>
                {/* Description */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}} //amount = amount you need to see for animation to trigger 
                    transition={{delay: 0.2, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x:50}, //initial state, from right 
                        visible: {opacity:1, x:0}, //while in view state
                    }}
                >
                    <p className="my-5">
                        [32] But I must explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. To do so, I will give you a complete account of the system and expound the teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter extremely painful consequences. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasional
                    </p>
                    <p className="mb-5">
                        [33] On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammeled and nothing prevents 
                    </p>
                </motion.div>
                {/* Button and sparkle image behind button */}
                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  </section>
}
export default Benefits;