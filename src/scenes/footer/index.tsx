import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="a-logo" />
          <p className="my-5">Lorem ipsum...</p>
          <p>Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us here</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">(333) 425-68686868</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
