import useMediaQuery from "../../hooks/useMediaQuery";
import { motionProps, SelectedPage } from "../../shared/types"
import TreeStanding  from '@/assets/TreeStanding.jpg'
import { motion } from "framer-motion"; //animation to move text from left to right on load

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)"); //bool to see is it mobile or web

    return <section
        id="home"
        className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0" //md:h-full = media query only when it's above medium screen 
    >
        {/* Image and main header */}
        <motion.div 
            className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)} //trigger func (go to homepage) when viewport is entered
        > {/* md = only if in web/bigger screens*/}
            {/* Main header */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* Headings */}
                <motion.div
                    className="md:-mt-20"
                    {...motionProps}
                > {/* -mt is positioning the heading higher */}
                    <div className="relative">{/* always set relative on parent img and absolute on child, this is the main title */}
                        <div className="before:absolute before:-top-20 before:z-[-1] md:before:content-leaves">
                            {/* <img alt="home-page-text" src={HomePageText} /> */}
                            <h4 className="flex font-bold font-montserrat text-[4vw]">ECOSOLUTIONS</h4> {/*text always 5% of vw */}
                        </div>
                    </div>

                    <p className="mt-8 text-sm">
                        Lorem ipsum (/ˌl.rəm p.səm/ LOR-əm IP-səm) is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting.
                    </p>
                </motion.div>
                </div>

            {/* Image on the right */}
            <motion.div 
                className="flex justify-center z-10 md:ml-40 md:mt-16 md:justify-items-end"
                {...motionProps}
            >
                <img 
                    className="justify-center rounded-full mt-10 w-2/5 md:basis-[300px] md:mt-0"
                    alt="tree-standing" 
                    src={TreeStanding} 
                />
            </motion.div>
        </motion.div>

        { /* mobile mode */ }
        {isAboveMediumScreens && (
            <div className="h-[150px] w-full bg-dark-brown py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between gap-8">

                    </div>
                </div>
            </div>
        ) }

    </section>
}

export default Home