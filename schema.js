export const typeDefs = `#graphql
    type Recipe {
        id: ID!
        title: String!
        ingredients: [String!]!
        reviews: [Review!]
    }

    type Review {
        id: ID!
        rating: Int!
        comment: String
        recipe: Recipe!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    type Query {
        reviews: [Review]
        review (id: ID!): Review
        recipes: [Recipe]
        recipe (id: ID!): Recipe
        authors: [Author]
        author (id: ID!): Author
    }

    type Mutation {
        addRecipe(recipe: AddRecipe!): Recipe
        deleteRecipe(id: ID!): [Recipe]
        updateRecipe(id: ID!, edits: EditRecipe!): Recipe
    }

    input AddRecipe {
        title: String!
        ingredients: [String!]!
    }

    input EditRecipe {
        title: String
        ingredients: [String!]
    }
`