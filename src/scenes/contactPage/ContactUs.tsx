import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import HText from "../../shared/HText";
import { useForm } from "react-hook-form";
import TreeUp from "../../assets/TreeUp.jpg"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}


const ContactUs = ({setSelectedPage}: Props) => {
   const inputStyles = `mb-1 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder:secondary-100`
    //provided by react form
    const {
      register, 
      trigger, //validate form if needed
      formState: { errors } //errors will be registered during form creation
    } = useForm();

    const onSubmit = async (e: any) => {
      const isValid = await trigger();
      if (!isValid) {
          e.preventDefault(); //default is refresh the page, but don't do that 
      }
    }

  return (
    <section
        id="contactus"
        className="gap-16 bg-dark-brown md:py-28 py-24 md:h-full md:pb-0" //md:h-full = media query only when it's above medium screen 
    >
      <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
            <motion.div 
                className="mx-auto bg-white bg-opacity-50 rounded-md w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}} //amount = amount you need to see for animation to trigger 
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-50}, //initial state
                    visible: {opacity:1, x:0}, //while in view state
                }}
            >
          </motion.div>
            <HText><span className="flex mx-auto w-5/6 text-gray-50">CONTACT US</span></HText>

            <div className="justify-between gap-8 flex-col md:flex"> 
                  <motion.div
                    className="basis-3/5 md:mt-0 w-5/6 mx-auto  md:flex"
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
                      action="http://formsubmit.co/hannahng500@gmail.com" //easy form w/o backend code (anon url email)
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
                          className="mt-2 rounded-lg bg-gray-50 px-20 py-3 transition duration-500 hover:text-white"
                      >
                          Submit
                      </button>
                  </form>  
                  <div className="my-3 md:!my-0">
                    <img 
                      className="rounded-md md:ml-5 md:mt-0"
                      src={TreeUp}
                      alt="treeup"
                    />
                  </div>
             </motion.div>


          </div>
      </motion.div>
    </section>
  )
}

export default ContactUs;