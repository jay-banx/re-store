import React, { useContext } from "react";
import BookstoreServiceContext from "../BookstoreServiceContext";

const withBookstoreService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    const bookstoreService = useContext(BookstoreServiceContext);
    const bookstoreProps = mapMethodsToProps(bookstoreService);
    return <Wrapped {...props} {...bookstoreProps} />;
  };
};

export default withBookstoreService;
