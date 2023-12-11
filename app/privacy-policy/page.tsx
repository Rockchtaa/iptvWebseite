import React from "react";

function page() {
  return (
    <div className="flex flex-col mt-32 mb-10 justify-center items-center px-4 sm:px-0">
      <section className="max-w-4xl flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl 2xl:text-6xl text-white">
          Privacy and Refund Policy
        </h1>
        <div className="flex flex-col gap-8 w-full  box-border ">
          <p className="text-gray-300">
            Thank you for choosing our IPTV service. We strive to
            provide you with a reliable and uninterrupted viewing
            experience. However, there are certain circumstances
            beyond our control that may affect the availability of our
            service. Therefore, we would like to outline our <span className="font-semibold">No
            Refund Policy</span> to ensure transparency and clarity
            regarding our responsibilities and limitations.
          </p>

          <ol className="sm:ml-12 w-full max-w-3xl">
            <li className="flex flex-col box-border">
              <span className="text-xl text-primary-600 font-semibold">
                1.Service Interruptions
              </span>
              <span className="ml-4 text-md font-normal text-gray-300 flex flex-col gap-3 py-3">
                <p>
                  <span className="font-semibold text-primary-700">
                    a.
                  </span>{" "}
                  We are not responsible for any interruptions or
                  downtime caused by factors beyond our control,
                  including but not limited to government actions or
                  regulations, network outages, natural disasters,
                  technical failures, or cyber attacks.
                </p>
                <p>
                  <span className="font-semibold text-primary-700">
                    b.
                  </span>{" "}
                  In the event of such interruptions, we will make
                  every effort to restore the service as quickly as
                  possible but cannot guarantee a specific timeframe.
                </p>
              </span>
            </li>
            <li>
              <span className="text-xl text-primary-600 font-semibold">
                2.Replacement Subscriptions
              </span>
              <span className="ml-4 text-md font-normal text-gray-300 flex flex-col gap-3 py-3">
                <p>
                  <span className="font-semibold text-primary-700">
                    a.
                  </span>
                  If you have been a customer for less than 6 months
                  and experience a service interruption due to reasons
                  stated in point 1, we will provide you with a
                  replacement subscription for the remaining duration
                  of your initial subscription term.
                </p>
                <p>
                  <span className="font-semibold text-primary-700">
                    b.
                  </span>
                  To qualify for a replacement subscription, you must
                  notify us of the interruption within a reasonable
                  timeframe and provide any necessary information to
                  assist us in verifying the validity of the
                  interruption claim.
                </p>
              </span>
            </li>
            <li>
              <span className="text-xl text-primary-600 font-semibold">
                3.Customers with Over 6 Months
              </span>
              <span className="ml-4 text-md font-normal text-gray-300 flex flex-col gap-3 py-3">
                <p>
                  <span className="font-semibold text-primary-700">
                    a.
                  </span>
                  Customers who have been subscribed for more than 6
                  months are not eligible for replacement
                  subscriptions in the event of service interruptions
                  caused by factors stated in point 1.
                </p>
                <p>
                  <span className="font-semibold text-primary-700">
                    b.
                  </span>
                  This policy is in place because, after 6 months of
                  uninterrupted service, it is reasonable to expect
                  that you have experienced the reliability and
                  quality of our service.
                </p>
              </span>
            </li>
            <li>
              <span className="text-xl text-primary-600 font-semibold">
                4.Limited Liability
              </span>
              <span className="ml-4 text-md font-normal text-gray-300 flex flex-col gap-3 py-3">
                <p>
                  We shall not be held liable for any loss or damages
                  arising from service interruptions, including but
                  not limited to financial losses, loss of data, or
                  inconvenience caused by the unavailability of our
                  IPTV service.
                </p>
              </span>
            </li>
          </ol>
          <p className="text-gray-300">
            By using our service, you agree to comply with this <span className="font-semibold">No
            Refund Policy</span> and acknowledge that you have read and
            understood its contents. We reserve the right to modify or
            update this policy at any time without prior notice. It is
            your responsibility to review this policy periodically to
            stay informed about any changes.
          </p>
        </div>
      </section>
    </div>
  );
}

export default page;
