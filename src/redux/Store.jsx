import { configureStore } from "@reduxjs/toolkit";
import usereducer from "./Studentslice"

const Store=configureStore({
    reducer:({
        user:usereducer
    })
})

export default Store