import React from "react";
import { Subscribe } from "unstated";

export default containers => WrappedComponent => props => (
    <Subscribe to={containers}>
        {(...containers) => (
            <WrappedComponent {...mapContainers(containers)} {...props} />
        )}
    </Subscribe>
);

const mapContainers = containers =>
    containers.reduce((obj, item) => {
        obj[
            item.constructor.name.charAt(0).toLowerCase() +
            item.constructor.name.slice(1)
        ] = item;
        return obj;
    }, {});