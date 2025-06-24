import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
import { SelectedPage } from "../../shared/types"
import HomePageText  from '@/assets/HomePageText.png'
import HomePageGraphic  from '@/assets/HomePageGraphic.png'
import SponsorRedBull  from '@/assets/SponsorRedBull.png'
import SponsorForbes  from '@/assets/SponsorForbes.png'
import SponsorFortune  from '@/assets/SponsorFortune.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
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
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}} //amount = amount you need to see for animation to trigger 
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x:-50}, //initial state
                        visible: {opacity:1, x:0}, //while in view state
                    }}
                > {/* -mt is positioning the heading higher */}
                    <div className="relative">{/* always set relative on parent img and absolute on child, this is the main title */}
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">{/* pink bg text behind main titl, 2:05:38*/}
                            <img alt="home-page-text" src={HomePageText} />
                        </div>
                    </div>

                    <p className="mt-8 text-sm">
                        Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/ LOR-əm IP-səm) is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting.
                    </p>
                </motion.div>
                { /* Action buttons */}
                <motion.div 
                    className="mt-8 flex items-center gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}} //amount = amount you need to see for animation to trigger 
                    transition={{delay:0.2, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x:-50}, //initial state
                        visible: {opacity:1, x:0}, //while in view state
                    }}
                >
                        <ActionButton setSelectedPage={setSelectedPage}> Join Now </ActionButton>
                        <AnchorLink //link goes to somewhere on the same page 
                            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>

            {/* Image on the right */}
            <div className="basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img alt="home-pageGraphic" src={HomePageGraphic} />
            </div>
        </motion.div>

        { /* Show sponsors if in mobile mode */ }
        {isAboveMediumScreens && (
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        <img alt="redbull-sponsor" src={SponsorRedBull} />
                        <img alt="forbes-sponsor" src={SponsorForbes} />
                        <img alt="fortune-sponsor" src={SponsorFortune} />
                    </div>
                </div>
            </div>
        ) }

    </section>
}

export default Home