import { GraphQLFormattedError } from "graphql";

type Error = {
    message: string;
    statusCode: string;
};

const custonFetch = async (url: string, options: RequestInit) => {
    const accessToken = localStorage.getItem("access_token");

    const headers = options.headers as Record<string, string>;
    return await fetch(url, {
        ...options,
        headers: {
            ...headers,
            Authorization: headers?.Authorization || `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            "Apollo-Require-Preflight": "true",
        },
    });
};

const getGraphQLErrors = (
    body: Record<"errors", GraphQLFormattedError[] | undefined>
): Error | null => {
    if (!body) {
        return {
            message: "Unknown record",
            statusCode: "INTERNAL_SERVER_ERROR",
        };
    }

    if ("errors" in body) {
        const errors = body?.errors;
        
        const messeges = errors?.map((error) => error?.message)?.join("");
        const code = errors?.[0]?.extensions?.code;
        console.log(messeges)

        return {
            message: messeges || JSON.stringify(errors),
            statusCode: code || 500,
        };
    }

    return null;
};

export const fetchWrapper = async (url: string, options: RequestInit) => {
    const response = await custonFetch(url, options);

    const responseClone = response.clone();
    const body = await responseClone.json();
    const error = getGraphQLErrors(body);
    console.log(await response.json())

    if (error) {
        throw error;
    }

    return response;
};
