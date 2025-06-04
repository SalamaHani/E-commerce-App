import React from "react";

function SectionAbout() {
  return (
    <>
      <div className="container  mt-10 dark:bg-gray-900">
        <div className="lg:flex gap-8 mt-14 lg:mt-28 dark:bg-gray-900">
          <img
            src="/public/images/aboutUs.png"
            alt="Our Company"
            loading="lazy"
            decoding="async"
            width="536"
            height="449"
            className="rounded-md mx-auto"
          />
          <div className="mt-10 lg:mt-0 dark:text-white">
            <h2 className="text-3xl font-bold">Our Company</h2>
            <p className="mt-4 text-text-light dark:text-darkmode-text-light leading-7">
              Welcome to <strong>Astrofront</strong> where brilliance meets
              innovation. We take pride in being your ultimate destination for
              exquisite lighting solutions that illuminate spaces and lives
              alike. With a passion for creating luminous experiences, we curate
              a diverse range of cutting-edge light fixtures designed to elevate
              any environment. Our commitment to quality craftsmanship and a
              keen eye for aesthetic appeal ensures that each product we offer
              is not just a source of light, but a work of art in its own right.
              Whether you're seeking ambient elegance for your home or
              functional brilliance for a commercial space, Your Company Name is
              dedicated to bringing your vision to light. Explore our collection
              and let your surroundings shine with a touch of our radiant
              expertise. Elevate your space, embrace the light, only with{" "}
              <strong>Astrofront</strong>
            </p>
          </div>
        </div>
        <div className="lg:flex gap-8 mt-14 lg:mt-28">
          <div className="mt-10 lg:mt-0  dark:text-white">
            <h2 className="text-3xl font-bold">Who We Are ?</h2>
            <p className="mt-4 text-text-light dark:text-darkmode-text-light leading-7">
              At <strong>Astrofront</strong> we illuminate your world with a
              curated collection of exceptional lighting solutions. Established
              with a passion for transforming spaces and creating ambiance, we
              stand as a beacon of quality and style in the realm of lighting.
              With a keen eye for design and a commitment to sourcing the finest
              materials, we pride ourselves on offering a diverse range of work
              that not only brighten spaces but also elevate aesthetics.\
              Committed to delivering excellence, we prioritize customer
              satisfaction and provide expert guidance to help you find the
              perfect lighting solution for any setting. Welcome to{" "}
              <strong>Astrofront</strong> where light meets inspiration.
              Illuminate your world today!
            </p>
          </div>
          <img
            src="/public/images/aboutUs.png"
            alt="Who We Are ?"
            loading="lazy"
            decoding="async"
            width="536"
            height="449"
            className="rounded-md mx-auto mt-10 lg:mt-0"
          />
        </div>
      </div>
    </>
  );
}

export default SectionAbout;
