import React from "react";
import ReactDOM from "react-dom";
import {
    Container
} from 'shards-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import "./index.css";

import Chat from 'chat/Chat';

const App = () => (
    <Container>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet ante vel massa rutrum lobortis ut sed ex. Nam mollis elit eros, a tempus massa viverra et. Cras molestie eu augue gravida porttitor. Sed tristique leo sed elit venenatis, ac pretium leo mollis. Donec lorem mauris, dictum quis ultrices ac, ultricies eu est. Vivamus bibendum mollis efficitur. Nunc lacinia metus vel sollicitudin gravida. Morbi venenatis quis urna vitae feugiat. Curabitur non lorem magna. Etiam viverra interdum dolor non tincidunt. Integer nibh urna, dapibus eget luctus nec, venenatis eget massa. Ut sollicitudin efficitur velit, nec faucibus urna molestie in.

</p>
        <h1>Chat!</h1>
        <Chat />
        <p>Donec eget tortor sit amet eros tincidunt ultrices vel sit amet sapien. Aenean enim nisl, semper ac molestie ut, laoreet eget dolor. Mauris iaculis ante non ullamcorper fringilla. Praesent accumsan purus sed turpis pharetra vestibulum. Etiam eu sapien et nibh vehicula luctus gravida sit amet leo. Ut auctor metus neque, a bibendum nisi tincidunt vel. Suspendisse a bibendum lectus. Maecenas at gravida dolor, ac varius justo. Proin finibus rutrum tempor. Pellentesque eu enim ex. Praesent viverra dolor purus, in aliquet dui tempor in. Proin commodo diam quis lectus dapibus, at varius dolor eleifend. Vivamus fermentum blandit neque vulputate pulvinar. Nullam sed feugiat erat, eget laoreet felis.

</p>
    </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
