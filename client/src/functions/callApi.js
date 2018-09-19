async function callApi( address ) {
    const response = await fetch( address );
    const body = await response.json();

    if (response.status !== 200) throw Error(body);

    return body;
};

export default callApi;