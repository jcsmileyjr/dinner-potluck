import './createPage.css';
import React, { useState } from "react";
import Header from "../../components/Header/header";

const CreatePage = ({goto}) => {
    return(
        <div>
            <main className='createPage--container'>
                <Header event={goto} headerButtonTitle="Home" />
                <h1 className="createPage__pageTitle--style">Create an Event</h1>
                <div className='createPage__main--container'>

                </div>
            </main>
        </div>
    );
}

export default CreatePage;