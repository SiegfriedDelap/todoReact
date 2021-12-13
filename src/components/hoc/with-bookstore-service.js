import React from "react";
import { BookStoreServiceConsumer } from "../bookstore-service-context";

//ХОК это функция которая возвращает функцию которая принимает компонет
//который будет обернут
//получает контекст

const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return ( <Wrapped {...props} bookstoreService={bookstoreService} />)
                    }
                }
            </BookStoreServiceConsumer>
        );
    }
}

export default withBookstoreService;