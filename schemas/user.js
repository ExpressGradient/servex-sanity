export default {
    title: "User",
    name: "user",
    type: "document",
    fields: [
        {
            title: "Email",
            name: "email",
            type: "string",
        },
        {
            title: "Email Verified",
            name: "emailVerified",
            type: "boolean",
        },
        {
            title: "Name",
            name: "name",
            type: "string",
        },
        {
            title: "Slug",
            name: "slug",
            type: "string",
        },
        {
            title: "Picture URL",
            name: "pictureURL",
            type: "url",
        },
        {
            title: "Picture",
            name: "picture",
            type: "image",
        },
    ],
};
