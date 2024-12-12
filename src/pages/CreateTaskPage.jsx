import React from "react";
import Container from "../components/container/MainContainerComponent.jsx";
import CreateTaskSteps from "../components/steps/CreateTaskSteps.jsx";

const CreateTaskPage = () => {
    return (
        <Container>
            <CreateTaskSteps/>
        </Container>
    );
}

export default CreateTaskPage;