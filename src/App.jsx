import React, { useEffect, useState } from "react";
import "./assets/scss/App.scss";
import { Navbar, Hero, Who, Services, Reviews, Contact } from "./components";
import { AppContext } from "./contexts/AppContext";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            document.querySelector("body").style.overflowY = "hidden";
            document.querySelector("body").style.height = "100vh";
            document.querySelector("body").style.height = "100dvh";
        } else {
            document.body.style.overflowY = "";
            document.body.style.height = "";
        }
        return () => {
            document.body.style.overflowY = "";
            document.body.style.height = "";
        };
    }, [isOpen]);
    return (
        <AppContext.Provider value={{ isOpen, setIsOpen }}>
            <Navbar />
            <Hero />
            <Who />
            <Services />
            <Reviews />
            <Contact />
        </AppContext.Provider>
    );
};

export default App;
