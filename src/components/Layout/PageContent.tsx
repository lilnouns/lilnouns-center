import React from "react";
import {useRouter} from "next/router";
import Divider from "../Divider";
import Footer from "../Footer";

const PageContent = ({ children }) => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <div className="xs:px-8 xs:py-6 md:px-4 lg:px-0 sm:py-12 sm:max-w-3xl m-auto bg-grey-lightest">
      {children}

      {asPath !== "/" && (
        <>
          <Divider />

          <Footer />
        </>
      )}
    </div>
  );
};

export default PageContent;
