import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void; //set of a useState is usually void 
}


const ContactPage = ({setSelectedPage} : Props) => {
 const inputStyles = `mb-1 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder:white`

  const {
    register, 
    trigger, //validate form if needed
    formState: { errors }
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
        e.preventDefault(); //default is refresh the page, but don't do that 
    }
  }


  return <section
    id="contactpage"
    className="mx-auto w-5/6 py-24 pb-32" //min-h-full takes the whole page 
  >
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)} //trigger func when viewport is entered
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
            <HText>
                <span className=" text-primary-500 my-5 ">
                    JOIN NOW 
                </span> 
                 TO GET IN SHAPE!
            </HText>
            <p className="my-5">
                Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/ LOR-əm IP-səm) is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting.
            </p>
        </motion.div>
        {/* FORM */}
        <div className="justify-between gap-8 md:flex"> 
             <motion.div
                className="basis-3/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}} //amount = amount you need to see for animation to trigger 
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0, y:50}, //animates upwards
                    visible: {opacity:1, y:0},  
                }}
             >
                <form
                    target="_blank" //go to another page on submit
                    onSubmit={onSubmit}
                    action="http://formsubmit.co/c035dc37199458082aa786e746b5a26b" //easy form w/o backend code (anon url email)
                    method="POST"
                >
                    <input
                        className={inputStyles}
                        type="text"
                        placeholder="NAME"
                        {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}
                    />
                    {errors.name && (
                        <p className="text-primary-500">
                            {errors.name.type === "required" && "This field is required."}
                            {errors.name.type === "maxLength" && "Max length is 100 char."}
                        </p>
                    )}
                    <input
                        className={inputStyles}
                        type="text"
                        placeholder="EMAIL"
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                    />
                    {errors.email && (
                        <p className="text-primary-500">
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "pattern" && "Invalid email address."}
                        </p>
                    )}
                    <textarea
                        className={inputStyles}
                        rows={4}
                        cols={50}
                        placeholder="MESSAGE"
                        {...register("message", {
                            required: true,
                            maxLength: 2000,
                        })}
                    />
                    {errors.message && (
                        <p className="text-primary-500">
                            {errors.message.type === "required" && "This field is required."}
                            {errors.message.type === "maxLength" && "Max length is 2000 char."}
                        </p>
                    )}
                    <button
                        type="submit"
                        className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                    >
                        Submit
                    </button>
                </form>
             </motion.div>
            <motion.div
                className="relative mt-16 basis-2/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}} //amount = amount you need to see for animation to trigger 
                transition={{ delay:0.2, duration:0.5}}
                variants={{
                    hidden:{opacity:0, y:50}, //animates downwards
                    visible: {opacity:1, y:0},  
                }}
            >
                <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                    <img 
                        className="w-full"
                        alt="contact-us-page-graphic"
                        src={ContactUsPageGraphic}
                    />

                </div>
            </motion.div>

        </div>
    </motion.div>

  </section>
}

export default ContactPage