import { defineType, defineField, defineArrayMember } from "sanity";

export const task = defineType({
  title: "Task",
  name: "task",
  type: "document",
  fields: [
    defineField({
      title: "Day",
      name: "day",
      type: "number",
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Unlocked",
      name: "unlocked",
      type: "boolean",
    }),
    defineField({
      title: "Start Date & Time",
      name: "startDate",
      type: "datetime",
    }),
    defineField({
      title: "End Date & Time",
      name: "endDate",
      type: "datetime",
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "blockContent",
    }),
  ],
});
