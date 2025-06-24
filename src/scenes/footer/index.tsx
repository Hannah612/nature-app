import Logo from "@/assets/Logo.png"

const Footer = () => {
  return <footer className="bg-primary-100 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0"> {/* flex basis is very useful, try to use it when possible */}
            <img alt='logo' src={Logo}/>
            <p className="my-5">
                Placeholder Text
            </p>
            <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Testing Footer Text 1</p>
            <p className="my-5">Testing Footer Text 2</p>
            <p>Testing Footer Text 3</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Testing Footer Text 4</p>
            <p>Testing Footer Text 5</p>
        <p>Testing Footer Text 3</p>
        </div>
    </div>
  </footer>
}

export default Footer