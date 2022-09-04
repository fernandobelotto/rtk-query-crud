import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002/",
  }),
  tagTypes: ["Entities"],
  endpoints: (builder) => ({
    getEntities: builder.query({
      query: () => `entities`,
      providesTags: [{ type: "Entities", id: "LIST" }],
    }),
    getEntitieById: builder.query({
      query: ({ id }) => `entities/${id}`,
    }),
    updateEntitie: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `entities/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "Entities", id: "LIST" }],
    }),
    createEntitie: builder.mutation({
      query: (body) => ({ url: `entities`, method: "POST", body: body }),
      invalidatesTags: [{ type: "Entities", id: "LIST" }],
    }),
    deleteEntitie: builder.mutation({
      query: (id) => ({ url: `entities/${id}`, method: "DELETE" }),
      invalidatesTags: [{ type: "Entities", id: "LIST" }],
    }),
  }),
});

export const {
  useCreateEntitieMutation,
  useGetEntitieByIdQuery,
  useGetEntitiesQuery,
  useUpdateEntitieMutation,
  useDeleteEntitieMutation,
} = api;
