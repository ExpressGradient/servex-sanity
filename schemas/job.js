export default {
    title: "Job",
    name: "job",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string"
        },
        {
            title: "Description",
            name: "description",
            type: "string"
        },
        {
            title: "Categories",
            name: "categories",
            type: "array",
            of: [{
                type: "reference",
                to: [{type: "category"}]
            }]
        },
        {
            title: "Reward",
            name: "reward",
            type: "number"
        },
        {
            title: "Last Date",
            name: "lastDate",
            type: "datetime"
        },
        {
            title: "Address",
            name: "address",
            type: "string"
        },
        {
            title: "Author",
            name: "author",
            type: "reference",
            to: [{type: "user"}]
        }
    ]
}
