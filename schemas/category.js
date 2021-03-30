export default {
	title: "Category",
	name: "category",
	type: "document",
	fields: [
		{
			title: "Name",
			name: "name",
			type: "string"
		},
		{
			title: "Jobs",
			name: "jobs",
			type: "array",
			of: [{
				type: "reference",
				to: [{type: "job"}]
			}]
		}
	]
}
