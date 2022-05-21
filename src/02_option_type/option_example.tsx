import * as React from "react";

interface Data {
    value: string
}

function getSomeData(path: string) {
    if (path === "some/path") {
        const data: Data = {
            value: "data value"
        }
        return data;
    }
    return null;
}

export function Component() {
    const [dataOption, _setDataOption] = React.useState(() =>
        getSomeData("path")
    );

    const data = dataOption;

    if (data == null) return (
        <div>
            No data
        </div>
    )

    return (
        <div>
            {data.value}
        </div>
    )
}